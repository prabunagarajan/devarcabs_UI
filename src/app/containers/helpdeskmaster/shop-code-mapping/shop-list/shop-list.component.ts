import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, Sort } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  editId: any = ''
  createForm: any;
  createObj: any = {
    division: '',
    shopCode: '',
    districtCode: '',
    state: '',
    employeeId:""
  }
  dropdown: any;
  dropdowngetcatogry: any;
  list: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  dataSource = new MatTableDataSource<any>();
  currentSortHeadActive = "createdDate";
  currentSortDirection = "desc";
  issuefromDropdown: any;
  DropDownPriority: any;
  dropdowngetTicketStatus: any;
  obj: any;
  TCCount: any = '0';
  TCRCount: any = '0';
  TECount: any = '0';
  TACount: any = '0';
  pendingCount: any = '0';
  resolvedCount: any;
  noTableData = 'No Records Found';
  totalRecords = 0;
  tablePageIndex = 0;
  itemsPerPage = 10;
  tablePageIndexSearch = 0;
  itemsPerPageSearch = 10;
  OpenCount: any;
  DropDownlicenseType: any;
  maxdate: any;
  sortDataValue = {
    active: 'createdDate',
    direction: 'desc'
  }
  statedropdown: any = [];
  districtdropdown: any[];
  searchMethod: boolean;
  Fielddropdown: any[];
  constructor(private Service: CommonApiServiceService,
    private authService: AuthService, private router: Router,
    private dataService: DataService) { }

  date: any
  displayColumns = [
    'position',
    'userName',
    'division',
    'shopCode',
    'districtName',
    'action'
  ];
  userId: any = ''
  ngOnInit() {
    this.userId = this.authService.getUserId().toString();
    this.getall()
    this.getState();
    this.getFieldList()
  }
  getFieldList() {
    this.Service.getAll(apiUrls.FieldEngglist).subscribe((resp: any) => {
      if (resp.errorCode == 200) {
        this.Fielddropdown = resp.data;
      } else {
        this.Fielddropdown = []
      }
    })
  }
  getState() {
    const postdata = { "userName": "admin", "password": "123456", "countrycode": "IN" }
    this.Service.post(apiUrls.getUserState, postdata).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.statedropdown = resp.content;
      }
    })
  }
  getDistrict() {
    const postdata = { "userName": "admin", "password": "123456", "statecode": this.createObj['state'] }
    this.Service.post(apiUrls.getUserDistrict, postdata).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.districtdropdown = resp.content;
      } else {
        this.districtdropdown = []
      }
    })
  }
  sortData(sort: Sort) {
    this.sortDataValue = {
      active: sort.active,
      direction: sort.direction
    }
    this.currentSortHeadActive = sort.active;
    this.currentSortDirection = sort.direction;
  }

  getall() {
    let req = {
      "filters": {
        "division": "",
        "shopCode": "",
        "districtCode": "",
        "userId": ""

      },
      "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage,
      "sortField": "modifiedDate",
      "sortOrder": "DESC",
    }
    this.Service.post(apiUrls.shopcodemasterList, req).subscribe((resp: any) => {
      if (resp.status == "s") {
        this.searchMethod = false
        this.list = resp.data.contents
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.totalRecords = Number(resp.data.totalElements)
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = 0;
      }

    });
  }
  search() {
    let req = {
      "filters": {
        "division": this.createObj['division'],
        "shopCode": this.createObj['shopCode'],
        "districtCode": this.createObj['districtCode'],
        "userId": this.createObj['employeeId']

      },
      "pageNo": this.tablePageIndexSearch,
      "paginationSize": this.itemsPerPageSearch,
      "sortField": "modifiedDate",
      "sortOrder": "DESC",
    }
    this.Service.post(apiUrls.shopcodemasterList, req).subscribe((resp: any) => {
      if (resp.status == "s") {

        this.searchMethod = true
        this.list = resp.data.contents
        this.dataSource = new MatTableDataSource<any>(this.list);
        this.totalRecords = Number(resp.data.totalElements)
        this.dataSource.sort = this.sort;
      } else {
        this.dataSource = new MatTableDataSource<any>();
        this.totalRecords = 0;
      }
    });
  }
  navigateEdit(id) {
    if (id != '') {
      this.router.navigate(['/helpdeskmaster/shop-code-map/edit', id]);
    } else {
      this.router.navigate(['/helpdeskmaster/shop-code-map/add']);
    }
  }
  navigateView(id) {
    this.router.navigate(['/helpdeskmaster/shop-code-map/view', id]);
  }
  onPageChange(event: PageEvent) {
    if (!this.searchMethod) {
      this.tablePageIndex = event.pageIndex,
        this.itemsPerPage = event.pageSize
      this.getall()
    } else {
      this.tablePageIndexSearch = event.pageIndex,
        this.itemsPerPageSearch = event.pageSize
      this.search()
    }
  }

  clear() {
    this.createObj = {
      division: '',
      shopCode: '',
      districtCode: '',
      state: '',
    }

    this.getall();
  }


}
