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
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk: any;
  formSubmitted = false;
  problem: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  dropdowngetissueFrom: any;
  editId: any='';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private action: ActionTakenService,
    private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    this.getuniuecode();
    this.getbrand();
  }
  setData(editId: any) {
    if(editId !='' && editId !=undefined){
    this.Service.getAll(apiUrls.issueFromgetById + editId).subscribe((resp: any) => {

      this.f.Status.setValue(resp.data.active)
      this.f.issueFrom.setValue(resp.data.issueFrom)
      this.f.issueFromCode.setValue(resp.data.issueFromCode)
    });
  }
  }
  getuniuecode() {
    this.Service.getAll(apiUrls.issueFromUniqueCode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.issueFromCode.setValue(resp.data)
      }

    });
  }
  getbrand() {
    this.Service.getAll(apiUrls.issueFromActive).subscribe((resp: any) => {
      this.dropdowngetissueFrom = resp.data;
    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      issueFromCode: [''],
      issueFrom: ['', Validators.required],
      Status: ['true', Validators.required],
    });
    // this.f.Status.setValue('Active')
  }

  get f() {
    return this.createForm.controls;
  }

  addRegistration(form) {
    console.log("this.editId",this.editId);
    
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.editId == '') {
      let postdata = {
        "issueFromCode": this.f.issueFromCode.value,
        "active": this.f.Status.value,
        "issueFrom": this.f.issueFrom.value
      }
      this.Service.post(apiUrls.issueFromAdd, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/issue-from/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    } else {
      let postdata = {
        "id": this.editId,
        "issueFromCode": this.f.issueFromCode.value,
        "active": this.f.Status.value,
        "issueFrom": this.f.issueFrom.value
      }
      this.Service.Put(apiUrls.issueFromUpdate, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/issue-from/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }

  }

}
