import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shiftconfiguration',
  templateUrl: './shiftconfiguration.component.html',
  styleUrls: ['./shiftconfiguration.component.scss']
})
export class ShiftconfigurationComponent implements OnInit {

  list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  createObj: any = {
    shiftconfiguration: '',

  }
  dropdowngetshiftconfig: any;
  listdrop: any;
  
  constructor( private router: Router,private service: CommonApiServiceService,private dataService: DataService) { }

  ngOnInit() {
    this.getall();
    this.getShiftConfiguration()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getall() {
    this.service.getAll(apiUrls.getAllShiftConfigurartion).subscribe((resp: any) => {
      this.list = resp.data;
      this.listdrop = resp.data;
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
  getShiftConfiguration(){
    this.service.getAll(apiUrls.getShiftConfiguration).subscribe((resp: any) => {
      this.dropdowngetshiftconfig = resp.data;

    });
  }
  search() {
    let req = {
      "filters": { "shiftConfig": this.createObj['shiftconfiguration'], "status": true },
      "pageNo": 0,
      "paginationSize": 10,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchShiftConfiguration, req).subscribe((resp: any) => {
      if (resp.status == 's') {
   this.list=resp.data.contents
      } else {
        this.list = resp
      }

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
  clearfilter() {
    this.createObj = {
      shiftconfiguration : ''
    };
    this.getall();
  }
  navigateEdit(id) {
    if(id != ''){
      this.router.navigate(['/helpdeskmaster/shiftconfiguration/edit',id]);
    }else {
    this.router.navigate(['/helpdeskmaster/shiftconfiguration/add']);
    }
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/shiftconfiguration/view', id]);
  }
  ListHeader = [

    'Shift Configuration',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [

    {
      data: 'configuration',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'createdBy',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    {
      data: 'createdDate',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modifiedBy',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'modifiedDate',
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
  ]
  export() {
    this.list.forEach(element => {
      if (element.modifiedDate) {
        element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('MMM DD , yyyy , hh:mm:ss a') : '-'
      }

      if (element.createdDate) {
        element.createdDate = element.createdDate ? moment(element.createdDate).format('MMM DD , yyyy, hh:mm:ss a') : '-'
      }
    });
    this.dataService.downloadExcel(this.list, 'Shift Configuration', [this.ListHeader, this.ListTableKeys])
  }
}
