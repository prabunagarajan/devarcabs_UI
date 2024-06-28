import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@app/services';

import { Subject } from 'rxjs';
import * as moment from 'moment';
import { UserManagmentService } from '@app/services/usermanagement/user-managment.service';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { UserManagementService } from '@app/services/helpdesk/user-management.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  createForm: FormGroup;

  public payuform: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  dateselected: any = moment().format('LLLL');
  usermanagementlist: any;
  formSubmitted = false;
  list: any;
  totalRecords: any;
  tablePageIndex: number = 0;
  itemsPerPage: number = 5;
  searchList = {
    employeeId: '',
    username: ''
  }
  createdTicketsDisplayedColumns = [
    'position',
    'employeeId',
    'username',
    'emailId',
    'phoneNumber',
    'designationValue',
    'employmentStatus',
    'action',

  ]
  constructor(private router: Router, private service: UserManagementService,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private dataService: DataService

  ) { }

  ngOnInit() {
    this.getusermanagementlist();
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
      employeeId: ['', Validators.required],
      username: ['', Validators.required],
    });

  }

  get f() {
    return this.createForm.controls;
  }

  search() {
    this.tablePageIndex = 0;
    this.itemsPerPage = 5;
    let postdata = {
      "filters": { "employeeId": this.searchList['employeeId'], "username": this.searchList['username'] },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "Desc"
    }
    this.service.getusermanagementlist(postdata).subscribe((resp: any) => {

      if ((resp.status === 's')) {
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0'
      }
    });

  }

  clear() {
    this.searchList.employeeId = '';
    this.searchList.username = '';
    this.tablePageIndex = 0;
    this.itemsPerPage = 5;
    this.getusermanagementlist();
  }

  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getusermanagementlist();
  }
  getusermanagementlist() {
    let postdata = {
      "filters": { "employeeId": "", "username": "" },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",

      "sortOrder": "Desc"
    }
    this.service.getusermanagementlist(postdata).subscribe((resp: any) => {
      if ((resp.status === 's')) {
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0'
      }
    });
  }

  navigateView(id) {
    this.router.navigate(['/helpdesk/user-management/view/', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdesk/user-management/edit/', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ListHeader = [
    'Employee ID',
    'User Name',
    'Email',
    'Mobile No',
    'Designation',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'employeeId',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'username',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    {
      data: 'emailId', "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'phoneNumber', "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'designationValue', "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'employmentStatus', "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },


  ]

  export() {
    let postdata = {
      "filters": { "employeeId": "", "username": "" },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",

      "sortOrder": "Desc"
    }
    this.service.getusermanagementlist(postdata).subscribe((resp: any) => {
      if ((resp.status === 's')) {
        this.list = resp.data.contents
        this.dataService.downloadExcel(this.list, 'Usermanagement', [this.ListHeader, this.ListTableKeys])

      } else {
        this.totalRecords = '0'
      }
    });
  }

}
