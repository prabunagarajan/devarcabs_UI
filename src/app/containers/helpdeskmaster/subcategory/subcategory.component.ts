import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  createForm: FormGroup;
  formSubmitted = false;

  @ViewChild(DataTableDirective, { static: false })
  list: any;
  searchList = {
    category: '',
    subcategory: '',
    status: ''
  }

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
  sub: any;
  cat: any;
  subcategorylist: any;
  categorylist: any;
  categoryid: number;
  subcategoryid: number;
  subcategorystatus: boolean;


  constructor(private Service: CommonApiServiceService, private router: Router, private formBuilder: FormBuilder,
    private dataService: DataService

  ) { }

  ticketListDisplayedColumns = [
    'position',
    'categoryName',
    'subCategoryName',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  ngOnInit() {
    this.getallsubcategory();
    this.getcat();
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      status: ['', Validators.required],
    });

  }

  get f() {
    return this.createForm.controls;
  }
  getallsubcategory() {
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

    this.Service.post(apiUrls.filtergetsubcategory, req).subscribe((resp: any) => {
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
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.searchsubcategory();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getallsubcategory();
    }
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/subcategory/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/helpdeskmaster/subcategory/edit', id]);
  }

  clearfilter() {
    this.searchList.category = '';
    this.searchList.subcategory = '';
    this.searchList.status = '';
    // this.createForm.reset();
    this.tablePageIndex = 0,
      this.itemsPerPage = 10
    this.tablePageIndexsearch = 0;
    this.itemsPerPagesearch = 10;
    this.getallsubcategory();
    this.sub = []
  }




  getsub() {
    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.searchList['category']).subscribe((resp: any) => {
      this.sub = resp.data;

    });
  }

  getcat() {
    this.Service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.dropdowngetcatogry = resp.data;

    });
  }
  searchsubcategory() {

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
    this.Service.post(apiUrls.filtergetsubcategory, req).subscribe((resp: any) => {
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
      data: 'categoryName',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'subcategoryName',
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
    this.Service.post(apiUrls.filtergetsubcategory, req).subscribe((resp: any) => {
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
        this.dataService.downloadExcel(list, 'SubCategory', [this.ListHeader, this.ListTableKeys])
      } else {

      }
    });
  }

}
