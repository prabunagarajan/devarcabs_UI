import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CategoryService } from '@app/services/helpdesk/category.service';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  createForm: FormGroup;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  active: boolean;
  categorylist: any;
  list: any;
  formSubmitted = false;
  categoryid: number;
  categorystatus: boolean;
  categoryfilter: {

  };
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  searchList = {
    name: '',
    status: ''
  }
  dropdowngetcatogry: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private service: CommonApiServiceService,
    private dataService: DataService

  ) { }

  ticketListDisplayedColumns = [
    'position',
    'name',
    'mobileNumber',
    'drivingLicenseNumber',
    'aadharNumber',
    'createdDate',
    'active',
    'action'
  ]

  ngOnInit() {
    this.getall();
    this.getactiveDriver();
  }



  get f() {
    return this.createForm.controls;
  }

  getactiveDriver() {
    this.service.getAll(apiUrls.driverDetailsActive).subscribe((resp: any) => {
      this.dropdowngetcatogry = resp.data;

    });
  }

  getall() {
    // let req = {
    //   "filters": {
    //     "id": this.searchList['driverName'],
    //     "status": this.searchList['status']
    //   },
    //   "pageNo": this.tablePageIndex,
    //   "paginationSize": this.itemsPerPage,
    //   "sortField": "modifiedDate",
    //   "sortOrder": "DESC"

    // }

    this.service.getAll(apiUrls.driverDetailsList).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.searchmethod = false
        this.list = resp.data
        // this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort=this.sort
        this.dataSource.paginator=this.paginator
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }
    });
  }

  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getall();
    }
  }
  search() {
    let req = {
      "filters": {
        "name": this.searchList['name'],
        "status": this.searchList['status']
      },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"

    }
    this.service.post(apiUrls.driverDetailsSearch, req).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.searchmethod = true
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort=this.sort
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }
    });
  }

  clear() {
    // this.createForm.reset();
    this.searchList.name = '';
    this.searchList.status = '';
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getall();
  }

  viewcategory(id) {
    this.router.navigate(['/devar-cabs/master/driver-details/view', id]);
  }

  editcategory(id) {
    this.router.navigate(['devar-cabs/master/driver-details/edit/', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ListHeader = [
    'name',
    'mobileNumber',
    'drivingLicenseNumber',
    'aadharNumber',
    'createdDate',
    'active'
  ];

  ListTableKeys = [
    {
      data: 'name',
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
    },
    {
      data: 'active',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]

  export() {
    let req = {
      "filters": {
        "id": this.searchList['name'],
        "status": this.searchList['status']
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"

    }
    this.service.post(apiUrls.ticketsearchCategory, req).subscribe((resp: any) => {
      if (resp.status == 's') {

        let list = resp.data.contents
 
        this.dataService.downloadExcel(list, 'Category', [this.ListHeader, this.ListTableKeys])
      }


    });


  }


}
