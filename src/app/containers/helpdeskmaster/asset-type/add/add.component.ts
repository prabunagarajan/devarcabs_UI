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
  id: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private service: CommonApiServiceService) { }

  ngOnInit() {
    this.createFormGrp();
    //this.getproblem();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(params.id);
      }else{
        this.getuniuecode();
      }
    });
  }
  getuniuecode(){
    this.service.getAll(apiUrls.getUniquecode).subscribe((resp: any) => {
     console.log(resp);
     if(resp.status=="s"){
     this.f.assetTypeCode.setValue(resp.data)
     }
      
    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      assetTypeCode: [''],
      assetId: [''],
      assetType: [''],
      Status: [true,Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  addRegistration(form) {
    console.log(form)
    this.formSubmitted = true;
    if(form.invalid){
      return
    }
    if (this.id == '' || this.id == undefined) {
      console.log(this.id);
    let postdata={
      "code":  this.f.assetTypeCode.value,
      "status": this.f.Status.value,
      "type": this.f.assetType.value
    }
    this.service.post(apiUrls.addasset, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/asset-type/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }  
    });
  } else {
    let postdata={
      "id": this.id,
      "code":  this.f.assetTypeCode.value,
      "status": this.f.Status.value,
      "type": this.f.assetType.value
    }
    this.service.Put(apiUrls.addasset, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        //this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/asset-type/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
  }
  }

  updateAssetType(form) {
    this.formSubmitted = true;
    if(form.invalid){
      return
    }
    let postdata={
      "id": this.id,
      "code":  this.f.assetTypeCode.value,
      "status": this.f.Status.value,
      "type": this.f.assetType.value
    }
    this.service.Put(apiUrls.addasset, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        //this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/asset-type/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
   
  }

  setData(id) {
    this.service.getAll(apiUrls.getbyidAsset+id).subscribe(responceData => {
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.f.assetType.setValue(responceData.data.type);
        this.f.assetTypeCode.setValue(responceData.data.code);
        this.f.Status.setValue(responceData.data.status);
      }
    })
  }
}
