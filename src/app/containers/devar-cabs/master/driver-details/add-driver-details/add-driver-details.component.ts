import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { DriverDetailsService } from '@app/services/dever-cabs/driver-details.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add-driver-details',
  templateUrl: './add-driver-details.component.html',
  styleUrls: ['./add-driver-details.component.scss']
})
export class AddDriverDetailsComponent implements OnInit {

  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  sub: any;
  cat: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  dropdown: any;
  dropdowngetbrand: any;
  editId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private driverdetails: DriverDetailsService,
    private service: CommonApiServiceService

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    if (this.createObj) {
      this.setData(this.editId);
    }
  }

  setData(editId: any) {
    this.driverdetails.driverDetailsGetById(editId).subscribe((resp: any) => {
      this.f.name.setValue(resp.data.name),
        this.f.mobileNumber.setValue(resp.data.mobileNumber),

        this.f.drivingLicenseNumber.setValue(resp.data.drivingLicenseNumber),
        this.f.aadharNumber.setValue(resp.data.aadharNumber),
        this.f.doorNumber.setValue(resp.data.doorNumber),
        this.f.street.setValue(resp.data.street),
        this.f.villageOrCity.setValue(resp.data.villageOrCity),
        this.f.district.setValue(resp.data.district),
        this.f.state.setValue(resp.data.state),
        this.f.county.setValue(resp.data.county),
        this.f.isPermanentDriver.setValue(resp.data.isPermanentDriver);
      this.f.status.setValue(resp.data.status);
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      name: [''],
      mobileNumber: [''],
      drivingLicenseNumber: [''],
      aadharNumber: [''],
      doorNumber: [''],
      street: [''],
      villageOrCity: [''],
      district: [''],
      state: [''],
      county: [''],
      isPermanentDriver: [''],
      status: [''],
    });

    // this.getuniuecode();
  }

  get f() {
    return this.createForm.controls;
  }

  // getuniuecode(){
  //   this.service.getAll(apiUrls.getcategorycode).subscribe((resp: any) => {
  //    if(resp.status=="s"){
  //    this.f.code.setValue(resp.data)
  //    }

  //   });
  // }

  addRegistration() {
    console.log("================",this.createForm.value)
    if (this.createForm.invalid) {
      this.formSubmitted = true;
    } else {
      if (this.editId == undefined) {
        let postdata = {
          "name": this.createForm.value.name,
          "mobileNumber": this.createForm.value.mobileNumber,
          "drivingLicenseNumber": this.createForm.value.drivingLicenseNumber,
          "aadharNumber": this.createForm.value.aadharNumber,
          "doorNumber": this.createForm.value.doorNumber,
          "street": this.createForm.value.street,
          "villageOrCity":this.createForm.value.villageOrCity,
          "district":this.createForm.value.district,
          "state":this.createForm.value.state,
          "county":this.createForm.value.county,
          "isPermanentDriver": this.createForm.value.isPermanentDriver,
          "status": this.createForm.value.status

        }
        this.driverdetails.driverDetailsAdd(postdata).subscribe((resp: any) => {
          if (resp.status == 's') {
            this.exampleModalCenter.show();
            this.alert.showSuccess(resp.userDisplayMesg, '');
            this.router.navigate(['/devar-cabs/master/driver-details/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'Error');
          }


        });
      }
      else {
        let postdata = {
          "name": this.createForm.value.name,
          "mobileNumber": this.createForm.value.mobileNumber,
          "drivingLicenseNumber": this.createForm.value.drivingLicenseNumber,
          "aadharNumber": this.createForm.value.aadharNumber,
          "doorNumber": this.createForm.value.doorNumber,
          "street": this.createForm.value.street,
          "villageOrCity":this.createForm.value.villageOrCity,
          "district":this.createForm.value.district,
          "state":this.createForm.value.state,
          "county":this.createForm.value.county,
          "isPermanentDriver": this.createForm.value.isPermanentDriver,
          "status": this.createForm.value.status,
          "id": this.editId,

        }
        this.driverdetails.driverDetailsUpdate(postdata).subscribe((resp: any) => {
          if (resp.status == 's') {
            this.exampleModalCenter.show();
            this.alert.showSuccess(resp.userDisplayMesg, '');
            this.router.navigate(['/devar-cabs/master/driver-details/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'Error');
          }


        });


      }

    }

  }

}
