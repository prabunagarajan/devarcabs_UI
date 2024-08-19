import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { DriverDetailsService } from '@app/services/dever-cabs/driver-details.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { environment } from '@appEnv/environment';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-vechile-details',
  templateUrl: './add-vechile-details.component.html',
  styleUrls: ['./add-vechile-details.component.scss']
})
export class AddVechileDetailsComponent implements OnInit {

  vehicleDetailsForm: FormGroup;
  maxDate = moment();
  vehicleDetailsFormSubmit: boolean = false;
  @ViewChild('vehicleDetailsPopUP', { static: false }) vehicleDetailsPopUP;
  loaderButton: boolean = false;
  baseUrl = environment.helpdeskURL;
  viewDetails: any;
  updateFlag: boolean = false;
  editId: String;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService,
    private http: HttpClient

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.editId = params['id'];
        this.updateFlag = true;
        this.viewVehicleDetails(params['id']);
      }
    });

    this.vehicleDetailsForm = this.formBuilder.group({
      vechileNumber: ['', Validators.required],
      vechileName: ['', Validators.required],
      vechileColor: ['', Validators.required],
      vechileStatus: ['', Validators.required],
      insuranceDate: ['', Validators.required],
      taxDate: ['', Validators.required],
      fcDate: ['', Validators.required],
      rmearks: ['', Validators.required],
      polutionDate: ['', Validators.required]
    });

  }

  get vehicleDetailsFormGet(): { [key: string]: AbstractControl } {
    return this.vehicleDetailsForm.controls;
  }

  checkConfirm(vehicleDetailsForm) {
    if (!vehicleDetailsForm.valid) {
      this.vehicleDetailsFormSubmit = true;
    } else {
      this.vehicleDetailsPopUP.show();
    }
  }

  confirmSubmit() {
    if (this.updateFlag) {
      this.updateVehicleSubmit();
    } else {
      this.addVehicleSubmit();
    }
  }

  addVehicleSubmit() {
    const vehicleDetailsForm = this.vehicleDetailsForm.value;
    const fcDate = (vehicleDetailsForm.fcDate && vehicleDetailsForm.fcDate.startDate)
      ? moment(vehicleDetailsForm.fcDate.startDate).format('YYYY-MM-DD') : '';

    const insuranceDate = (vehicleDetailsForm.insuranceDate && vehicleDetailsForm.insuranceDate.startDate)
      ? moment(vehicleDetailsForm.insuranceDate.startDate).format('YYYY-MM-DD') : '';

    const taxDate = (vehicleDetailsForm.taxDate && vehicleDetailsForm.taxDate.startDate)
      ? moment(vehicleDetailsForm.taxDate.startDate).format('YYYY-MM-DD') : '';

    const polutionDate = (vehicleDetailsForm.polutionDate && vehicleDetailsForm.polutionDate.startDate)
      ? moment(vehicleDetailsForm.polutionDate.startDate).format('YYYY-MM-DD') : '';

    const vehicleDetailsRequest = {
      fcDate: fcDate,
      insuranceDate: insuranceDate,
      remarks: vehicleDetailsForm.rmearks ? vehicleDetailsForm.rmearks : '',
      status: vehicleDetailsForm.vechileStatus,
      taxDate: taxDate,
      vehicleColor: vehicleDetailsForm.vechileColor ? vehicleDetailsForm.vechileColor : '',
      vehicleName: vehicleDetailsForm.vechileName ? vehicleDetailsForm.vechileName : '',
      vehicleNumber: vehicleDetailsForm.vechileNumber ? vehicleDetailsForm.vechileNumber : '',
      polutionDate: polutionDate,
    }
    this.loaderButton = true;
    this.addVehicles(vehicleDetailsRequest).subscribe(vehicleDetailsResponse => {
      if (vehicleDetailsResponse.errorCode == 200 && vehicleDetailsResponse.status == "s") {
        this.vehicleDetailsPopUP.hide();
        this.router.navigate(['/#/devar-cabs/master/vehicle-details/list'])
        this.alert.showSuccess(vehicleDetailsResponse.userDisplayMesg);
      } else {
        this.vehicleDetailsPopUP.hide();
        this.alert.showError(vehicleDetailsResponse.userDisplayMesg);
      }
    });
  }

  viewVehicleDetails(viewId) {

    this.getAllVehiclesDetails(viewId).subscribe(viewVehicleDetailsResponse => {
      if (viewVehicleDetailsResponse.errorCode == 200 && viewVehicleDetailsResponse.status == "s") {
        this.viewDetails = viewVehicleDetailsResponse.data;

        /* let taxDate: any = { startDate: moment(viewVehicleDetailsResponse.data.taxDate), endDate: moment(viewVehicleDetailsResponse.data.taxDate) };
        let insuranceDate: any = { startDate: moment(viewVehicleDetailsResponse.data.insuranceDate), endDate: moment(viewVehicleDetailsResponse.data.insuranceDate) };
        let fcDate: any = { startDate: moment(viewVehicleDetailsResponse.data.fcDate), endDate: moment(viewVehicleDetailsResponse.data.fcDate) }; */


        this.vehicleDetailsForm.patchValue({
          vechileNumber: viewVehicleDetailsResponse.data.vehicleNumber,
          vechileName: viewVehicleDetailsResponse.data.vehicleName,
          vechileColor: viewVehicleDetailsResponse.data.vehicleColor,
          vechileStatus: viewVehicleDetailsResponse.data.status,
          insuranceDate: moment(viewVehicleDetailsResponse.datainsuranceDate),
          taxDate: moment(viewVehicleDetailsResponse.datataxDate),
          fcDate: moment(viewVehicleDetailsResponse.datafcDate),
          rmearks: viewVehicleDetailsResponse.data.remarks,

        });
      } else {
        this.alert.showError(viewVehicleDetailsResponse.userDisplayMesg);
      }
    });
  }

  updateVehicleSubmit() {
    const vehicleDetailsForm = this.vehicleDetailsForm.value;

    let fcDate = '';
    let insuranceDate = '';
    let taxDate = '';
    let polutionDate = '';

    if (vehicleDetailsForm.fcDate && vehicleDetailsForm.fcDate.startDate) {
      fcDate = moment(vehicleDetailsForm.fcDate.startDate).format('YYYY-MM-DD');
    } else if (vehicleDetailsForm.fcDate) {
      fcDate = moment(vehicleDetailsForm.fcDate).format('YYYY-MM-DD');
    } else {
      fcDate = '';
    }

    if (vehicleDetailsForm.insuranceDate && vehicleDetailsForm.insuranceDate.startDate) {
      insuranceDate = moment(vehicleDetailsForm.insuranceDate.startDate).format('YYYY-MM-DD');
    } else if (vehicleDetailsForm.insuranceDate) {
      insuranceDate = moment(vehicleDetailsForm.insuranceDate).format('YYYY-MM-DD');
    } else {
      insuranceDate = '';
    }

    if (vehicleDetailsForm.taxDate && vehicleDetailsForm.taxDate.startDate) {
      taxDate = moment(vehicleDetailsForm.taxDate.startDate).format('YYYY-MM-DD');
    } else if (vehicleDetailsForm.taxDate) {
      taxDate = moment(vehicleDetailsForm.taxDate).format('YYYY-MM-DD');
    } else {
      taxDate = '';
    }

    if (vehicleDetailsForm.polutionDate && vehicleDetailsForm.polutionDate.startDate) {
      polutionDate = moment(vehicleDetailsForm.polutionDate.startDate).format('YYYY-MM-DD');
    } else if (vehicleDetailsForm.polutionDate) {
      polutionDate = moment(vehicleDetailsForm.polutionDate).format('YYYY-MM-DD');
    } else {
      polutionDate = '';
    }

    const vehicleDetailsRequest = {
      id: +this.editId,
      fcDate: fcDate,
      insuranceDate: insuranceDate,
      remarks: vehicleDetailsForm.rmearks ? vehicleDetailsForm.rmearks : '',
      status: vehicleDetailsForm.vechileStatus,
      taxDate: taxDate,
      vehicleColor: vehicleDetailsForm.vechileColor ? vehicleDetailsForm.vechileColor : '',
      vehicleName: vehicleDetailsForm.vechileName ? vehicleDetailsForm.vechileName : '',
      vehicleNumber: vehicleDetailsForm.vechileNumber ? vehicleDetailsForm.vechileNumber : '',
      polutionDate: polutionDate
    }
    this.loaderButton = true;
    this.updateVehicles(vehicleDetailsRequest).subscribe(vehicleDetailsResponse => {
      if (vehicleDetailsResponse.errorCode == 200 && vehicleDetailsResponse.status == "s") {
        this.vehicleDetailsPopUP.hide();
        this.router.navigate(['/devar-cabs/master/vehicle-details/list'])
        this.alert.showSuccess(vehicleDetailsResponse.userDisplayMesg);
      } else {
        this.vehicleDetailsPopUP.hide();
        this.alert.showError(vehicleDetailsResponse.userDisplayMesg);
      }
    });
  }

  addVehicles(request): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/add';
    return this.http.post(url, request);
  }

  updateVehicles(request): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/update';
    return this.http.put(url, request);
  }

  getAllVehiclesDetails(viewId): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/getById/' + viewId;
    return this.http.get(url, viewId);
  }

}
