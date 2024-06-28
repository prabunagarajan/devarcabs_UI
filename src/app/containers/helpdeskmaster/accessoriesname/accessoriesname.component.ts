import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-accessoriesname',
  templateUrl: './accessoriesname.component.html',
  styleUrls: ['./accessoriesname.component.scss']
})
export class AccessoriesnameComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;
  dropdown: any;
  dropdowngetbrand: any;
  dropdowndevice: any;
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
    'assetType',
    'assetName',
    'assetSubType',
    // 'createdBy',
    // 'createdDate',
    // 'modifiedBy',
    // 'modifiedDate',
    'active',
    'action'
  ]
  dropdowngetsubtype: any;
  constructor(private router: Router, private service: CommonApiServiceService,private dataService: DataService,) { }

  searchList = {
    assetType: '',
    assetName: '',
    assetSubType: '',
    status: ''

  }

  ngOnInit() {
    this.getll();
    this.getassettyep();
    this.getbrand();
    this.getsubtype();
  }

  clear(){
    this.searchList['assetName'] = ''
    this.searchList['assetType'] = ''
    this.searchList['status'] = ''
    this.searchList['assetSubType'] = ''
    this.getll();
  }

  getll() {
    let req = {
      "filters": {
        "assetName": '',
        "type": '', 
        "assetsubType": '',
        "status": true
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.service.post(apiUrls.assetSubTypeList,req).subscribe((resp: any) => {
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
  search() {
    let req = {
     "filters": { "assetName": (this.searchList['assetName']), "type": (this.searchList['assetType']),
      "assetsubType": this.searchList['assetSubType'], "status": this.searchList['status'],
      "createdBy": (localStorage.getItem('USER_ID')) },
      "fromDate": "",
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"


    }

    this.service.post(apiUrls.assetSubTypeList, req).subscribe((resp: any) => {
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
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  getbrand() {
    this.service.getAll(apiUrls.deviceActive).subscribe((resp: any) => {

      this.dropdowngetbrand = resp.data;
    });
  }

  getsubtype() {
    this.service.getAll(apiUrls.assetSubTypeActive).subscribe((resp: any) => {

      this.dropdowngetsubtype = resp.data;
    });
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/asset-subtype/edit', id]);
  }

  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/asset-subtype/view', id]);
  }

  ListHeader = [
    'Asset Type',
    'Asset Name',
    'Asset Subtype',
    // 'Created By',
    // 'Created On',
    // 'Modified By',
    // 'Modified On',
    'Status',
  ];

  ListTableKeys = [
    {
      data: 'assetType',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'assetName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'assetsubType',
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
      "filters": { "assetName": this.searchList['assetName'], "type": this.searchList['assetType'],
      "assetsubType": this.searchList['assetSubType'], "status": this.searchList['status'] },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.service.post(apiUrls.assetSubTypeList, postdata).subscribe((resp: any) => {
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

        this.dataService.downloadExcel(list, 'Asset Subtype', [this.ListHeader, this.ListTableKeys])
      } else {

      }

    });

  }
}
