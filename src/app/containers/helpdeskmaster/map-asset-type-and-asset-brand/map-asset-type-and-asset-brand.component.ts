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
  selector: 'app-map-asset-type-and-asset-brand',
  templateUrl: './map-asset-type-and-asset-brand.component.html',
  styleUrls: ['./map-asset-type-and-asset-brand.component.scss']
})
export class MapAssetTypeAndAssetBrandComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;

  searchList = {
    assetBrand: '',
    assetType: '',
    status: '',
  }
  dropdown: any;
  dropdowngetbrand: any;
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
    'assetBrand',

    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  constructor(private router: Router, private service: CommonApiServiceService, private dataService: DataService) { }

  ngOnInit() {
    this.getll();
    this.getassettyep();
    this.getbrand();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {
      // this.list = resp.data;
      this.dropdown = resp.data;
    });
  }
  getbrand() {
    this.service.getAll(apiUrls.getActiveAssetbrand).subscribe((resp: any) => {
      // this.list = resp.data;
      this.dropdowngetbrand = resp.data;
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
  getll() {
    let postdata = {
      "filters": { "assetTypeId": '', "status": '', "assetBrandId": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "Desc"


    }
    this.service.post(apiUrls.searchMapAsset, postdata).subscribe((resp: any) => {

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
    let postdata = {
      "filters": { "assetTypeId": this.searchList['assetType'], "status": this.searchList['status'], "assetBrandId": this.searchList['assetBrand'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "Desc"


    }
    this.service.post(apiUrls.searchMapAsset, postdata).subscribe((resp: any) => {

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
      assetBrand: '',
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
    this.router.navigate(['/helpdeskmaster/map-asset-type-and-asset-brand/view', id]);
  }

  navigateEdit(Id) {
    if (Id != '') {
      this.router.navigate(['/helpdeskmaster/map-asset-type-and-asset-brand/addEdit', Id]);
    } else {
      this.router.navigate(['/helpdeskmaster/map-asset-type-and-asset-brand/add']);
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ListHeader = [
    'Asset Type',
    'Asset Brand',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
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
      data: 'assetBrand',
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
    let postdata = {
      "filters": { "assetTypeId": this.searchList['assetType'], "status": this.searchList['status'], "assetBrandId": this.searchList['assetBrand'] },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "Desc"


    }
    this.service.post(apiUrls.searchMapAsset, postdata).subscribe((resp: any) => {
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
        this.dataService.downloadExcel(list, 'Map Asset Type And Asset Brand', [this.ListHeader, this.ListTableKeys])
      } else {

      }
    });

  }

}
