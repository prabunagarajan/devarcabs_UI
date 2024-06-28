import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import {  AccessoriesService} from '@app/services/helpdesk/accessories.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  sub: any;
  cat: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  dropdown: any;
  dropdowngetbrand: any;
  editId: any;

   constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private alert: AlertService,
    private service : AccessoriesService,

  ) { }

  ngOnInit() {
    this.getuniuecode();
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    if (this.createObj) {
      this.setData(this.editId);
    }
  }

  setData(editId: any) {
    this.service.getassetaccessoriesbyId(editId).subscribe((resp: any) => {
      console.log(resp.data);
      this.f.accessoriesCode.setValue(resp.data.accessoriesCode),
      this.f.accessoriesName.setValue(resp.data.accessoriesName),
      this.f.status.setValue(resp.data.status);
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      accessoriesCode: [''],
      accessoriesName: [''],
      status: [''],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getuniuecode(){
    this.service.getassetaccessoriescode().subscribe((resp: any) => {
     console.log(resp);
     if(resp.status=="s"){
     this.f.accessoriesCode.setValue(resp.data)
     }
      
    });
  }


  addRegistration(form) {
    console.log(form);
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
   if(this.editId== undefined){

    let postdata={
      "accessoriesCode": this.f.accessoriesCode.value,
      "accessoriesName":  this.f.accessoriesName.value,
      "status": JSON.parse(this.f.status.value),
      "id": 0
    }

    console.log(postdata);

    this.service.addassetaccessories(postdata).subscribe((resp: any) => {
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/accessories/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
  }
  else{
    let postdata={
      "accessoriesCode": this.f.accessoriesCode.value,
      "accessoriesName":  this.f.accessoriesName.value,
      "status":  JSON.parse(this.f.status.value),
      "id":  this.editId,
    
    }
    this.service.editassetaccessories(postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/accessories/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });


  }

  }

  }

}
