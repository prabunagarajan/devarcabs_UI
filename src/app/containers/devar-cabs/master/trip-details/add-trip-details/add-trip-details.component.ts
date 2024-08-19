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
  selector: 'app-add-trip-details',
  templateUrl: './add-trip-details.component.html',
  styleUrls: ['./add-trip-details.component.scss']
})
export class AddTripDetailsComponent implements OnInit {

  tripDetailsForm: FormGroup;
  maxDate = moment();
  tripDetailsFormSubmit: boolean = false;
  @ViewChild('tripDetailsPopUP', { static: false }) tripDetailsPopUP;
  loaderButton: boolean = false;
  baseUrl = environment.helpdeskURL;
  viewDetails: any;
  updateFlag: boolean = false;
  editId: String;
  isShowActive: boolean;
  vehicleActiveDetailsList: any[] = [];
  driverActiveDetailsList: any;
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
        console.log(' this.editId : params[id] :', this.editId, params['id']);
        this.updateFlag = true;
        this.viewTripDetails(params['id']);
      }
    });
    this.getVehicleActiveDropdown();
    this.getDriverActiveDropdown();

    this.tripDetailsForm = this.formBuilder.group({
      vechileNumber: ['', Validators.required],
      tripDate: ['', Validators.required],
      customerName: ['', Validators.required],
      customerMobileNumber: ['', Validators.required],
      driverName: ['', Validators.required],
      startKM: ['', Validators.required],
      closingKM: ['', Validators.required],
      usedKM: ['', Validators.required],
      startTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      totalHRS: ['', Validators.required],
      acType: [false, Validators.required],
      acStartKM: [''],
      acClosingKM: [''],
      acUsedKM: [''],
      acRemarks: [''],
      visitingPlace: ['', Validators.required],
      dayRent: [''],
      toll: [''],
      totalRent: ['', Validators.required],
      diesel: ['', Validators.required],
      driverPayment: [''],
      permit: [''],
      advanceType: ['', Validators.required],
      advanceAmount: ['', Validators.required],
      paymentType: ['', Validators.required],
      recivedAmount: ['', Validators.required],
      pendingAmount: ['', Validators.required],
      balanceAmount: ['', Validators.required],
      submittedBy: ['', Validators.required],
      tripProfit: ['']
    });

  }

  get tripDetailsFormGet(): { [key: string]: AbstractControl } {
    return this.tripDetailsForm.controls;
  }

  checkConfirm(tripDetailsForm) {
    if (this.isShowActive) {
      this.tripDetailsForm.controls['acStartKM'].setValidators([Validators.required]);
      this.tripDetailsForm.controls["acStartKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acClosingKM'].setValidators([Validators.required]);
      this.tripDetailsForm.controls["acClosingKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acUsedKM'].setValidators([Validators.required]);
      this.tripDetailsForm.controls["acUsedKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acRemarks'].setValidators([Validators.required]);
      this.tripDetailsForm.controls["acRemarks"].updateValueAndValidity();
    } else {
      this.tripDetailsForm.controls['acStartKM'].clearValidators();
      this.tripDetailsForm.controls["acStartKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acClosingKM'].clearValidators();
      this.tripDetailsForm.controls["acClosingKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acUsedKM'].clearValidators();
      this.tripDetailsForm.controls["acUsedKM"].updateValueAndValidity();
      this.tripDetailsForm.controls['acRemarks'].clearValidators();
      this.tripDetailsForm.controls["acRemarks"].updateValueAndValidity();
    }
    console.log('tripDetailsForm :', tripDetailsForm);
    if (!tripDetailsForm.valid) {
      this.tripDetailsFormSubmit = true;
    } else {
      this.tripDetailsPopUP.show();
    }
  }

  confirmSubmit() {
    if (this.updateFlag) {
      this.updateTripSubmit();
    } else {
      this.addTripSubmit();
    }
  }

  addTripSubmit() {

    const tripDetailsForm = this.tripDetailsForm.value;
    const tripDate = (tripDetailsForm.tripDate && tripDetailsForm.tripDate.startDate)
      ? moment(tripDetailsForm.tripDate.startDate).format('YYYY-MM-DD') : '';

    const startTime = (tripDetailsForm.startTime && tripDetailsForm.startTime.startDate)
      ? moment(tripDetailsForm.startTime.startDate).format('YYYY-MM-DD HH:mm:ss') : '';

    const closingTime = (tripDetailsForm.closingTime && tripDetailsForm.closingTime.startDate)
      ? moment(tripDetailsForm.closingTime.startDate).format('YYYY-MM-DD HH:mm:ss') : '';

    const tripDetailsRequest = {
      acClosingKM: tripDetailsForm.acClosingKM ? tripDetailsForm.acClosingKM : 0,
      acNote: tripDetailsForm.acRemarks ? tripDetailsForm.acRemarks : '',
      acOrNonAc: tripDetailsForm.acType ? "AC" : "NON-AC",
      acStartingKM: tripDetailsForm.acStartKM ? tripDetailsForm.acStartKM : 0,
      advanceAmount: tripDetailsForm.advanceAmount ? tripDetailsForm.advanceAmount : 0,
      advanceType: tripDetailsForm.advanceType ? tripDetailsForm.advanceType : 0,
      balanceAmount: tripDetailsForm.balanceAmount ? tripDetailsForm.balanceAmount : 0,
      closingKM: tripDetailsForm.closingKM ? tripDetailsForm.closingKM : 0,
      closingTime: closingTime ? closingTime : 0,
      customerMobileNumber: tripDetailsForm.customerMobileNumber ? tripDetailsForm.customerMobileNumber : '',
      customerName: tripDetailsForm.customerName ? tripDetailsForm.customerName : '',
      date: tripDate ? tripDate : '',
      dayRent: tripDetailsForm.dayRent ? tripDetailsForm.dayRent : 0,
      diesel: tripDetailsForm.diesel ? tripDetailsForm.diesel : 0,
      driverName: tripDetailsForm.driverName ? tripDetailsForm.driverName : '',
      driverPayment: tripDetailsForm.driverPayment ? tripDetailsForm.driverPayment : 0,
      paymentType: tripDetailsForm.paymentType ? tripDetailsForm.paymentType : '',
      pendingAmount: tripDetailsForm.pendingAmount ? tripDetailsForm.pendingAmount : 0,
      permitAmount: tripDetailsForm.permit ? tripDetailsForm.permit : 0,
      profitAmount: tripDetailsForm.tripProfit ? tripDetailsForm.tripProfit : 0,
      receivedAmount: tripDetailsForm.recivedAmount ? tripDetailsForm.recivedAmount : 0,
      startingKM: tripDetailsForm.startKM ? tripDetailsForm.startKM : 0,
      startingTime: startTime ? startTime : '',
      status: "SUBMITTED",
      submittedBy: tripDetailsForm.submittedBy ? tripDetailsForm.submittedBy : '',
      toll: tripDetailsForm.toll ? tripDetailsForm.toll : 0,
      totalRent: tripDetailsForm.totalRent ? tripDetailsForm.totalRent : 0,
      totalTime: tripDetailsForm.totalHRS ? tripDetailsForm.totalHRS : 0,
      usedAcKM: tripDetailsForm.acUsedKM ? tripDetailsForm.acUsedKM : 0,
      usedKM: tripDetailsForm.usedKM ? tripDetailsForm.usedKM : 0,
      vehicleNumber: tripDetailsForm.vechileNumber ? tripDetailsForm.vechileNumber : '',
      visitingPlace: tripDetailsForm.visitingPlace ? tripDetailsForm.visitingPlace : ''
    }

    this.loaderButton = true;
    this.addTrip(tripDetailsRequest).subscribe(tripDetailsResponse => {
      if (tripDetailsResponse.errorCode == 200 && tripDetailsResponse.status == "s") {
        this.tripDetailsPopUP.hide();
        this.router.navigate(['/devar-cabs/master/trip-details/list'])
        this.alert.showSuccess(tripDetailsResponse.userDisplayMesg);
      } else {
        this.tripDetailsPopUP.hide();
        this.alert.showError(tripDetailsResponse.userDisplayMesg);
      }
    });
  }

  viewTripDetails(viewId) {

    this.getTripDetails(viewId).subscribe(viewTripDetailsResponse => {
      if (viewTripDetailsResponse.errorCode == 200 && viewTripDetailsResponse.status == "s") {
        this.viewDetails = viewTripDetailsResponse.data;
        /* const formattedStartTime = moment(viewTripDetailsResponse.data.startingTime, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss'); */
        /* const inputTime = viewTripDetailsResponse.data.startingTime;

        // Parse the input datetime string
        const momentTime = moment(inputTime, 'YYYY-MM-DD HH:mm:ss');

        // If you need to format it as 'YYYY-MM-DD HH:mm:ss' for the form:
        const formattedStartTime = momentTime.format('YYYY-MM-DD HH:mm:ss'); */


        this.tripDetailsForm.patchValue({
          vechileNumber: viewTripDetailsResponse.data.vehicleNumber,
          tripDate: moment(viewTripDetailsResponse.data.date),
          customerName: viewTripDetailsResponse.data.customerName,
          customerMobileNumber: viewTripDetailsResponse.data.customerMobileNumber,
          driverName: viewTripDetailsResponse.data.driverName,
          startKM: viewTripDetailsResponse.data.startingKM,
          closingKM: viewTripDetailsResponse.data.closingKM,
          usedKM: viewTripDetailsResponse.data.usedKM,
          startTime: moment(viewTripDetailsResponse.data.startingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
          closingTime: moment(viewTripDetailsResponse.data.closingTime, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
          totalHRS: viewTripDetailsResponse.data.totalTime,
          acType: (viewTripDetailsResponse.data.acOrNonAc) == "AC" ? true : false,
          acStartKM: viewTripDetailsResponse.data.acStartingKM,
          acClosingKM: viewTripDetailsResponse.data.acClosingKM,
          acUsedKM: viewTripDetailsResponse.data.usedAcKM,
          acRemarks: viewTripDetailsResponse.data.acNote,
          visitingPlace: viewTripDetailsResponse.data.visitingPlace,
          dayRent: viewTripDetailsResponse.data.dayRent,
          toll: viewTripDetailsResponse.data.toll,
          totalRent: viewTripDetailsResponse.data.totalRent,
          diesel: viewTripDetailsResponse.data.diesel,
          driverPayment: viewTripDetailsResponse.data.driverPayment,
          permit: viewTripDetailsResponse.data.permitAmount,
          advanceType: viewTripDetailsResponse.data.advanceType,
          advanceAmount: viewTripDetailsResponse.data.advanceAmount,
          paymentType: viewTripDetailsResponse.data.paymentType,
          recivedAmount: viewTripDetailsResponse.data.receivedAmount,
          pendingAmount: viewTripDetailsResponse.data.pendingAmount,
          balanceAmount: viewTripDetailsResponse.data.balanceAmount,
          submittedBy: viewTripDetailsResponse.data.submittedBy,
          tripProfit: viewTripDetailsResponse.data.profitAmount
        });
        this.clickAcOrNonAc((viewTripDetailsResponse.data.acOrNonAc) == "AC" ? true : false);
      } else {
        this.alert.showError(viewTripDetailsResponse.userDisplayMesg);
      }
    });
  }

  updateTripSubmit() {
    const tripDetailsForm = this.tripDetailsForm.value;

    let tripDate = '';
    let startTime = '';
    let closingTime = '';

    if (tripDetailsForm.tripDate && tripDetailsForm.tripDate.startDate) {
      tripDate = moment(tripDetailsForm.tripDate.startDate).format('YYYY-MM-DD');
    } else if (tripDetailsForm.tripDate) {
      tripDate = moment(tripDetailsForm.tripDate).format('YYYY-MM-DD');
    } else {
      tripDate = '';
    }

    if (tripDetailsForm.startTime && tripDetailsForm.startTime.startDate) {
      startTime = moment(tripDetailsForm.startTime.startDate).format('YYYY-MM-DD HH:mm:ss');
    } else if (tripDetailsForm.startTime) {
      startTime = moment(tripDetailsForm.startTime).format('YYYY-MM-DD HH:mm:ss');
    } else {
      startTime = '';
    }

    if (tripDetailsForm.closingTime && tripDetailsForm.closingTime.startDate) {
      closingTime = moment(tripDetailsForm.closingTime.startDate).format('YYYY-MM-DD HH:mm:ss');
    } else if (tripDetailsForm.closingTime) {
      closingTime = moment(tripDetailsForm.closingTime).format('YYYY-MM-DD HH:mm:ss');
    } else {
      closingTime = '';
    }

    const tripDetailsRequest = {
      id: this.editId,
      acClosingKM: tripDetailsForm.acClosingKM ? tripDetailsForm.acClosingKM : 0,
      acNote: tripDetailsForm.acRemarks ? tripDetailsForm.acRemarks : '',
      acOrNonAc: tripDetailsForm.acType ? "AC" : "NON-AC",
      acStartingKM: tripDetailsForm.acStartKM ? tripDetailsForm.acStartKM : 0,
      advanceAmount: tripDetailsForm.advanceAmount ? tripDetailsForm.advanceAmount : 0,
      advanceType: tripDetailsForm.advanceType ? tripDetailsForm.advanceType : 0,
      balanceAmount: tripDetailsForm.balanceAmount ? tripDetailsForm.balanceAmount : 0,
      closingKM: tripDetailsForm.closingKM ? tripDetailsForm.closingKM : 0,
      closingTime: closingTime ? closingTime : 0,
      customerMobileNumber: tripDetailsForm.customerMobileNumber ? tripDetailsForm.customerMobileNumber : '',
      customerName: tripDetailsForm.customerName ? tripDetailsForm.customerName : '',
      date: tripDate ? tripDate : '',
      dayRent: tripDetailsForm.dayRent ? tripDetailsForm.dayRent : 0,
      diesel: tripDetailsForm.diesel ? tripDetailsForm.diesel : 0,
      driverName: tripDetailsForm.driverName ? tripDetailsForm.driverName : '',
      driverPayment: tripDetailsForm.driverPayment ? tripDetailsForm.driverPayment : 0,
      paymentType: tripDetailsForm.paymentType ? tripDetailsForm.paymentType : '',
      pendingAmount: tripDetailsForm.pendingAmount ? tripDetailsForm.pendingAmount : 0,
      permitAmount: tripDetailsForm.permit ? tripDetailsForm.permit : 0,
      profitAmount: tripDetailsForm.tripProfit ? tripDetailsForm.tripProfit : 0,
      receivedAmount: tripDetailsForm.recivedAmount ? tripDetailsForm.recivedAmount : 0,
      startingKM: tripDetailsForm.startKM ? tripDetailsForm.startKM : 0,
      startingTime: startTime ? startTime : '',
      status: "SUBMITTED",
      submittedBy: tripDetailsForm.submittedBy ? tripDetailsForm.submittedBy : '',
      toll: tripDetailsForm.toll ? tripDetailsForm.toll : 0,
      totalRent: tripDetailsForm.totalRent ? tripDetailsForm.totalRent : 0,
      totalTime: tripDetailsForm.totalHRS ? tripDetailsForm.totalHRS : 0,
      usedAcKM: tripDetailsForm.acUsedKM ? tripDetailsForm.acUsedKM : 0,
      usedKM: tripDetailsForm.usedKM ? tripDetailsForm.usedKM : 0,
      vehicleNumber: tripDetailsForm.vechileNumber ? tripDetailsForm.vechileNumber : '',
      visitingPlace: tripDetailsForm.visitingPlace ? tripDetailsForm.visitingPlace : ''
    }
    this.loaderButton = true;
    this.updateTrip(tripDetailsRequest).subscribe(tripDetailsResponse => {
      if (tripDetailsResponse.errorCode == 200 && tripDetailsResponse.status == "s") {
        this.tripDetailsPopUP.hide();
        this.router.navigate(['/devar-cabs/master/trip-details/list'])
        this.alert.showSuccess(tripDetailsResponse.userDisplayMesg);
      } else {
        this.tripDetailsPopUP.hide();
        this.alert.showError(tripDetailsResponse.userDisplayMesg);
      }
    });
  }

  addTrip(request): Observable<any> {
    const url = this.baseUrl + 'tripDetails/add';
    return this.http.post(url, request);
  }

  updateTrip(request): Observable<any> {
    const url = this.baseUrl + 'tripDetails/update';
    return this.http.put(url, request);
  }

  getTripDetails(viewId): Observable<any> {
    const url = this.baseUrl + 'tripDetails/getById/' + viewId;
    return this.http.get(url, viewId);
  }

  clickAcOrNonAc(isActive: boolean) {
    console.log(isActive)
    if (isActive == true) {
      this.isShowActive = true;
    } else {
      this.isShowActive = false;
      this.tripDetailsForm.patchValue({
        acStartKM: '',
        acClosingKM: '',
        acUsedKM: '',
        acRemarks: ''
      });
    }
  }
  onlyDigits(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  startKMCalculation(startKM) {
    const tripDetailsForm = this.tripDetailsForm.value;
    if (tripDetailsForm.startKM && tripDetailsForm.closingKM) {
      this.tripDetailsForm.patchValue({
        usedKM: parseInt(tripDetailsForm.closingKM) - parseInt(tripDetailsForm.startKM)
      });
    }
  }

  closingKMCalculation(closingKM) {
    const tripDetailsForm = this.tripDetailsForm.value;
    if (tripDetailsForm.startKM < tripDetailsForm.closingKM && tripDetailsForm.startKM && tripDetailsForm.closingKM) {
      this.tripDetailsForm.patchValue({
        usedKM: parseInt(tripDetailsForm.closingKM) - parseInt(tripDetailsForm.startKM)
      });
    } else {
      this.tripDetailsForm.patchValue({
        closingKM: ''
      });
      this.alert.showError('Closig KM must be a greter than of start KM')
    }
  }


  closingTimeCalculation() {

    const tripDetailsForm = this.tripDetailsForm.value;
    if (tripDetailsForm.startTime && tripDetailsForm.startTime.startDate) {

      const startDate = moment(tripDetailsForm.startTime.startDate, 'YYYY-MM-DD HH:mm:ss');
      const endDate = moment(tripDetailsForm.closingTime.startDate, 'YYYY-MM-DD HH:mm:ss');

      const duration = moment.duration(endDate.diff(startDate));
      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      const totelHRS = `${hours}:${minutes.toString().padStart(2, '0')}`;

      console.log('duration : hours : minutes :', duration, hours, minutes);

      this.tripDetailsForm.patchValue({
        totalHRS: totelHRS
      });
    } else {
      this.tripDetailsForm.patchValue({
        closingTime: ''
      });
    }
  }


  pendingAndBalanceAmtCalculation() {
    const tripDetailsForm = this.tripDetailsForm.value;
    /* if (tripDetailsForm.recivedAmount == '' || tripDetailsForm.recivedAmount == 0 || tripDetailsForm.recivedAmount == undefined) {
      this.tripDetailsForm.patchValue({
        recivedAmount: ''
      });
    } */
    if (tripDetailsForm.totalRent && tripDetailsForm.recivedAmount && tripDetailsForm.advanceAmount) {
      this.tripDetailsForm.patchValue({
        balanceAmount: (parseInt(tripDetailsForm.totalRent) - (parseInt(tripDetailsForm.advanceAmount) + parseInt(tripDetailsForm.recivedAmount))),
        pendingAmount: (parseInt(tripDetailsForm.totalRent) - (parseInt(tripDetailsForm.advanceAmount) + parseInt(tripDetailsForm.recivedAmount)))
      });
    } else {
      if (tripDetailsForm.totalRent && tripDetailsForm.advanceAmount) {
        this.tripDetailsForm.patchValue({
          balanceAmount: (parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount)),
          pendingAmount: (parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount))
        });
      }
    }
  }
  totalPendingAndBalanceAmtCalculation() {
    const tripDetailsForm = this.tripDetailsForm.value;
    if (tripDetailsForm.totalRent) {
      this.tripDetailsForm.patchValue({
        balanceAmount: parseInt(tripDetailsForm.totalRent),
        pendingAmount: parseInt(tripDetailsForm.totalRent)
      });
    } else {
      if (tripDetailsForm.totalRent) {
        this.tripDetailsForm.patchValue({
          balanceAmount: parseInt(tripDetailsForm.totalRent),
          pendingAmount: parseInt(tripDetailsForm.totalRent)
        });
      }
    }
  }

  advancePendingAndBalanceAmtCalculation() {
    const tripDetailsForm = this.tripDetailsForm.value;
    if (tripDetailsForm.totalRent && tripDetailsForm.advanceAmount) {
      this.tripDetailsForm.patchValue({
        balanceAmount: parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount),
        pendingAmount: parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount)
      });
    } else {
      if (tripDetailsForm.totalRent && tripDetailsForm.advanceAmount) {
        this.tripDetailsForm.patchValue({
          balanceAmount: parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount),
          pendingAmount: parseInt(tripDetailsForm.totalRent) - parseInt(tripDetailsForm.advanceAmount)
        });
      }
    }
  }

  getVehicleActiveDropdown() {
    this.getAllVehicleActive().subscribe(getAllVehicleActiveResponse => {
      if (getAllVehicleActiveResponse.status == 's') {
        this.vehicleActiveDetailsList = getAllVehicleActiveResponse.data;
      } else {
        this.vehicleActiveDetailsList = [];
      }
    })
  }
  getAllVehicleActive(): Observable<any> {
    const url = this.baseUrl + 'vehicleDetails/active';
    return this.http.get(url);
  }
  getDriverActiveDropdown() {
    this.getAllDriverActive().subscribe(getDriverActiveDropdownResponse => {
      if (getDriverActiveDropdownResponse.status == 's') {
        this.driverActiveDetailsList = getDriverActiveDropdownResponse.data;
      } else {
        this.driverActiveDetailsList = [];
      }
    })
  }
  getAllDriverActive(): Observable<any> {
    const url = this.baseUrl + 'DriverDetails/active';
    return this.http.get(url);
  }

}
