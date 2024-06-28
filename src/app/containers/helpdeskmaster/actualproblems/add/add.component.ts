import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  editId = 0;
  categoryList = [];
  subCategoryList = [];
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk:any;
  formSubmitted = false;
  village:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,  private Service: CommonApiServiceService,
    private problem: ActualProbelmService,private authService: AuthService) { }

  ngOnInit() {
    this.createFormGrp();
    this.getCategoryList();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.getActualProblem(params.Id);
      }else{
        this.getActualProblemCode();
      }
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      actualproblemCode: ['',Validators.required],
      actualproblem: ['',Validators.required],
      category: ['',Validators.required],
      subCategory: ['',Validators.required],
      status: ['',Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getCategoryList(){
    this.Service.getAll(apiUrls.getcatogry).subscribe((responceData: any) => {
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.categoryList = responceData.data;
      }else{
        this.categoryList = [];
      }
    })
  }

  getSubCategoryList(event){
    this.f.subCategory.setValue('')
    this.problem.subCategoryList(event.target.value).subscribe((responceData:any)=>{
      //console.log(JSON.stringify(responceData))
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.subCategoryList = responceData.data;
      }else{
        this.subCategoryList = [];
      }
    })
  }

  getActualProblemCode(){
    this.problem.getActualProblemCode().subscribe((responceData) => {
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.f.actualproblemCode.setValue(responceData.data)
      }else{
        this.f.actualproblemCode.setValue('');
      }
    })
  }

  addActualProblem(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      let postData = {
        "active": this.f.status.value,
        "actualproblem": this.f.actualproblem.value,
        "categoryId": this.f.category.value,
        "code": this.f.actualproblemCode.value,
        "createdBy": this.authService.getUserId(),
        "id": this.editId,
        "modifiedBy": this.authService.getUserId(),
        "subCategoryId": this.f.subCategory.value
      }
      console.log(postData)
      this.problem.createActualProblem(postData).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            //this.exampleModalCenter.show();
            //sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/actualprobelms/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
    }
  }

  updateActualProblem(form){
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const postData = {
        "active": this.f.status.value,
        "actualproblem": this.f.actualproblem.value,
        "categoryId": this.f.category.value,
        "id": this.editId,
        "subCategoryId": this.f.subCategory.value,
        
        "code": this.f.actualproblemCode.value,
      }
      this.problem.updateActualProblem(postData).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            //this.exampleModalCenter.show();
            //sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/actualprobelms/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
    }
  }

  getActualProblem(id){
    this.problem.getByIdActualProbelmList(id).subscribe((responceData:any)=>{
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.f.actualproblemCode.setValue(responceData.data.actualProblemCode);
        this.f.actualproblem.setValue(responceData.data.actualProblem);
        this.f.category.setValue(responceData.data.categoryId);
        this.getSubCategoryListById(responceData.data.categoryId);
        this.f.subCategory.setValue(responceData.data.subCategoryId);
        this.f.status.setValue(responceData.data.active);
      }else{
        this.f.actualproblemCode.setValue('');
        this.f.actualProblem.setValue('');
        this.f.category.setValue('');
        this.f.subCategory.setValue('');
        this.f.status.setValue(true);
      }
    });
  }

  getSubCategoryListById(id){
    this.f.subCategory.setValue('')
    this.problem.subCategoryList(id).subscribe((responceData:any)=>{
      //console.log(JSON.stringify(responceData))
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.subCategoryList = responceData.data;
      }else{
        this.subCategoryList = [];
      }
    })
  }

}
