import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { TicketStatusService } from '@app/services/helpdesk/ticket-status.service';
// import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { DataService } from '@app/services/helpdesk/data.service';


@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrls: ['./ticket-status.component.scss']
})
export class TicketStatusComponent implements OnInit {
  createForm: FormGroup;

  public payuform: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  ticketStatusDropdown: any;
  formSubmitted = false;
  list: any;

  searchList = {
    ticketstatusname: '',
    status: ''
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: TicketStatusService,
    private dataService: DataService

  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };

    this.getTicketStatusList();
    this.getTicketStatusListdetails();
    this.createFormGrp();

  }

  getTicketStatusList() {
    this.service.getTicketStatusList().subscribe((resp: any) => {
      this.ticketStatusDropdown = resp.data;
    });
  }

  getTicketStatusListdetails() {
    this.service.getTicketStatusList().subscribe((resp: any) => {
      this.list = resp.data;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });


  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      ticketstatusname: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  get f() {
    return this.createForm.controls;
  }

  search() {
    // if (form.valid === false) {
    //   this.formSubmitted = true;
    // } else {

    //   if(this.f.ticketstatusname.value != '' && this.f.status.value != ''){
    let postdata = {
      "filters": { "ticketStatusId": this.searchList['ticketstatusname'], "status": this.searchList['status'] },
      "pageNo": 0,
      "paginationSize": 10,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }

    console.log(postdata);

    this.service.searchTicketStatus(postdata).subscribe((resp: any) => {
      console.log(resp);
      this.list = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];

      //  if(resp.status == 's'){
      //   this.list = resp.data.contents;
      //   }else{
      //     this.list =resp
      //   }
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    //   }
    // }



  }

  clear() {
    // this.createForm.reset();
    this.searchList.ticketstatusname = '';
    this.searchList.status = '';
    this.getTicketStatusListdetails();
  }


  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/ticket-status/view/', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/ticket-status/edit/', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ListHeader = [
    'Ticket Status',
    'Status',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
  ];

  ListTableKeys = [
    {
      data: 'ticketstatusname',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'status',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'created_by',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    {
      data: 'created_date',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modified_by',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modified_date',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

  ]

  export() {
    this.list.forEach(element => {
      if (element.modifiedDate) {
        element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
      }

      if (element.createdDate) {
        element.createdDate = element.createdDate ? moment(element.createdDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
      }
    });
    this.dataService.downloadExcel(this.list, 'Ticketstatus', [this.ListHeader, this.ListTableKeys])
  }


}
