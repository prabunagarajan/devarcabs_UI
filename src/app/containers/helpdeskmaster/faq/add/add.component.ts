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
  dropdowngetcatogry: any;
  editId: any = '';
  subcategoryName: any;
  categoryName: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private Service: CommonApiServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    this.getuniuecode();
    // this.getservice();
    this.getCatgoryservice();
  }
  setData(editId: any) {
    this.Service.getAll(apiUrls.faqGetbyid + '?id=' + editId).subscribe(responceData => {
      console.log(responceData);
      this.subcategoryName=responceData.data.subCategoryName
      this.categoryName=responceData.data.categoryName
      this.f.answer.setValue(responceData.data.answer),
        this.f.category.setValue(responceData.data.categoryid),
        this.getservice();
        this.f.faqCode.setValue(responceData.data.code),
        this.f.question.setValue(responceData.data.question),
        this.f.Status.setValue(responceData.data.status),
        this.f.subCategory.setValue(responceData.data.subCategoryid)
    })
  }
  getservice() {
    // console.log(event.target.value);

    this.Service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f.category.value).subscribe((resp: any) => {
      this.dropdown = resp.data;

    });
  }
  getCatgoryservice() {
    this.Service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.dropdowngetcatogry = resp.data;

    });
  }
  getuniuecode() {
    this.Service.getAll(apiUrls.faqcode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.faqCode.setValue(resp.data)
      }

    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      faqCode: [''],
      question: [''],
      answer: [''],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      Status: ['true', Validators.required],
    });
  }

  get f() {
    return this.createForm.controls;
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.editId != '' && this.editId != undefined) {
      let postdata = {
        

        "answer": this.f.answer.value,
        "categoryid": this.f.category.value,
        "code": this.f.faqCode.value,
        "question": this.f.question.value,
        "status": this.f.Status.value,
        "subCategoryid": this.f.subCategory.value,
        "id": this.editId,
        // "deleted": false,
        // "categoryName":  this.subcategoryName,
        // "subCategoryName":  this.categoryName,
    

      }
      console.log("postdata", postdata);

      this.Service.Put(apiUrls.editfaq, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/faq/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
     
    }else{
      let postdata = {
        "answer": this.f.answer.value,
        "categoryid": this.f.category.value,
        "code": this.f.faqCode.value,
        "question": this.f.question.value,
        "status": this.f.Status.value,
        "subCategoryid": this.f.subCategory.value


      }
      console.log("postdata", postdata);

      this.Service.post(apiUrls.addfaq, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/faq/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }

}
