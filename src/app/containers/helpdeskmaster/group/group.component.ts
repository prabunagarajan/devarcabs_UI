import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { GroupService } from '@app/services/helpdesk/group.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  createObj: any = {
    gname: '',
  }
  tablePageIndex = 0;
  itemsPerPage = 10;
  ticketListDisplayedColumns = [
    'position',
    'roleCode',
    'roleName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  totalRecords: any;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  list: any;
  dropdwon: any;
  constructor(private Service: CommonApiServiceService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.listgroup();
    this.GetRole();
  }
  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.listgroup()
  }
  GetRole() {
    let req = {
      "filters": {
        "roleName": ''
      },
      "pageNo": 0,
      "paginationSize": 100,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.Service.post(apiUrls.searchRoles, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.dropdwon = res.data.contents;

      } else {
        this.dropdwon = []
      }
    });
  }
  listgroup() {
    let req = {
      "filters": {
        "roleName": this.createObj['gname']
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.Service.post(apiUrls.searchRoles, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.list = res.data.contents;
        this.totalRecords = res.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = new MatTableDataSource<any>();
      }
    });

  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/groups/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/groups/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/groups/add']);
    }
   
  }

  searchgroup() {
    this.tablePageIndex = 0;
    this.itemsPerPage = 10;
    this.listgroup();

  }
  clearfilter() {
    this.createObj = {};
    this.listgroup();
  }
  ListHeader = [
    'Role Code',
'Role Name',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
 {
      data: 'roleCode',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'roleName',
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
      data: 'status',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]
  export() {
    let req = {
      "filters": {
        "roleName": this.createObj.gname
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.Service.post(apiUrls.searchRoles, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.dataService.downloadExcel(res.data.contents, 'Role', [this.ListHeader, this.ListTableKeys])
      } else {

      }
    });


  }
}

