import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;
  list: any;
  formSubmitted = false;
  cat: any;
  sub: any;
  noSubCategory: boolean = false;
  editId: string;
  editMode: boolean;
  subSolutionDetails: any;


  constructor(
    private formBuilder: FormBuilder,
    private service: CommonApiServiceService,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('Id');
    if ( this.editId ) {
      this.setEditMode(this.editId);
    }
    this.createFormGrp();
    this.getUniqueCode();
    this.getCategory();
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      subSolutionId: [''],
      SLA: [''],
      category: ['', Validators.required],
      subCategory: ['',Validators.required],
      knowledgeRes: ['',Validators.required],
      remarks: ['',Validators.required],
      issueDetails: [''],
      priority: [''],
    });
  }

  getUniqueCode() {
    this.service.getAll(apiUrls.subSolGetUniqueCode).subscribe(response => {
      this.f.subSolutionId.setValue(response.data);
    });
  }

  getCategory() {
    this.service.getAll(apiUrls.getcatogry).subscribe((resp: any) => {
      this.cat = resp.data;
    });
  }

  getSubCategory() {
    this.service.getAll(apiUrls.getsubcatogry + "?" + "categoryid=" + this.f['category'].value).subscribe((resp: any) => {
      this.sub = resp.data;
      this.noSubCategory = false;
      this.f.subCategory.enable();
      this.f.subCategory.setValidators(Validators.required);
      if (!resp.data) {
        this.noSubCategory = true;
        this.f.subCategory.disable();
        this.f.subCategory.clearValidators();
      }
    });
  }

  getPriority() {
    this.service.getAll(apiUrls.getActivePriority + "/" + this.f['subCategory'].value + "/" + this.f['category'].value).subscribe((resp: any) => {
      console.log(resp);
      this.getSla();
    });
  }
  getSla() {
    this.service.getAll(apiUrls.getActiveSla + "/" + this.f['subCategory'].value + "/" + this.f['category'].value).subscribe((resp: any) => {
      console.log(resp);
    });
  }

  setEditMode(editId) {
    this.editMode = true;
    this.service.getAll(`${apiUrls.subSolGetById}${editId}`).subscribe(response => {
      if (response.data) {
        this.subSolutionDetails = response.data;
        this.createForm.setValue({
          subSolutionId: this.subSolutionDetails.subSolutionId,
          SLA: this.subSolutionDetails.sla,
          category: this.subSolutionDetails.categoryId,
          subCategory: this.subSolutionDetails.subCategoryId,
          knowledgeRes: this.subSolutionDetails.knowledge_resolution,
          remarks: this.subSolutionDetails.remarks,
          issueDetails: this.subSolutionDetails.issueDetails,
          priority: this.subSolutionDetails.priority,
        });
      }
    })
  }

  get f(){
    return this.createForm.controls;
  }

  addSubSolution() {
    if (this.createForm.valid) {
      const formValue = this.createForm.value;
      const payLoad = {
        "subSolution": formValue.subSolutionId,
        "categoryId": formValue.category,
        "subCategoryId": formValue.subCategory,
        "priority":"2", // @TODO: Not sure about the priority as of now.
        "sla":formValue.sla,
        "issueDetails":formValue.issueDetails,
        "knowledge_resolution":formValue.knowledgeRes,
        "remarks": formValue.remarks,
        "subCode": formValue.subSolutionId,
        "status":true // @TODO: Not sure about the status there is no INPUT.
      };

      if (this.editMode) {
        this.service.Put(apiUrls.subSolUpdate, payLoad).subscribe(response => {
          if (response.status === 's') {
            this.alert.showSuccess(response.userDisplayMesg);
          } else {
            this.alert.showError(response.userDisplayMesg);
          }
          this.navigateToList();
        });
        return;
      }

      this.service.post(apiUrls.subSolAdd, payLoad).subscribe(response => {
        if (response.status === 's') {
          this.alert.showSuccess(response.userDisplayMesg);
        } else {
          this.alert.showError(response.userDisplayMesg);
        }
        this.navigateToList();
      });
    }
  }

  navigateToList() {
    this.router.navigate(['/helpdeskmaster/subsolution/list']);
  }
}
