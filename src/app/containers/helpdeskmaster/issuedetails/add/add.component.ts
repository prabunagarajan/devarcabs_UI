import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
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
      console.log(params);
      
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    this.getuniuecode();

    this.getCatgoryservice();
  }
  setData(editId: any) {
    this.Service.getAll(apiUrls.getbyIdIssuedetails + editId).subscribe(responceData => {
      console.log(responceData);
 
      this.f.issue.setValue(responceData.data.issueName),
        this.f.category.setValue(responceData.data.categoryId),
        this.getservice();
      this.f.faqCode.setValue(responceData.data.issuecode),
        this.f.status.setValue(responceData.data.active),
        this.f.subCategory.setValue(responceData.data.subCategoryId)
        this.f.isIssuetype.setValue(responceData.data.issuetype)
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
    this.Service.getAll(apiUrls.getuniqueCode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.faqCode.setValue(resp.data)
      }

    });
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      faqCode: [''],
      issue: [''],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      isIssuetype: ['', Validators.required],
      status: ['true', Validators.required],
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
        "id": this.editId,
        "active": this.f.status.value,
        "issueName": this.f.issue.value,
        "categoryId": this.f.category.value,
        "subCategoryId": this.f.subCategory.value,
        "issuetype": this.f.isIssuetype.value
      }
      console.log("postdata", postdata);

      this.Service.Put(apiUrls.editIssuedetails, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/issuedetails/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
     
    } else {
      let postdata = {
        "issuecode":this.f.faqCode.value,
        "active":this.f.status.value,
        "issueName":this.f.issue.value,
        "categoryId":this.f.category.value,
        "subCategoryId":this.f.subCategory.value,
        "issuetype": this.f.isIssuetype.value
        
        }
      console.log("postdata", postdata);

      this.Service.post(apiUrls.addissueDetail, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/issuedetails/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }

}
