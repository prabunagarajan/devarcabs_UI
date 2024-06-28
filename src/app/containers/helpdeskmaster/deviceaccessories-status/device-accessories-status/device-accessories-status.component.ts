import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-device-accessories-status',
  templateUrl: './device-accessories-status.component.html',
  styleUrls: ['./device-accessories-status.component.scss']
})
export class DeviceAccessoriesStatusComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  DeviceStatus
  list: any;
  dropdown: any;
  constructor(private router: Router, private service: CommonApiServiceService) { }
  searchList = {
    Accessories: '',
    status: ''
  }
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  ticketListDisplayedColumns = [
    'position',
    'deviceAccesoriesStatus',

    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  ngOnInit() {
    this.getall();
    this.getassettyep();
  }
  getassettyep() {
    this.service.getAll(apiUrls.Getalldeviceaccessoriesstatus).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  getall() {

    let postdata = {
      "filters": { "id": this.searchList['Accessories'], "status": this.searchList['status'] },
      "pageNo":  this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.getdevicesearch, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.searchmethod = false
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

    let postdata = {
      "filters": { "id": this.searchList['Accessories'], "status": this.searchList['status'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize":  this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.getdevicesearch, postdata).subscribe((resp: any) => {
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
    this.searchList = {
      Accessories: '',
      status: ''
    }
    this.getassettyep()
    this.getall();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/device-accessories-status/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/device-accessories-status/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/device-accessories-status/add']);
    }
  }
}
