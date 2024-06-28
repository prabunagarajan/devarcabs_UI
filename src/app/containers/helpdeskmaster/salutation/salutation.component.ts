import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.scss']
})
export class SalutationComponent implements OnInit {

  createObj: any = {
    salutation: '',
    status: ''
  }

  statusOptions = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false }
  ];

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

  displayColumns = [
    'position',
    'salutationname',
    'createdDate',
    'createdBy',
    'modifiedDate',
    'modifiedBy',
    'status',
    'action'
  ];

  list: any;
  constructor(
    private service: CommonApiServiceService,
    private router: Router, private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getSalutationList();
  }
  clear() {
    this.createObj = {
      salutation: '',
      status: ''
    }
    this.getSalutationList()
  }
  getSalutationList() {
    const searchParam = {
      "filters": {
        "name": this.createObj.salutation,
        "status": this.createObj.status
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC",
    };
    this.service.post(apiUrls.searchSalutation, searchParam).subscribe(res => {
      if (res.status == "s" && res.errorCode == 200) {
        this.tableData = res.data.contents;
        this.totalRecords = res.data.numberOfElements;
        this.dataSource = new MatTableDataSource<any>(this.tableData);

        this.dataSource.sort = this.sort;
      } else {
        this.noTableData = 'No Records Found';
        this.dataSource = new MatTableDataSource<any>();
      }
    });
  }
  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getSalutationList();
  }
  searchSalutation() {
    this.tablePageIndex = 0,
      this.itemsPerPage = 5,
      this.getSalutationList()
  }



  navigateView(data) {
    this.router.navigate([`/helpdeskmaster/salutation/view/${data.id}`]);
  }
  navigateEdit(data) {
    this.router.navigate([`/helpdeskmaster/salutation/edit/${data.id}`]);
  }

  ListHeader = [
    'Salutation Name',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',
  ];

  ListTableKeys = [
    {
      data: 'salutationname',
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
    }
  ]

  export() {

    const searchParam = {
      "filters": {
        "name": this.createObj.salutation,
        "status": this.createObj.status
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "DESC",
    };
    this.service.post(apiUrls.searchSalutation, searchParam).subscribe(res => {
      if (res.status == "s" && res.errorCode == 200) {
        this.dataService.downloadExcel(res.data.contents, 'Salutation', [this.ListHeader, this.ListTableKeys])
      } else {
      }
    });
  }
}
