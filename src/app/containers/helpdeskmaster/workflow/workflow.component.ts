import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { WorkflowService } from '@app/services/helpdesk/workflow.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  public payuform: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  totalRecords: any;
  searchmethod: any
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  list: any;

  searchList = {
    category: '',
    subCategory: '',
    issue: ''
  }
  searchCategories: any;
  searchSubCategories: any;
  searchIssueDetails: any;

  constructor(
    private router: Router,
    private service: WorkflowService,
    private apiService: CommonApiServiceService,
    private dataService: DataService,
  ) { }
  ticketListDisplayedColumns = [
    'position',
    'categoryName',
    'subCategoryName',
    'issueDetails',
    'priorityName',
    'sla',
    'assignToName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };

    this.getCategories();
    this.getAllWorkflow();
  }

  getAllWorkflow() {
    let req = {
      "filters": { "categoryId": '', "subCategoryId": '', "issueDetailsId": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.apiService.post(apiUrls.searchHDWorkflow, req).subscribe((resp: any) => {
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

  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/workflow/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/workflow/edit', id]);
    }
    else {
      this.router.navigate(['/helpdeskmaster/workflow/add']);
    }
  }


  getCategories() {
    this.apiService.getAll(apiUrls.getallactivecategory).subscribe(resp => {
      this.searchCategories = resp.data;
    });
  }


  getSub(event) {
    this.searchSubCategories = []
    this.searchIssueDetails=[]
    this.searchList['issue'] = ''
    const categoryId = event.target.value;
    this.apiService.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + categoryId).subscribe((responceData: any) => {
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.searchSubCategories = responceData.data;
      } else {
        this.searchSubCategories = []
      }

    });
  }
  getissueDetailsService() {
    this.apiService.getAll(apiUrls.getID + this.searchList['subCategory'] + "/" + this.searchList['category']).subscribe((resp: any) => {
      this.searchIssueDetails = resp.data;

    });
  }
  Clear() {
    this.searchList['category'] = '',
      this.searchList['subCategory'] = '',
      this.searchList['issue'] = ''
      this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.searchSubCategories=[]
    this.searchIssueDetails=[]
    this.getAllWorkflow()
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getAllWorkflow();
    }
  }
  search() {

    let req = {
      "filters": { "categoryId": this.searchList['category'], "subCategoryId": this.searchList['subCategory'], "issueDetailsId": this.searchList['issue'] },
      "pageNo":  this.tablePageIndexsearch,
      "paginationSize":   this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.apiService.post(apiUrls.searchHDWorkflow, req).subscribe((resp: any) => {
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
  ListHeader = [
    'Category',
    'Sub Category',
    'Issue Details',
    'Priority',
    'SLA(hrs)',
    'Assign To',
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
      data: 'subcategoryName',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'issueDetails',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'priorityName',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'sla',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'assignToName',
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
    },
  ]
  export() {
    let req = {
      "filters": { "categoryId": '', "subCategoryId": '', "issueDetailsId": '' },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.apiService.post(apiUrls.searchHDWorkflow, req).subscribe((resp: any) => {
      if (resp.status == 's') {

        let list = resp.data.contents
        // list.forEach(element => {
        //   if (element.modifiedDate) {
        //     element.modifiedDate = moment(element.modifiedDate).format('DD/MMM/yyyy HH:MM:SS a')
        //   } else if (element.createdDate) {
        //     element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
        //   }
        // });
        this.dataService.downloadExcel(list, 'Workflow', [this.ListHeader, this.ListTableKeys])
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }


    });

  }

}
