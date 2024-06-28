import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-actiontaken',
  templateUrl: './actiontaken.component.html',
  styleUrls: ['./actiontaken.component.css']
})
export class ActiontakenComponent implements OnInit {
  searchForm: FormGroup;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;
  createObj: any = {
    category: '',
    subcategory: '',
    actionTaken: ''
  }
  dropdown: any;
  category: any;
  sub: any;
  cat: any;

  formSubmitted = false;
  problem: any;
  constructor(private router: Router,
    private service: ActionTakenService, private dataService: DataService,
    private fb: FormBuilder,
    private Service: CommonApiServiceService) {
    this.searchForm = this.fb.group({
      category: [''],
      subcategory: [''],
      actualProblemId: [''],
      actionTaken: ['']
    })
  }

  ngOnInit() {
    this.getAllActionTaken();
    // this.getActiveActionTakenList();
    this.getcat();
  }

  get f() {
    return this.searchForm.controls;
  }

  getAllActionTaken() {
    this.service.getAllActionTakenList().subscribe((resp: any) => {
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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getActualProblem() {
    this.Service.getAll(apiUrls.ActualProblemBasedONcat + this.f.category.value + '/' + this.f.subcategory.value).subscribe((responceData: any) => {
      this.problem =  (responceData.status === 's') ? responceData.data : [];
    });
  }
  getActiveActionTakenList() {
    this.Service.getAll(apiUrls.ActionTakenBasedONcat + this.f.category.value + '/' + this.f.subcategory.value + '/' + this.f.actualProblemId.value).subscribe((responceData: any) => {
      this.dropdown =  (responceData.status === 's') ? responceData.data : [];
    });
  }
  getcat() {

    this.Service.getAll(apiUrls.getcatogry).subscribe((responceData: any) => {

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getsub() {
    this.f.subcategory.setValue('');
    this.f.actionTaken.setValue('');
    this.searchForm.get('actualProblemId').setValue('');
    this.dropdown =[]
    this.problem=[]  
    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f.category.value).subscribe((resp: any) => {
      this.sub = (resp.status === 's') ? resp.data : [];

    });
  }
  search(searchForm) {
    this.formSubmitted = true;
    // if(searchForm.valid){
    const postdata = {
      "filters": { "categoryId": (this.f.category.value), "subCategoryId": (this.f.subcategory.value), "actionTaken": this.f.actionTaken.value },
      "pageNo": 0,
      "paginationSize": 10,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }
    this.service.searchActionTaken(postdata).subscribe((resp: any) => {
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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    // }
  }
  clearfilter() {
    this.formSubmitted = false;
    this.formDirective.resetForm()
    this.f.category.setValue('');
    this.f.subcategory.setValue('');
    this.f.actionTaken.setValue('');
    this.f.actualProblemId.setValue('');  
    this.sub =[]
    this.dropdown =[]
    this.problem=[]
    this.getAllActionTaken();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/actiontaken/view', id]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/actiontaken/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/actiontaken/add']);
    }
  }
  ListHeader = [
    'Action Taken',
    'Category',
    'Sub Category',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'actionTaken',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'categoryName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'subcategoryName',
      "className": "Capitalise",
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
    }, {
      data: 'active',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]
  export() {
    // let req = {
    //   "filters": {
    //     "subCategoryId": '',
    //     "categoryId": '', "status": ''
    //   },
    //   "pageNo": 0,
    //   "paginationSize": this.totalRecords,
    //   "sortField": "modifiedDate",
    //   "sortOrder": "modifiedDate"

    // }
    // this.Service.post(apiUrls.searchID, req).subscribe((resp: any) => {
    //   if (resp.status == 's') {
    // let list = resp.data.contents
    // this.list.forEach(element => {
    //   if (element.modifiedDate) {
    //     element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
    //   } else if (element.createdDate) {
    //     element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
    //   }
    // });
    this.dataService.downloadExcel(this.list, 'Action Taken', [this.ListHeader, this.ListTableKeys])
  }
  // }); }

}

