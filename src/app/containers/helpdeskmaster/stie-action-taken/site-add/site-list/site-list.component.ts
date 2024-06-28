import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  ticketListDisplayedColumns = [
    'position',
    'siteActionTaken',
    'observation',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  searchmethod: boolean = false;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchList = {
    actionTaken: ''
  }
  dropdowngetObservation: any;
  list: any;
  constructor(private router: Router, private service: CommonApiServiceService, private dataService: DataService) { }

  ngOnInit() {
    this.getall();
    this.gettable();
  }

  getall() {
    this.service.getAll(apiUrls.getAllSiteActionTaken).subscribe((resp: any) => {
      this.list = resp.data;
      this.dropdowngetObservation = resp.data
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
      this.gettable();
    }
  }
  gettable() {
    let req = {
      "filters": {
        actionTaken: this.searchList['actionTaken']
      },
      "pageNo": this.tablePageIndex, "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.siteActionTakenList, req).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = false
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
  search() {
    let req = {
      "filters": {
        actionTaken: this.searchList['actionTaken']
      },
      "pageNo":this.tablePageIndexsearch, "paginationSize": this.itemsPerPagesearch, "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.siteActionTakenList, req).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = true
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
  clear() {
    this.searchList = {
      actionTaken: ''
    }
    this.search();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/site-action-taken/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/site-action-taken/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/site-action-taken/add']);
    }

  }



  ListHeader = [
    'Site Action Taken',
    ' Site Observation',
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
      data: 'observation',
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
    let req = {
      "filters": {
        "observation": this.searchList['Observation']
      },
      "pageNo": 0, "paginationSize": this.totalRecords,
      "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.service.post(apiUrls.siteActionTakenList, req).subscribe((res: any) => {

      if (res.status == "s" && res.errorCode == 200) {
        // res.data.contents.forEach(element => {
        //   if(element.observation !=undefined){
        //     element.Observation=element.observation.observation
        //   }
        // });
        this.dataService.downloadExcel(res.data.contents, 'Site Action Taken', [this.ListHeader, this.ListTableKeys])
      }

    });

  }

}
