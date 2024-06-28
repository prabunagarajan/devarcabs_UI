import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { AccessoriesService } from '@app/services/helpdesk/accessories.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  createForm: FormGroup;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  active: boolean;
  accessorieslist: any;
  accessoriesdropdown: any;
  list: any;
  formSubmitted = false;


  searchList = {
    accessoriesName: '',
    // status:''
  }


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private service: AccessoriesService, private dataService: DataService

  ) { }

  ngOnInit() {
    this.getaccessorieslist();
    this.getaccessoriesdropdown();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.createFormGrp();

  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      accessoriesName: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  get f() {
    return this.createForm.controls;
  }

  getaccessoriesdropdown() {
    this.service.getdropdownassetaccessorieslist().subscribe((resp: any) => {
      this.accessoriesdropdown = resp.data;
    });
  }

  getaccessorieslist() {
    this.service.getassetaccessorieslist().subscribe((responceData: any) => {

      this.list = responceData.data
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

  search() {


    let postdata = {
      "filters": { "assetAccessories": this.searchList['accessoriesName'] },
      "fromDate": "string",
      "pageNo": 0,
      "paginationSize": 10,
      "search": "string",
      "sortField": "modefiedDate",
      "sortOrder": "DESC",
      "toDate": "string"
    }
    this.service.getassetaccessoriessearch(postdata).subscribe((resp: any) => {
      console.log(resp);
      this.list = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];
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

  clear() {
    this.searchList.accessoriesName = '';
    this.getaccessorieslist();
  }

  viewaccessories(Id) {
    this.router.navigate(['/helpdeskmaster/accessories/view/', Id]);
  }

  editaccessories(Id) {
    this.router.navigate(['/helpdeskmaster/accessories/edit/', Id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ListHeader = [
    'Accessories Code',
    'Accessories Name',

    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'accessoriesCode',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    {
      data: 'accessoriesName',
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
      data: 'createdDate',
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
      if (element.modified_date) {
        element.modifiedDate = element.modified_date 
      }

      if (element.created_date) {
        element.createdDate = element.created_date 
      }
    });
    this.dataService.downloadExcel(this.list, 'Accessories', [this.ListHeader, this.ListTableKeys])
  }

}
