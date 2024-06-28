import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ActionTakenService, ActualProbelmService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  createForm
  formSubmitted: boolean;
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private Service: CommonApiServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
    this.getuniuecode();
    
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      ticketStatusCode: [''],
      ticketStatus: [''],
      Status: ['true',Validators.required],
    });  
  }
  
    setData(id) {
      this.Service.getAll(apiUrls.getbyIdDevice+id).subscribe(responceData => {
        console.log(responceData);
        this.f.ticketStatusCode.setValue(responceData.data.code)
        this.f.ticketStatus.setValue(responceData.data.deviceAccesoriesStatus)
        this.f.Status.setValue(responceData.data.status)

      })
    }
  
  getuniuecode(){
    this.Service.getAll(apiUrls.getCodedevice).subscribe((resp: any) => {
     console.log(resp);
     if(resp.status=="s"){
     this.f.ticketStatusCode.setValue(resp.data)
     }
      
    });
  }
  get f(){
    return this.createForm.controls;
  }

  addRegistration(form) {
    this.formSubmitted = true;
    if(form.invalid){
      return
    }
    if (this.id == '' || this.id == undefined) {
    let postdata={
      "code": this.f.ticketStatusCode.value,
      "deviceAccesoriesStatus":  this.f.ticketStatus.value,   
      "status":  this.f.Status.value 
    }
    console.log("postdata",postdata);   
    this.Service.post(apiUrls.getAdd, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/device-accessories-status/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      } 
    });
  } else {
    let postdata={
      "id": this.id,
      "code": this.f.ticketStatusCode.value,
      "deviceAccesoriesStatus":  this.f.ticketStatus.value,   
      "status":  this.f.Status.value 
    }
    console.log("postdata",postdata);   
    this.Service.Put(apiUrls.getAdd, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/device-accessories-status/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      } 
    });
  }
  }
}
