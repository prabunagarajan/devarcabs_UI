import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';

@Component({
  selector: 'app-actualproblems',
  templateUrl: './actualproblems.component.html',
  styleUrls: ['./actualproblems.component.css']
})
export class ActualproblemsComponent implements OnInit {
  categoryList = [];
  subCategoryList = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;
  createObj: any = {
    category: '',
    subcategory: '',
    actualproblem: ''
  }
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  formSubmitted = false;
  searchForm: FormGroup;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  currentSortHeadActive = 'createdDate';
  currentSortDirection = 'desc';
  tablePageIndex = 0;
  itemsPerPage = 10;

  noTableData = 'No Records Found';
  totalRecords = 0;
  tableData = [];

  ticketListDisplayedColumns = [
    'position',
    'actualProblem',
    'categoryName',
    'subCategoryName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'status',
    'action'
  ]

  selectedCategory = "";
  selectedSubCategory = "";
  selectedStatus = "";
  tableDatadrop: any;
  searchmethod: boolean = false;
  problem: any[];

  constructor(private router: Router,
    private fb: FormBuilder, private service: CommonApiServiceService,private dataService: DataService,
    private Service: ActualProbelmService) {
    this.searchForm = this.fb.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      status: ['']
    })
  }

  ngOnInit() {
    this.getCategoryList();
    this.getAllproblems();
    this.getActiveProblem();
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.search();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getAllproblems();
    }
  }
  get f() { return this.searchForm.controls; }
  getActualproblem() {
    this.problem = []
    this.service.getAll(apiUrls.ActualProblemBasedONcat + this.f.category.value + '/' + this.f.subCategory.value).subscribe((responceData: any) => {

      if (responceData.status === 's') {
        this.problem = responceData.data
      } else {
        this.problem = []
        // this.alert.showAlert(responceData.userDisplayMesg + "Please Create A Actual Problem", 'error');
      }
    });
  }
  getAllproblems() {
    const postdata = {
      "filters": {
        "categoryId": '',
        "subCategoryId": '', "actualProblem": ''
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchactualproblem(postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        this.searchmethod = false
        if (res.status == "s" && res.errorCode == 200) {
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
  getActiveProblem() {
    this.Service.getAllActiveActualProbelmList().subscribe((resp: any) => {

      this.tableDatadrop = resp.data;
    });
  }
  clearfilter() {
    this.formDirective.resetForm()
    this.formSubmitted = false;
    this.selectedCategory = '';
    this.selectedSubCategory = '';
    this.selectedStatus = '';
    this.f.category.setValue('');
    this.f.subCategory.setValue('');
    this.f.status.setValue('');
    this.searchmethod = false
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getAllproblems();
  }



  search() {
    const postdata = {
      "filters": { "categoryId": this.f.category.value, "subCategoryId": this.f.subCategory.value, "actualProblem": this.f.status.value },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchactualproblem(postdata).subscribe((res: any) => {
      if (res && res !== undefined && res !== null) {
        if (res.status == "s" && res.errorCode == 200) {
          this.searchmethod = true
          this.tableData = res.data.contents;
          this.totalRecords = res.data.totalElements;
          this.dataSource = new MatTableDataSource<any>(this.tableData);
          this.dataSource.paginator = this.paginator;
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

  getCategoryList() {
    this.service.getAll(apiUrls.getcatogry).subscribe((responceData: any) => {
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.categoryList = responceData.data;
      } else {
        this.categoryList = [];
      }
    })
  }

  getSubCategoryList(event) {
    this.problem = []
    this.f.subCategory.setValue('')
    this.Service.subCategoryList(event.target.value).subscribe((responceData: any) => {
   
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.subCategoryList = responceData.data;
      } else {
        this.subCategoryList = [];
      }
    })
  }


  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/actualprobelms/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/actualprobelms/edit', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  ListHeader = [
    'Actual Problems',
    'Category',
    'Sub Category',
    'Created By',
    'Created On',
    'Modified By',
    'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'actualProblem',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
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
    const postdata = {
      "filters": { "categoryId": '', "subCategoryId": '', "actualProblem":'' },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.Service.searchactualproblem(postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        // list.forEach(element => {
        //   if (element.modifiedDate) {
        //     element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
        //   } else if (element.createdDate) {
        //     element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
        //   }
        // });
        this.dataService.downloadExcel(list, 'Actual Problems', [this.ListHeader, this.ListTableKeys])
      }

    })
  }
}
