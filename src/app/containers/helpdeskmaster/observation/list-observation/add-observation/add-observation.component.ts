import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.scss']
})
export class AddObservationComponent implements OnInit {
  editId:any=''
  createForm: FormGroup;
  formSubmitted: boolean;
  issueTypedropdrown: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private Service: CommonApiServiceService) { }

  ngOnInit() {
    this.getissueTypeActive()
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    // this.getissueTypeActive()

  }
  setData(editId: any) {
    if(editId !='' && editId !=undefined){
    this.Service.getAll(apiUrls.getByIdsiteobservation + editId).subscribe((resp: any) => {
      this.f.Status.setValue(resp.data.active)
      this.f.Observation.setValue(resp.data.observation)
      this.f.issueType.setValue(resp.data.siteIssueTypeId)
    });
  }
  } 


  createFormGrp() {
    this.createForm = this.formBuilder.group({
      issueType: ['', Validators.required],
      Observation: ['', Validators.required],
      Status: ['true', Validators.required],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  getissueTypeActive() {
    this.Service.getAll(apiUrls.siteissuetypeActive).subscribe((resp: any) => {
      this.issueTypedropdrown = resp.data;

    });
  }

  addRegistration(form) {    
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.editId == '') {
      let postdata = {
   
        "active":  this.f.Status.value,
        "siteObservation": this.f.Observation.value,
        "siteIssueTypeId": this.f.issueType.value,
      }
      this.Service.post(apiUrls.Addsiteobservation, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/Observation/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else {
      let postdata = {
        "id": this.editId,
        "active":  this.f.Status.value,
        "observation": this.f.Observation.value,
        "siteIssueTypeId": this.f.issueType.value,
      }
      this.Service.Put(apiUrls.updatesiteobservation, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/Observation/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }

}
