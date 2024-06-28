import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
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
  searchCategories: any;
  searchSubCategories: any;
  searchIssueDetails: any;
  dropdownsla: any;
  slaId: any;
  Priority: any = "Priority";
  Sla: any = "SLA";
  dropdownassignGroup: any;
  dropdownAT: any;
  id: any;
  priority: any;
  sla: any;
  issue: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService, private route: ActivatedRoute,
    private apiService: CommonApiServiceService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
    this.getCatgoryservice();
    this.getassigngroup();
    // this.getSla();
    // this.getIssueDetails();
    this.getuniquecode();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      wofklowCode: [''],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      issueDetails: [''],
      priority: [''],
      sla: [''],
      assignGroup: [''],
      assignTo: [''],
      status: ['true', Validators.required],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  setData(id: any) {
    this.apiService.getAll(apiUrls.getHDWorkflowById + id).subscribe(responceData => {
      console.log(responceData);
      this.f.wofklowCode.setValue(responceData.data.code),
        this.f.category.setValue(responceData.data.categoryId),
        this.getsub();
      this.f.subCategory.setValue(responceData.data.subCategoryId),
        this.getpriority();
      this.getissueDetailsService()
      this.f.issueDetails.setValue(responceData.data.issueDetailsId),
        this.f.priority.setValue(responceData.data.priorityName),
        this.f.priority.setValue(responceData.data.priorityName),
        this.f.sla.setValue(responceData.data.sla),
        this.Sla = responceData.data.slaId
      this.f.status.setValue(responceData.data.active)
      this.f.assignGroup.setValue(responceData.data.assignToGroupId)
      this.getAssignTo()
      this.f.assignTo.setValue(responceData.data.assignToId)
    })
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {
      const paylaod = {

        "active": this.f.status.value,
        "assignTo": Number(this.f.assignTo.value),
        "categoryId": Number(this.f.category.value),
        "code": this.f.wofklowCode.value,
        "issueDetailsId": this.f.issueDetails.value,
        "priority": this.f.priority.value,
        "sla": Number(this.Sla),
        "subCategoryId": Number(this.f.subCategory.value)

      }
      // const postData = this.createForm.value;
      console.log(paylaod);

      this.apiService.post(apiUrls.addHDWorkflow, paylaod).subscribe(
        (responceData: any) => {
          if (responceData.status == 's') {
            // this.exampleModalCenter.show();
            sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/workflow/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
    } else {
      const paylaod = {
        "id": this.id,
        "active": this.f.status.value,
        "assignTo": Number(this.f.assignTo.value),
        "categoryId": Number(this.f.category.value),
        "code": this.f.wofklowCode.value,
        "issueDetailsId": this.f.issueDetails.value,
        "priority": this.f.priority.value,
        "sla": Number(this.Sla),
        "subCategoryId": Number(this.f.subCategory.value)

      }
      // const postData = this.createForm.value;
      console.log(paylaod);

      this.apiService.Put(apiUrls.updateHDWorkflow, paylaod).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            // this.exampleModalCenter.show();
            sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/workflow/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
    }
  }

  getuniquecode() {
    this.apiService.getAll(apiUrls.getHDWorkflowUniqueCode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.wofklowCode.setValue(resp.data)
      }

    });
  }

  getCatgoryservice() {
    this.apiService.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.searchCategories = resp.data;

    });
  }
  getsub() {
    this.f.subCategory.setValue('')
    this.apiService.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f.category.value).subscribe((resp: any) => {
      this.searchSubCategories = resp.data;

    });
  }
  getissueDetailsService() {
    this.f.issueDetails.setValue(''),
      this.apiService.getAll(apiUrls.getID + this.f.subCategory.value + "/" + this.f.category.value).subscribe((resp: any) => {
        this.issue = resp.data;

      });
  }

  getpriority() {
    this.f.priority.setValue(''),
      this.apiService.getAll(apiUrls.getActivePriority + "/" + this.f.subCategory.value + "/" + this.f.category.value).subscribe((resp: any) => {
        this.priority = resp.data
        if (resp.status == 's') {
          this.f.priority.setValue(this.priority.priority ? this.priority.priority : '-')
        } else {
          this.Priority = ''
          this.f.priority.setValue('');
        }

      });
  }

  getsla() {
    this.f.sla.setValue('')
    this.apiService.getAll(apiUrls.getActiveSla + "/" + this.f.category.value + "/" + this.f.subCategory.value + "/" + this.f.issueDetails.value).subscribe((resp: any) => {

      if (resp.status == 's') {
        this.sla = resp.data[0]
        this.Sla = this.sla.id
        console.log("in", this.Sla);

        this.f.sla.setValue(this.sla.sla ? this.sla.sla : '-');
      } else {
        this.Sla = 0
        this.f.sla.setValue('');
      }
    });
  }
  getassigngroup() {
    this.apiService.getAll(apiUrls.assigngroup).subscribe((resp: any) => {
      this.dropdownassignGroup = resp.data;

    });
  }
  getAssignTo() {
    this.apiService.getAll(apiUrls.assignto + "?roleId=" + this.f.assignGroup.value).subscribe((resp: any) => {
      this.dropdownAT = resp.data;
    });
  }
  // getSla() {
  //   this.apiService.getAll(apiUrls.getslaActive).subscribe((resp: any) => {
  //     this.dropdownsla = resp.data;
  //   });
  // }
}
