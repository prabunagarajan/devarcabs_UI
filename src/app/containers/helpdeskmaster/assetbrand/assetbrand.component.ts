import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { AssetbrandService } from '@app/services/helpdesk/assetbrand.service';
import { CategoryService } from '@app/services/helpdesk/category.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs-compat';

@Component({
  selector: 'app-assetbrand',
  templateUrl: './assetbrand.component.html',
  styleUrls: ['./assetbrand.component.scss']
})
export class AssetbrandComponent implements OnInit {


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;
  searchList: any = {
    brand: '',
    type: '',
    status: ''
  }
  dropdown: any;

  formSubmitted = false;
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
    'assetType',
    'brand',
    // 'createdBy',
    // 'createdDate',
    // 'modifiedBy',
    // 'modifiedDate',
    'active',
    'action'
  ]
  dropdowngetbrand: any;
  assetNameDropdown: any;
  assetBrand: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private service: CommonApiServiceService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getallassetBrand();
    this.getbrand();
    this.getassettyep();
  }
  getallassetBrand() {
    const postdata = {
      "filters": { "brand": this.searchList['brand'],"type": this.searchList['type'],
                    "createdBy": Number(localStorage.getItem('USER_ID')) },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.service.post(apiUrls.searchAssetBrand,postdata).subscribe((resp: any) => {

      if (resp.status == 's') {
        this.searchmethod = false
        this.list = resp.data.contents
        this.totalRecords = resp.data.totalElements;
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = '0';
      }
    });

  }

  getAssetNameBrand() {

    this.service.getAll(apiUrls.getAssetNameBrandById + Number(this.searchList['type'])).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.assetBrand = resp.data[0].assetBrand
      }   

    })
  }
  searchassetbrand() {
    this.formSubmitted = true;
    // if(searchForm.valid){
    const postdata = {
     "filters": { "brand": this.searchList['brand'],"type": this.searchList['type'], "status": this.searchList['status'],
                    "createdBy": Number(localStorage.getItem('USER_ID')) },
      "pageNo":  this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "modifiedDate"
    }
    this.service.post(apiUrls.searchAssetBrand,postdata).subscribe((resp: any) => {
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

    // } 
  }
  onPageChange(event: PageEvent) {
    if (this.searchmethod) {
      this.tablePageIndexsearch = event.pageIndex;
      this.itemsPerPagesearch = event.pageSize;
      this.searchassetbrand();
    } else {
      this.tablePageIndex = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getallassetBrand();
    }
  }
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  getbrand() {
    this.service.getAll(apiUrls.getActiveAssetbrand).subscribe((resp: any) => {

      this.dropdowngetbrand = resp.data;
    });
  }

  clearfilter() {
    this.formSubmitted = false;
    this.searchList = {
      type: "",
      brand:"",
      status: ""
    };
    this.assetBrand  =[]
    this.tablePageIndex = 0,
    this.itemsPerPage = 10
  this.tablePageIndexsearch = 0;
  this.itemsPerPagesearch = 10;
    this.searchmethod = false
 
    this.getallassetBrand();
  }

  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/assetbrand/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/assetbrand/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/assetbrand/add']);
    }
  }

  
  ListHeader = [
    'Asset Type',
    'Asset Brand',
    // 'Created By',
    // 'Created On',
    // 'Modified By',
    // 'Modified On',
    'Status',

  ];

  ListTableKeys = [
    {
      data: 'assetType',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
    {
      data: 'brand',
      "className": "Capitalise",
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
   
    // {
    //   data: 'createdBy',
    //   "className": "Capitalise",
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'createdDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedBy',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
    // {
    //   data: 'modifiedDate',
    //   render: function (data, type, row) {
    //     return (data ? data : '');
    //   }
    // },
     {
      data: 'status',
      render: function (data, type, row) {
        return (data ? data : '');
      }
    },
  ]
  export() {
    const postdata = {
      "filters": {
        "brand": this.searchList['brand'],"type": this.searchList['type'], "status": this.searchList['status'],
        "createdBy": Number(localStorage.getItem('USER_ID')) 
      },
      "pageNo": 0,
      "paginationSize": this.totalRecords,
      "sortField": "createdDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchAssetBrand, postdata).subscribe((resp: any) => {
      if (resp.status == 's') {
        let list = resp.data.contents
        list.forEach(element => {
          if (element.modifiedDate) {
            element.modifiedDate = moment(element.modifiedDate).format('MMM DD,yyyy HH:MM:SS a')
          } else if (element.createdDate) {
            element.createdDate = moment(element.createdDate).format('MMM DD,yyyy HH:MM:SS a')
          }
        });
        this.dataService.downloadExcel(list, 'Asset Brand', [this.ListHeader, this.ListTableKeys])
      }

    })
  }
}
