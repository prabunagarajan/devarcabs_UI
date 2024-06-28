import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { UserManagementService } from '@app/services/helpdesk/user-management.service';
import { apiUrls } from '@appEnv/apiurls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: any;
  formSubmitted
  editId: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
       
      }
    });
  }
  setData(id: any) {
    this.Service.getAll(apiUrls.suplierGetBYid + id).subscribe(responceData => {
        this.f.supplier.setValue(responceData.data.supplier),
        this.f.supplierName.setValue(responceData.data.supplierName),
        this.f.email.setValue(responceData.data.emailId),
        this.f.address.setValue(responceData.data.address)
        this.f.mobileno.setValue(responceData.data.mobileNumber),
        this.f.status.setValue(responceData.data.active)
     
    })
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      supplier: ['', Validators.required],
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$")]],
      status: ['true', Validators.required],

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
        "supplier": this.f.supplier.value,
        "supplierName": this.f.supplierName.value,
        "address" : this.f.address.value,
        "emailId": this.f.email.value,
        "mobileNumber": this.f.mobileno.value,
        "active": this.f.status.value
      }
      this.Service.post(apiUrls.suplierAdd, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/supplier-master/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else {
      let postdata = {
        "supplier": this.f.supplier.value,
        "supplierName": this.f.supplierName.value,
        "address" : this.f.address.value,
        "emailId": this.f.email.value,
        "mobileNumber": this.f.mobileno.value,
        "active": this.f.status.value,
        "id":this.editId,
        "createdBy":   localStorage.getItem('userId')
      }
      this.Service.Put(apiUrls.suplierupdate, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/supplier-master/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }
}
