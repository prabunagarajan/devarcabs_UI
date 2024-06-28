import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-asset-type',
  templateUrl: './asset-type.component.html',
  styleUrls: ['./asset-type.component.scss']
})
export class AssetTypeComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;

  searchList = {
    assetType: '',
    status: '',
  }
  dropdown: any;
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ticketListDisplayedColumns = [
    'position',
    'type',
    // 'createdBy',
    // 'createdDate',
    // 'modifiedBy',
    // 'modifiedDate',
    'active',
    'action'
  ]
  constructor(private router: Router, private service: CommonApiServiceService, private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getll();

    this.getassettyep();
  }
  getassettyep() {
    this.service.getAll(apiUrls.assetTypegetAll).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  getll() {
    let postdata = {
      "filters": { "id": '', "status": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.service.post(apiUrls.searchapi, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.searchmethod = false
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
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
      this.getll();
    }
  }
  search() {
    let postdata = {
      "filters": { "id": this.searchList['assetType'], "status": this.searchList['status'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.service.post(apiUrls.searchapi, postdata).subscribe((resp: any) => {

      if (resp.status == 's') {
        this.searchmethod = true
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }

    });
  }
  clear() {
    this.searchList = {
      assetType: '',
      status: '',
    }
    this.tablePageIndex = 0,
    this.itemsPerPage = 10
  this.tablePageIndexsearch = 0;
  this.itemsPerPagesearch = 10;
    this.getll();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/asset-type/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/asset-type/edit', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getsub(event) {

  }

  ListHeader = [
    'Asset Type',
    // 'Created By',
    // 'Created On',
    // '{{'helpdesk.Modifiedby' | translate}}',
    // 'Modified On',
    'Status',
  ];

  ListTableKeys = [
    {
      data: 'type',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },

    // {
    //   data: 'createdBy',
    //   "className": "Capitalise",
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },

    // {
    //   data: 'createdDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedBy',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    {
      data: 'status',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    }
  ]
  export() {
    let postdata = {
      "filters": { "id": '', "status": '' },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.service.post(apiUrls.searchapi, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {

        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }

          if (element.createdDate) {
            element.createdDate = element.createdDate ? moment(element.createdDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }
        });

        this.dataService.downloadExcel(list, 'Asset Type', [this.ListHeader, this.ListTableKeys])
      } else {

      }

    });

  }
}
