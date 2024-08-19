import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CategoryService } from '@app/services/helpdesk/category.service';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { DataService } from '@app/services/helpdesk/data.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { BreakageEntry } from '@app/config/wholesale/breakageEntry.config';
import { environment } from '@appEnv/environment';


@Component({
  selector: 'app-vechile-details',
  templateUrl: './vechile-details.component.html',
  styleUrls: ['./vechile-details.component.scss']
})
export class VechileDetailsComponent implements OnInit {

  vehicleDetailsColumns = BreakageEntry.vehicleDetailsColumns;
  public actionKeys = ['edit', 'view', 'download'];
  totalCount = 0;
  public pageSize = 10;
  public dataSource: any[] = [];
  baseUrl = environment.helpdeskURL;
  vehicleNumberStatusDetailsList: any[] = [];
  maxDate = moment();
  selDate: any;
  vehicleDetailsSearchForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alert: AlertService,
  ) {

  }


  ngOnInit() {
    this.vehicleDetailsSearchForm = this.formBuilder.group({
      selDate: [''],
      vechileNumber: [''],
      vechileStatus: ['']
    });
    this.getAllVehiclesList();
    this.getAllVehicleNumberStatusDetails();
  }

  getAllVehicleNumberStatusDetails() {
    this.getAllVehicleNumberStatus().subscribe(getAllVehicleNumberStatusDetailsResponse => {
      if (getAllVehicleNumberStatusDetailsResponse.status == 's') {
        this.vehicleNumberStatusDetailsList = getAllVehicleNumberStatusDetailsResponse.data;
      } else {
        this.vehicleNumberStatusDetailsList = [];
      }
    })
  }
  getAllVehicleNumberStatus(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/getAll';
    return this.http.get(url);
  }
  getAllVehicles(getAllVehiclesListRequest): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/search';
    return this.http.post(url, getAllVehiclesListRequest);
  }

  getAllVehiclesList(pageNo = 0, paginationSize = this.pageSize) {
    const vehicleDetailsSearchForm = this.vehicleDetailsSearchForm.value;

    const fromDate = (vehicleDetailsSearchForm.selDate && vehicleDetailsSearchForm.selDate.startDate) ? moment(vehicleDetailsSearchForm.selDate.startDate).format('YYYY-MM-DD') : '';

    const toDate = (vehicleDetailsSearchForm.selDate && vehicleDetailsSearchForm.selDate.endDate) ?
      moment(vehicleDetailsSearchForm.selDate.endDate).format('YYYY-MM-DD') : '';

    const getAllVehiclesListRequest = {
      filters: {
        vehicleNumber: vehicleDetailsSearchForm.vechileNumber ? vehicleDetailsSearchForm.vechileNumber : '',
        status: vehicleDetailsSearchForm.vechileStatus ? vehicleDetailsSearchForm.vechileStatus : '',
        fromDate: fromDate,
        toDate: toDate
      },
      pageNo: pageNo * paginationSize,
      paginationSize: paginationSize,
      sortField: "createdDate",
      sortOrder: "AESC"
    }
    this.getAllVehicles(getAllVehiclesListRequest).subscribe(getAllVehiclesListResponse => {
      if (getAllVehiclesListResponse.status == 's' && getAllVehiclesListResponse.errorCode == 200) {
        this.dataSource = getAllVehiclesListResponse.data.contents;
        this.totalCount = getAllVehiclesListResponse.data.totalElements;
      } else {
        this.dataSource = [];
        this.totalCount = 0;
      }
    })
  }

  navigateByView(viewId) {
    this.router.navigate(['/devar-cabs/master/vehicle-details/view/', viewId.id]);
  }

  navigateByEdit(eiditObj) {
    this.router.navigate(['/devar-cabs/master/vehicle-details/edit/', eiditObj.id]);
  }

  clearList() {
    this.vehicleDetailsSearchForm.patchValue({
      selDate: '',
      vechileNumber: '',
      vechileStatus: ''
    })
    this.getAllVehiclesList();
  }
  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAllVehiclesList(pageNo, pageSize);
  }
  search() {
    const vehicleDetailsSearchForm = this.vehicleDetailsSearchForm.value;
    if (vehicleDetailsSearchForm.selDate ||
      vehicleDetailsSearchForm.vechileNumber ||
      vehicleDetailsSearchForm.vechileStatus) {
      this.getAllVehiclesList();
    } else {
      this.alert.showError('Kindly select anyone filters');
    }
  }
}
