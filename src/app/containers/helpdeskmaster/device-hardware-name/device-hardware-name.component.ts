import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-device-hardware-name',
  templateUrl: './device-hardware-name.component.html',
  styleUrls: ['./device-hardware-name.component.scss']
})
export class DeviceHardwareNameComponent implements OnInit {

  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  formSubmitted = false;
  searchForm: FormGroup;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 10;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  ticketListDisplayedColumns = [
    'position',
    'deviceName',
    'assetType',
    // 'createdBy',
    // 'createdDate',
    // 'modifiedBy',
    // 'modifiedDate',
    'status',
    'action'
  ]


  searchmethod: boolean = false;
  searchList: any = {
    Asset: "",
    deviceName: '',
    status: ''
  }
  dropdownasset: any='';
  dropdowngetbrand: any;
  constructor(private router: Router,
    private fb: FormBuilder, private service: CommonApiServiceService, private dataService: DataService,) {

  }

  ngOnInit() {
    this.getAllproblems();
    this.getassettyep();
    this.getbrand();
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getAllproblems();
    }
  }
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdownasset = resp.data;
    });
  }
  get f() { return this.searchForm.controls; }

  getAllproblems() {
    const postdata = {
      "filters": {
        "deviceName": "",
        "assetTypeId": '',
        "status": "",
        "createdBy": localStorage.getItem('userId')
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.DeviceHardwareNameList, postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        this.searchmethod = false
        if (res.status == "s" && res.errorCode == 200) {
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.sort = this.sort;

        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();

        }
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();

      }
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });

  }
  clearfilter() {

    this.searchList = {
      supplier: '',
      supplierName: '',
      status: ''
    }
    this.searchmethod = false
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getAllproblems();
  }

  getbrand() {
    this.service.getAll(apiUrls.deviceActive).subscribe((resp: any) => {

      this.dropdowngetbrand = resp.data;
    });
  }
  search() {
    const postdata = {
      "filters": {
        "deviceName": this.searchList.deviceName,
        "assetTypeId": this.searchList.Asset,
        "status": this.searchList.status,
        "createdBy": localStorage.getItem('userId')
      },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.DeviceHardwareNameList, postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = true
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();

        }
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();

      }
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });

  }



  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/device-hardware-name/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/device-hardware-name/edit', id]);
  }

  ListHeader = [
    '  Asset Name',
    '  Asset Type',
    // 'Created By',
    // 'Created On',
    // 'Modified By',
    // 'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'deviceName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'assetType',
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
    },
  ]
  export() {
    const postdata = {
      "filters": {
        "deviceName": "",
        "assetTypeId": '',
        "status": "",
        "createdBy": localStorage.getItem('userId')
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.DeviceHardwareNameList, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
          } else if (element.createdDate) {
            element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
          }
        });
        this.dataService.downloadExcel(list, 'Asset Name', [this.ListHeader, this.ListTableKeys])
      }

    })
  }
}
