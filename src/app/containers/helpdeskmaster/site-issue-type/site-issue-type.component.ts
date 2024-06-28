import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { DistrictService } from '@app/services/helpdesk/district.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-site-issue-type',
  templateUrl: './site-issue-type.component.html',
  styleUrls: ['./site-issue-type.component.scss']
})
export class SiteIssueTypeComponent implements OnInit {

  searchList={
    issueType:'',
  }
  list: any;
  formSubmitted = false;

  countryList = [];
  statusList = [];
  stateList = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  createObj: any = {
    category: '',
    subcategory: '',
    actualproblem: ''
  }

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

  ticketListDisplayedColumns=[
    'position',
    'issueType',
    'created_by',
    'created_date',
    'modified_by',
    'modified_date',
    'status',
    'action'
  ]

  selectedCategory="";
  selectedSubCategory="";
  selectedStatus="";

  constructor(private router: Router,
    private Service: CommonApiServiceService,
    private dataService: DataService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    let postData = {
    "filters": { "issuetype": this.searchList['issueType']},
    "pageNo": this.tablePageIndex,
    "paginationSize": this.itemsPerPage,
    "sortField": this.currentSortHeadActive,
    "sortOrder": this.currentSortDirection.toUpperCase()
    }
    this.Service.post(apiUrls.getIssueReportList,postData).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
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
    this.searchList['issueType'] = ''
    this.getTableData();
  }

  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getTableData();
  }

  search() {
    const postdata = {
      "filters": { "issuetype": this.searchList['issueType']},
      "pageNo": this.tablePageIndex,
      "paginationSize": this.totalRecords,
      "sortField": this.currentSortHeadActive,
      "sortOrder": this.currentSortDirection.toUpperCase()
    }
    this.Service.post(apiUrls.getIssueReportList,postdata).subscribe((res: any) => {
        if (res.status == "s" && res.errorCode == 200) {
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          // this.dataChange.next(this.tableData);
        } else {
          this.noTableData = 'No Records Found';
          this.dataSource = new MatTableDataSource<any>();
          // this.dataChange.next(data);
        }
     
    }, error => {
      this.dataSource = new MatTableDataSource<any>();
      this.noTableData = 'No Records Found';
    });
  }

 



  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/site-issue-type/view', id]);
  }

  navigateEdit(id){
    this.router.navigate(['/helpdeskmaster/site-issue-type/edit', id]);
  }

  ListHeader = [
    'Site Issue Type',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'issuetype',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'created_by',
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
      data: 'modified_by',
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
        "issuetype": this.searchList['issueType']
      },
      "pageNo": 0, "paginationSize": this.totalRecords,
      "sortField": "modifiedDate", "sortOrder": "DESC"
    }
    this.Service.post(apiUrls.getIssueReportList, req).subscribe((res: any) => {

      if (res.status == "s" && res.errorCode == 200) {
        let list = res.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }

          if (element.createdDate) {
            element.createdDate = element.createdDate ? moment(element.createdDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }
        });
        this.dataService.downloadExcel(list, 'Site Issue Type', [this.ListHeader, this.ListTableKeys])
      }

    });

  }
}
