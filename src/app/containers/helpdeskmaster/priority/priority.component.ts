import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  public nextConfig: any;
  @ViewChild('formDirective', { static: true }) private formDirective: NgForm;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  createObj: any = {
    category: '',
    subcategory: '',
    priority: '',
  }
  list: any;
  dropdowngetcatogry: any;
  dropdown: any;
  sub: any;
  dropdowngetpriority: any;
  cat: any;
  searchmethod: boolean = false;
  tablePageIndexsearch = 0;
  itemsPerPagesearch = 10;
  tablePageIndex = 0;
  itemsPerPage = 10;
  ticketListDisplayedColumns = [
    'position',

    'categoryName',
    'subCategoryName',
    'priority',
    'createdBy',
    'createdDate',
    'modifiedBy',
    'modifiedDate',
    'active',
    'action'
  ]
  totalRecords: any;
  constructor(private router: Router, private subcategory: SubcategoryService, private service: CommonApiServiceService) { }

  ngOnInit() {
    this.getall();

    this.getPriority();
    this.getcat();


  }
  getall() {
    let req = {
      "filters": {
        "categoryId": '',
        "subCategoryId": '', "priority": ''
      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchPriority, req).subscribe((res: any) => {

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
  getcat() {
    this.service.getAll(apiUrls.getcatogry).subscribe((responceData: any) => {

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }

  getPriority() {
    this.service.getAll(apiUrls.getPriorityActive).subscribe((resp: any) => {
      this.dropdowngetpriority = resp.data;
    });
  }
  getsub() {
    this.sub = []
    this.service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.createObj['category']).subscribe((responceData: any) => {
      if (responceData.status == 's' && responceData.errorCode == 200) {
        this.sub = responceData.data;
      } else {
        this.sub = []
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
      "filters": { "categoryId": this.createObj['category'], "subCategoryId": this.createObj['subcategory'], "priority": this.createObj['priority'] },
      "pageNo": this.tablePageIndexsearch,
      "paginationSize": this.itemsPerPagesearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC"
    }
    this.service.post(apiUrls.searchPriority, req).subscribe((res: any) => {
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
    this.createObj = {
      category: '',
      subcategory: '',
      priority: '',
    };
    this.sub=[]
    this.tablePageIndex = 0,
    this.itemsPerPage = 10
  this.tablePageIndexsearch = 0;
  this.itemsPerPagesearch = 10;
    this.getall();
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/priority/view', id]);
  }

  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/priority/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/priority/add']);
    }
  }

}
