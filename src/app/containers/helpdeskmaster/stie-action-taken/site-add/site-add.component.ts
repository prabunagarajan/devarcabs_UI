import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-site-add',
  templateUrl: './site-add.component.html',
  styleUrls: ['./site-add.component.scss']
})
export class SiteAddComponent implements OnInit {

  editId:any=''
  createForm: FormGroup;
  formSubmitted: boolean;
  dropdowngetObservation: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    this.getall();
  }
  getall() {
    this.Service.getAll(apiUrls.getsiteobservation).subscribe((resp: any) => {

      this.dropdowngetObservation = resp.data
    });
  }
  setData(editId: any) {
    if(editId !='' && editId !=undefined){
    this.Service.getAll(apiUrls.getByIdSiteActionTaken + editId).subscribe((resp: any) => {
      this.f.Status.setValue(resp.data.active)
      this.f.Observation.setValue(resp.data.observationId)
      this.f.ActionTaken.setValue(resp.data.actionTaken)
    });
  }
  }


  createFormGrp() {
    this.createForm = this.formBuilder.group({
      ActionTaken:['',Validators.required],
      Observation: ['', Validators.required],
      Status: ['true', Validators.required],
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
    if (this.editId == '') {
      let postdata = {
        "observationId": this.f.Observation.value,
        "active": this.f.Status.value,
        "siteActionTaken": this.f.ActionTaken.value
      }
      this.Service.post(apiUrls.addSiteActionTaken, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/site-action-taken/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else {
      let postdata = {
        "id": this.editId,
        "observationId": this.f.Observation.value,
        "active": this.f.Status.value,
        "siteActionTaken": this.f.ActionTaken.value
      }
      this.Service.Put(apiUrls.updateSiteActionTaken, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/site-action-taken/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }


}
