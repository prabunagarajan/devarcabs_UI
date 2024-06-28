import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionTakenService, AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;
  id: any;
  formSubmitted: boolean;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private Service: CommonApiServiceService,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      shiftConfCode: ['', Validators.required],
      shiftConf: ['', Validators.required],
      active: [true, Validators.required]
    });
    this.getuniquecode();
  }

  get f(){
    return this.createForm.controls;
  }

  setData(id: any) {
    this.Service.getAll(apiUrls.getShiftConfigurationById + id).subscribe(responceData => {
      console.log(responceData);
        this.f.shiftConfCode.setValue(responceData.data.code),
        this.f.shiftConf.setValue(responceData.data.configuration),
        this.f.active.setValue(responceData.data.status)
    })
  }
  getuniquecode() {
    this.Service.getAll(apiUrls.getShiftConfigurationUniqueCode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.shiftConfCode.setValue(resp.data)
      }

    });
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {
      console.log(this.id);

      let postdata = {
        "code": this.f.shiftConfCode.value,
        "configuration": this.f.shiftConf.value,
        "status": this.f.active.value,
      }
      this.Service.post(apiUrls.addShiftConfiguration, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shiftconfiguration/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }else{
      console.log(this.id);

      let postdata = {
        "code": this.f.shiftConfCode.value,
        "configuration": this.f.shiftConf.value,
        "status": this.f.active.value,
        "id": this.id,
      }
      console.log("postdata", postdata);

      this.Service.Put(apiUrls.updateShiftConfiguration, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shiftconfiguration/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }

}
