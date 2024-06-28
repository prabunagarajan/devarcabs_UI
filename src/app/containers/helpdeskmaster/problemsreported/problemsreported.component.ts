import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { from, Subject } from 'rxjs';
import * as moment from 'moment';
import { ProbelmReportedService } from '@app/services/helpdesk/probelmreported.service';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-problemsreported',
  templateUrl: './problemsreported.component.html',
  styleUrls: ['./problemsreported.component.scss']
})
export class ProblemsreportedComponent implements OnInit {
  searchForm: FormGroup;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any; sub: any;
  cat: any;
  createObj: any = {
    category: '',
    subcategory: '',
    problemreported: '',
  }
  problemactive: any;
  formSubmitted = false;
  listdrop: any;
  problemreported: any[];

  constructor(private Service: ProbelmReportedService,
    private subcategory: SubcategoryService,
    private router: Router,
    private fb: FormBuilder,    private dataService: DataService,
    private service: CommonApiServiceService) {
    this.searchForm = this.fb.group({
      category: [''],
      subcategory: [''],
      problemreported: ['']
    })
  }
  searchmethod: boolean = false;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  ticketListDisplayedColumns = [
    'position',
    'problem',
    'ticketCategoryName',
    'ticketSubcategoryName',

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
    this.getallreport();
    this.getcat();
    // this.getproblem();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  get f() {
    return this.searchForm.controls;
  }


  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/reported/view', id]);
  }
  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/reported/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/reported/add']);
    }
  }
  clearfilter(searchForm) {
    this.formSubmitted = false;
    this.formDirective.resetForm()
    this.f.category.setValue('');
    this.f.subcategory.setValue('');
    this.f.problemreported.setValue('');
    this.searchmethod = false
    this.sub = []
    this.problemreported = []
    this.getallreport();
  }

  getsub() {
    this.problemreported = []
    this.sub = []
    this.service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f.category.value).subscribe((resp: any) => {
      this.sub = resp.data;
      if (resp.status === 's') {
        this.sub = resp.data;
      } else {
        this.sub = []
       
      }
    });
  }

  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getallreport() {
    const postdata = {
      "filters": { "category_id": '', "ticketsubcategoryid": '', "problem": '' },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchproblem(postdata).subscribe((res: any) => {
      this.searchmethod = false
      if (res.status == "s" && res.errorCode == 200) {
        this.list = res.data.contents;
        this.totalRecords = res.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort;

      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }
    })

  }
  getproblem() {
    this.service.getAll(apiUrls.ProblemReportedBasedONcat + this.f.category.value + '/' + this.f.subcategory.value).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.problemreported = responceData.data
      } else {
        this.problemreported = []
        
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
      this.getallreport();
    }
  }
  search() {

    const postdata = {
      "filters": { "category_id": this.f.category.value, "ticketsubcategoryid": this.f.subcategory.value, "problem": this.f.problemreported.value },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchproblem(postdata).subscribe((res: any) => {
      this.searchmethod = true
      if (res.status == "s" && res.errorCode == 200) {
        this.list = res.data.contents;
        this.totalRecords = res.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort;

      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }


    });


  }
  ListHeader = [
    'Problem Reported',
    'Category Name',
    'Sub Category Name',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',
  ];

  ListTableKeys = [
    {
      data: 'problem',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'ticketCategoryName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'ticketSubcategoryName',
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


    const postdata = {
      "filters": { "category_id": '', "ticketsubcategoryid": '', "problem": '' },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchproblem(postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = element.modifiedDate ? moment(element.modifiedDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }

          if (element.createdDate) {
            element.createdDate = element.createdDate ? moment(element.createdDate).format('DD/MMM/yyyy hh:mm:ss a') : '-'
          }
        });
        this.dataService.downloadExcel(list, 'Problems Reported', [this.ListHeader, this.ListTableKeys])
      } else {

      }
    });
  }
}
