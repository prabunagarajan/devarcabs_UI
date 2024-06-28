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
  dropdown: any;
  dropdowngetbrand: any;
  editId: any='';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private alert: AlertService,
    private action: ActionTakenService,
    private service: CommonApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
   
  }
  setData(editId: any) {
    this.service.getAll(apiUrls.getbyidAssetTypeBrand+editId).subscribe((resp: any) => {
   this.f.brandCode.setValue(resp.data.code),
   this.f.assetType.setValue(resp.data.assetTypeId),
   this.f.assetBrand.setValue(resp.data.assetBrandId),
   this.f.Status.setValue(resp.data.status);
    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      brandCode: [''],
      assetType: [''],
      assetBrand: [''],
      Status: ['true',Validators.required],
    });
    this.getuniuecode();
    this.getassettyep();
    this.getbrand();
  }
  getassettyep(){
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {
      // this.list = resp.data;
      this.dropdown = resp.data;
    });
  }
  getbrand(){
    this.service.getAll(apiUrls.getActiveAssetbrand).subscribe((resp: any) => {
      // this.list = resp.data;
      this.dropdowngetbrand = resp.data;
    });
  }
  get f(){
    return this.createForm.controls;
  }
  getuniuecode(){
    this.service.getAll(apiUrls.getassettypebrandUniquecode).subscribe((resp: any) => {
     console.log(resp);
     if(resp.status=="s"){
     this.f.brandCode.setValue(resp.data)
     }
      
    });
  }

  addRegistration(form) {
    console.log(form)
    this.formSubmitted = true;
    if(form.invalid){
      return
    }
   if(    this.editId  !='' &&  this.editId  !=undefined){
    let postdata={
      "assetBrandId": this.f.assetBrand.value,
      "assetTypeId":  this.f.assetType.value,
      "code": this.f.brandCode.value,
      "status":  this.f.Status.value,
      "id":  this.editId,
    
    }
    this.service.Put(apiUrls. updateMapAsset, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/map-asset-type-and-asset-brand/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
  }else{
    let postdata={
      "assetBrandId": this.f.assetBrand.value,
      "assetTypeId":  this.f.assetType.value,
      "code": this.f.brandCode.value,
      "status":  this.f.Status.value
    
    }
    this.service.post(apiUrls.AddMapAsset, postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['helpdeskmaster/map-asset-type-and-asset-brand/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });



  }
   
  }
}
