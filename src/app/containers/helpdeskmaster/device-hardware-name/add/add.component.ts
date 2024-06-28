import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@app/models/master';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  formSubmitted = false;
  dropdown: any = '';
  editId: any = '';
  editView: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService, private service: CommonApiServiceService
  ) { }




  ngOnInit() {
    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {

      }
    });
    this.getassettyep();
    this.viewEdit()
  }
  viewEdit() {
    if (this.editId) {
      this.editView = "Update"
    }
    else {
      this.editView = "Add"
    }

  }

  setData(id: any) {
    this.service.getAll(apiUrls.DeviceHardwareNameGetBYid + id).subscribe(responceData => {
      if (responceData.status == 's') {
        this.createForm.controls['deviceNameHardwareName'].setValue(responceData.data.deviceName)
        this.f.status.setValue(responceData.data.status),
          this.f.assetType.setValue(responceData.data.assetType)


      }

    })
  }
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      assetType: ['', Validators.required],
      deviceNameHardwareName: ['', Validators.required],
      status: ['', Validators.required],

    });

  }

  get f() {
    return this.createForm.controls;
  }

  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.editId == '' || this.editId == undefined) {
      let postdata = {
        "deviceName": this.f.deviceNameHardwareName.value,
        "assetType": this.f.assetType.value,
        "status": this.f.status.value,
      }
      this.service.post(apiUrls.DeviceHardwareNameadd, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/device-hardware-name/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else {
      let postdata = {
        "deviceName": this.f.deviceNameHardwareName.value,
        "assetType": this.f.assetType.value,

        "status": this.f.status.value,
        "id": this.editId,
        "createdBy": localStorage.getItem('userId')
      }
      this.service.Put(apiUrls.DeviceHardwareNameUpdate, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/device-hardware-name/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }
}
