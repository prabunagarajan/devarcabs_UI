import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;

  list: any;
  formSubmitted = false;
  editId: string='';
  constructor(  private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private Service: CommonApiServiceService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp()
  }

  setData(editId: any) {
    if(editId !='' && editId !=undefined){
    this.Service.getAll(apiUrls.getIssueReportById + editId).subscribe((resp: any) => {
      this.f.status.setValue(resp.data[0].active)
      this.f.issueType.setValue(resp.data[0].issuetype)
    });
  }
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      issueType: ['',Validators.required],
      status: [true,Validators.required],
    });
  }
  get f(){
    return this.createForm.controls;
  }

  addRegistration(form) {    
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.editId == '' || this.editId == null || this.editId == undefined) {
      let postdata = {
        "active": this.f.status.value,
        "issuetype": this.f.issueType.value
      }
      this.Service.post(apiUrls.addSiteIssueType, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/site-issue-type/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else {
      let postdata = {
        "id": this.editId,
        "active": this.f.status.value,
        "issuetype": this.f.issueType.value
      }
      this.Service.Put(apiUrls.updateSiteIssueType, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/site-issue-type/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }
}
