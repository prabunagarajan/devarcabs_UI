import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { IssueService } from '@app/services/helpdesk/issueservice';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.scss']
})
export class IssuedetailsComponent implements OnInit {
  bankNames: any;
  datalist: any;
  ticket: any;
  autoSuggestBankList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;
  sub: any;
  cat: any;
  priority1: any;
  entity: any;
  status: any;
  id: any;
  message: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  createObj: any = {
    ticketnumber: ''
  }

  searchList = {
    category: "",
    subcategory: "",
    status: ""
  }
  dropdown: any;
  dropdowngetcatogry: any;
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private Service: CommonApiServiceService, private router: Router, private dataService: DataService) { }
  ticketListDisplayedColumns = [
    'position',
    'categoryName',
    'subCategoryName',
    'issueName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  ngOnInit() {
    this.getall();
    this.getCatgoryservice();
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
  getservice() {

    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.searchList['category']).subscribe((resp: any) => {
      this.dropdown = resp.data;

    });
  }
  getCatgoryservice() {
    this.Service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.dropdowngetcatogry = resp.data;

    });
  }
  getall() {
    let req = {
      "filters": {
        "subCategoryId": '',
        "categoryId": '', "status": ''
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }

    this.Service.post(apiUrls.searchID, req).subscribe((resp: any) => {
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
      "filters": {
        "subCategoryId": this.searchList['subcategory'],
        "categoryId": this.searchList['category'], "status": this.searchList['status']
      },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }

    this.Service.post(apiUrls.searchID, req).subscribe((resp: any) => {
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
      category: '',
      subcategory: '',
      status: ''
    }
    this.searchmethod = false
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.dropdown = []
    this.getall();
  }
  viewroute(data) {
    this.router.navigate(['/helpdeskmaster/issuedetails/view', data]);
  }
  addedit(id) {

    this.router.navigate(['/helpdeskmaster/issuedetails/edit', id]);


  }
  ListHeader = [
    'Category',
    'Sub Category',

    'Issue Detail',
    // 'Status',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'categoryName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'subCategoryName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'issueName',
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
        "subCategoryId": '',
        "categoryId": '', "status": ''
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"

    }
    this.Service.post(apiUrls.searchID, req).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        // list.forEach(element => {
        //   if (element.modifiedDate) {
        //     element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
        //   } else if (element.createdDate) {
        //     element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
        //   }
        // });
        this.dataService.downloadExcel(list, 'Issue Details', [this.ListHeader, this.ListTableKeys])
      }
    });

  }
}
