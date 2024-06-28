import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shiftworkingdays',
  templateUrl: './shiftworkingdays.component.html',
  styleUrls: ['./shiftworkingdays.component.scss']
})
export class ShiftworkingdaysComponent implements OnInit {
  list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  createObj: any = {
    shiftworkingdays: '',
  }
  shiftSearchError: boolean = false;
  dropdowngetshiftworking: any;


  constructor(private router: Router, private service: CommonApiServiceService, private dataService: DataService) { }
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  ticketListDisplayedColumns = [
    'position',
    'workingdays',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]
  ngOnInit() {
    this.getall();
    this.getShiftWorkingDays();
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
  getall() {
    let req = {
      "filters": { "workingdays": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchShiftWorkingDays, req).subscribe((resp: any) => {
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
  getShiftWorkingDays() {
    this.service.getAll(apiUrls.getAllShiftWorkingDays).subscribe((resp: any) => {
      this.dropdowngetshiftworking = resp.data;

    });
  }
  search() {
    this.shiftSearchError = false;

    let req = {
      "filters": { "workingdays": this.createObj['shiftworkingdays'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchShiftWorkingDays, req).subscribe((resp: any) => {
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
  clearfilter() {
    this.shiftSearchError = false;
    this.createObj = {
      shiftworkingdays: ''
    };
    this.tablePageIndex = 0;
    this.itemsPerPage = 10;
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getall();
  }
  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/shiftworkingdays/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/shiftworkingdays/add']);
    }
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/shiftworkingdays/view', id]);
  }
  ListHeader = [

    'Shift Working Days',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [

    {
      data: 'workingdays',
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
      "filters": { "workingdays": this.createObj['shiftworkingdays'] },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchShiftWorkingDays, req).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('MMM DD , yyyy , hh:mm:ss a') : '-'
          }

          if (element.createdDate) {
            element.createdDate = element.createdDate ? moment(element.createdDate).format('MMM DD , yyyy, hh:mm:ss a') : '-'
          }
        });
        this.dataService.downloadExcel(list, 'Shift Working Days', [this.ListHeader, this.ListTableKeys])
      } else {

      }


    });

  }
}
