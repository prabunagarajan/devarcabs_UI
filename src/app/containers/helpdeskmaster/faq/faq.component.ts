import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { FAQService } from '@app/services/helpdesk/faqservice.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { NgForm } from '@angular/forms';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  list: any;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  dropdown: any;
  searchList = {
    Category: '',
    Sub: '',
    Question: ''
  }
  dropdowngetcatogry: any;
  dropdownquestion: any;
  showerror: boolean = false;
  constructor(private router: Router,
    private Service: CommonApiServiceService, private dataService: DataService) { }

  searchmethod: boolean = false;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  ticketListDisplayedColumns = [
    'position',

    'categoryName',
    'subCategoryName',
    'question',
    'answer',
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
  ngOnInit() {
    this.showerror = false
    this.getall();
    this.getservice();
    this.getCatgoryservice();

  }
  getservice() {
    this.dropdownquestion = []
    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.searchList['Category']).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.dropdown = resp.data;
      } else {
        this.dropdownquestion = []
      }
    });
  }
  getquestion() {
    let req = {
      "filters": {
        "subCategoryId": this.searchList['Sub'], "categoryId": this.searchList['Category'], "questionId": ""
      },
      "pageNo": 0,
      "paginationSize": 10,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"

    }
    this.Service.post(apiUrls.searchFAQ, req).subscribe((resp: any) => {

      if (resp.status == 's') {
        this.dropdownquestion = resp.data.contents
      }
    });
  }
  getCatgoryservice() {
    this.Service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.dropdowngetcatogry = resp.data;

    });
  }
  getall() {
    let req = {
      "filters": { "categoryId": '', "subCategoryId": '', "questionId": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }


    this.Service.post(apiUrls.searchFAQ, req).subscribe((res: any) => {
      this.searchmethod = false
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
      "filters": { "categoryId": this.searchList['Category'], "subCategoryId": this.searchList['Sub'], "questionId": this.searchList['Question'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }

    this.Service.post(apiUrls.searchFAQ, req).subscribe((res: any) => {
      this.searchmethod = true
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
  clear(Form) {
    this.formDirective.resetForm()
    this.searchList = {
      Category: '',
      Sub: '',
      Question: ''
    }
    this.dropdownquestion = []
    this.dropdown = []
    this.showerror = false
    this.searchmethod = false
    this.tablePageIndex = 0,
    this.itemsPerPage = 10
  this.tablePageIndexsearch = 0;
  this.itemsPerPagesearch = 10;
    this.getall();

  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/faq/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/faq/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/faq/add']);
    }
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ListHeader = [
    'Category',
    'Sub Category',
    'Question',
    'Answer',
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
      data: 'question',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'answer',
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
      "filters": { "categoryId": '', "subCategoryId": '', "questionId": '' },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "Asc"
    }


    this.Service.post(apiUrls.searchFAQ, req).subscribe((res: any) => {
      this.searchmethod = true
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
        this.dataService.downloadExcel(list, 'FAQ', [this.ListHeader, this.ListTableKeys])

      } else {
        this.dataSource = new MatTableDataSource<any>();

      }

    })
  }
}
