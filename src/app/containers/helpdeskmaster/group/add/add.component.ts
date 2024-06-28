import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  editId = ''
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk: any;
  formSubmitted = false;
  problem: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,
    private Service: CommonApiServiceService) { }

  ngOnInit() {

    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(editId: string) {
    this.Service.getAll(apiUrls.getByIdrole  + editId).subscribe(responceData => {
      this.f.userGroupCode.setValue(responceData.data.roleCode),
        this.f.userGroupName.setValue(responceData.data.roleName),
        this.f.status.setValue(responceData.data.status)
    })
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      userGroupCode: ['', Validators.required],
      userGroupName: ['', Validators.required],
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
    if (this.editId != '' && this.editId != undefined) {
      let postdata = {
        "roleCode": this.f.userGroupCode.value,
        "roleName": this.f.userGroupName.value,
        "status": this.f.status.value,
        "id": this.editId,
      }
      this.Service.Put(apiUrls.updateRoleMaster, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/groups/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });

    } else {
      let postdata = {
        "roleCode": this.f.userGroupCode.value,
        "roleName": this.f.userGroupName.value,
        "status": this.f.status.value
      }
      this.Service.post(apiUrls.addrolemaster, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/groups/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }

}
