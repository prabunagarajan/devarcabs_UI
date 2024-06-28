import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { SubcategoryService } from '@app/services/helpdesk';
import { DataService } from '@app/services/helpdesk/data.service';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;

  formSubmitted = false;

  searchList: any = {
    category: '',
    subCategory: '',
    issue: ''
  }
  cat: any;
  sub: any;
  issuedropdown: any;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  searchmethod: boolean = false;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  ticketListDisplayedColumns = [
    'position',

    'categoryName',
    'subCategoryName',
    'issueDetails',
    'priority',
    'sla',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  totalRecords: any;
  constructor(private router: Router, private subcategory: SubcategoryService, private service: CommonApiServiceService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getall();
  
    this.getcat();

  }
  getissueDetailsService() {
    this.searchList['issue']=''
    this.service.getAll(apiUrls.getID + this.searchList['subCategory'] + "/" + this.searchList['category']).subscribe((resp: any) => {

      if (resp.status == "s") {
        this.issuedropdown= resp.data;
      } else {
        this.issuedropdown = [];
        this.searchList['issue']=''
      }

    });
  }
  getall() {

    let req = {
      "filters": { "categoryId": '', "subCategoryId": '', "issueDetailsId": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }
    this.service.post(apiUrls.searchSla, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.searchmethod = false
        this.list = res.data.contents;
        this.totalRecords = res.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      } else {
  
        this.dataSource = new MatTableDataSource<any>();

      }

    });
  }

  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getsub() {
    this.sub = []
    this.issuedropdown = [];
    this.service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.searchList['category']).subscribe((responceData: any) => {
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.sub = responceData.data;
      } else {
        this.sub = []
      }

    });
  }
  getIssueDetails() {
    this.service.getAll(apiUrls.getallissues).subscribe((responceData: any) => {

      this.issuedropdown = (responceData.status === 's') ? responceData.data : [];


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
      this.getall();
    }
  }
  search() {


    let req = {
      "filters": { "categoryId": this.searchList['category'], "subCategoryId": this.searchList['subCategory'], "issueDetailsId": this.searchList['issue'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }
    this.service.post(apiUrls.searchSla, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.searchmethod = true
        this.list = res.data.contents;
        this.totalRecords = res.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      } else {
  
        this.dataSource = new MatTableDataSource<any>();

      }

    });

  }
  clearfilter() {
    this.formSubmitted = false;
    this.searchList = {
      category: '',
      subCategory: '',
      issue: '',
    };
    this.sub = []
    this.issuedropdown = [];
    this.tablePageIndex = 0,
    this.itemsPerPage = 10
  this.tablePageIndexsearch = 0;
  this.itemsPerPagesearch = 10;
    this.getall();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/sla/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/sla/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/sla/add']);
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ListHeader = [
    'Category',
    'Sub Category',
    'Issue Details',
    'Priority',
    'SLA(hrs)',
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
      data: 'priority',
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
    let req = {
      "filters": { "categoryId": this.searchList['category'], "subCategoryId": this.searchList['subCategory'], "issueDetailsId": this.searchList['issue'] },
      "pageNo": 0,
      "paginationSize":  this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }
    this.service.post(apiUrls.searchSla, req).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
       let list = res.data.contents;
       list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }
    
          if (element.createdDate) {
            element.createdDate = element.createdDate ? moment(element.createdDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }
        });
    
        this.dataService.downloadExcel(list, 'SLA', [this.ListHeader, this.ListTableKeys])
      } else {
  


      }

    });

  }

}
