import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import {  CategoryService} from '@app/services/helpdesk/category.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
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
    private category : CategoryService,
    private service: CommonApiServiceService

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
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
    this.category.getByIdCategoryList(editId).subscribe((resp: any) => {
   this.f.code.setValue(resp.data.code),
   this.f.categoryName.setValue(resp.data.categoryName),
   this.f.active.setValue(resp.data.active);
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      code: [''],
      categoryName: [''],
      active: ['true'],
    });

    this.getuniuecode();
  }

  get f(){
    return this.createForm.controls;
  }

  getuniuecode(){
    this.service.getAll(apiUrls.getcategorycode).subscribe((resp: any) => {
     if(resp.status=="s"){
     this.f.code.setValue(resp.data)
     }
      
    });
  }

  addRegistration(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
   if(this.editId== undefined){
    let postdata={
      "code": this.f.code.value,
      "categoryName":  this.f.categoryName.value,
      "active":  JSON.parse(this.f.active.value)
    
    }
    this.category.addcategory(postdata).subscribe((resp: any) => {
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/category/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
  }
  else{
    let postdata={
      "code": this.f.code.value,
      "categoryName":  this.f.categoryName.value,
      "active":  JSON.parse(this.f.active.value),
      "id":  this.editId,
    
    }
    this.category.editCategory(postdata).subscribe((resp: any) => {
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/category/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });


  }

  }

  }
}
