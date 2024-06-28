import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService, AuthService } from '@app/services';
import { UserManagementService } from '@app/services/helpdesk/user-management.service';
import { MatPaginator, PageEvent } from '@angular/material';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  @ViewChild('tabset', { static: false }) tabset;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  dataSourceAssignList = new MatTableDataSource<any>();
  dataSourceactivitylogs = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('multiSelect', { static: false }) multiSelect;
  navtabdata: any;
  editId: any;
  usermanagementlist: any;
  userloginhistory: any;
  tablePageIndex = 0;
  itemsPerPage = 10;
  displayedColumnsAssignlist = [
    'position',
    'username',
    'employeeId',
    'emailId',

  ]


  s = {
    nextId: 'TR'
  }
  userId: any;
  role: any;
  GrievanceAssignFieldData: any;
  totalRecord: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private service: UserManagementService,
    private Service: CommonApiServiceService,
    private authService: AuthService
  ) { }

  displayColumns=[
    'position',
    // 'actionPerformedOnEmployeeId',
    'actionPerformedByEmployeeId',
    'actionPerformedByRole',
    'action',
    'actionPerformedDateTime'
  ]
  ngOnInit() {
    this.userId = this.authService.getUserId().toString();
    this.getuserloginhistory();
    this.route.params.subscribe(params => {

      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });

    if (this.createObj) {
      this.setData(this.editId);
    }

  }
  onPageChange(event: PageEvent) {
    this.tablePageIndex = event.pageIndex,
      this.itemsPerPage = event.pageSize
    this.getUserActivity();
  }
  setData(editId: any) {
    this.service.gethelpdeskuserbyid(editId).subscribe((resp: any) => {

      this.role = resp.data.roleName
      this.usermanagementlist = (resp.status === 's') ? resp.data : [];
      this.getAssigned()
      this.getUserActivity()
    });
  }
  getAssigned() {
    this.Service.getAll(apiUrls.handlingofficer + '?userId=' + this.editId).subscribe(
      resp => {
        if (resp.status == 's') {
          this.GrievanceAssignFieldData = resp.data
          this.dataSourceAssignList = new MatTableDataSource(this.GrievanceAssignFieldData)
          this.dataSourceAssignList.paginator = this.paginator
          // this.isUpdateRequest='true'
        } else {
          this.dataSourceAssignList = new MatTableDataSource()
          // this.isUpdateRequest='false'
        }

      })

  }
  getUserActivity() {
    let req = {
      "filters": { "userId": this.editId }, "pageNo": this.tablePageIndex,
      "paginationSize": this.itemsPerPage, "sortField": "modifiedDate", "sortOrder": "Desc"
    }
    this.Service.post(apiUrls.activitylogs, req).subscribe((resp: any) => {
      if (resp.status == 's') {
        this.dataSourceactivitylogs = new MatTableDataSource(resp.data.contents)
        this.totalRecord = resp.data.totalElements

      } else {
        this.dataSourceactivitylogs = new MatTableDataSource()
        this.totalRecord = 0
      }
    });
  }
  getuserloginhistory() {
    let postdata = {
      "filters": { "userId": this.userId },
      "pageNo": 0,
      "paginationSize": 10,

      "sortField": "modifiedDate",
      "sortOrder": "Desc"

    }
    this.service.getuserloginhistory(postdata).subscribe((resp: any) => {

      this.userloginhistory = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];
    
    });
  }


  beforeChange(s) {
    this.navtabdata = s.nextId;
    if (s.nextId == "AD") {
    } else if (s.nextId == "LM") {
    } else if (s.nextId == "AL") {
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
