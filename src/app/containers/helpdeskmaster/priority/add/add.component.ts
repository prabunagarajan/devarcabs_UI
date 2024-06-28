import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formSubmitted = false;
  createForm: FormGroup;
  id: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  sub: any;
  cat: any;

  constructor(
    private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute,
    private Service: CommonApiServiceService, private alert: AlertService,private subcategory:SubcategoryService,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
    this.getcat();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      priorityCode: [''],
      priority: ['', Validators.required],
      categoryid: ['', Validators.required],
      subCategory: ['', Validators.required],
      active: [true, Validators.required]
    });
    this.getuniquecode();
  }
  get f(){
    return this.createForm.controls;
  }
  setData(id: any) {
    this.Service.getAll(apiUrls.getPriorityById + id).subscribe(responceData => {
      
        this.f.priorityCode.setValue(responceData.data.code),
        this.f.priority.setValue(responceData.data.priority),
        this.f.categoryid.setValue(responceData.data.categoryId),
        this.getsub();
        this.f.subCategory.setValue(responceData.data.subCategoryId),
        this.f.active.setValue(responceData.data.active)
    })
  }
  getuniquecode() {
    this.Service.getAll(apiUrls.getPriorityUniqueCode).subscribe((resp: any) => {
   
      if (resp.status == "s") {
        this.f.priorityCode.setValue(resp.data)
      }

    });
  }
  getsub() {
    this.sub = []
    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f.categoryid.value).subscribe((resp: any) => {
      if(resp.status=='s'){
      this.sub = resp.data;
      }else{
        this.sub = []
      }
    });
  }
  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {


      let postdata = {
        "code": this.f.priorityCode.value,
        "priority": this.f.priority.value,
        "categoryId":this.f.categoryid.value,
        "subCategoryId":this.f.subCategory.value,
        "active": this.f.active.value,
      }
      this.Service.post(apiUrls.addPriority, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/priority/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }else{
     

      let postdata = {
        "code": this.f.priorityCode.value,
        "priority": this.f.priority.value,
        "categoryId":this.f.categoryid.value,
        "subCategoryId":this.f.subCategory.value,
        "active": this.f.active.value,
        "id": this.id,
      }
   

      this.Service.Put(apiUrls.updatePriority, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/priority/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }
}
