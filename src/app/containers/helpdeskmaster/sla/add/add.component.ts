import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
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
  cat: any;
  sub: any;
  id: any;
  issue: any;
  priority: any;
  Priority: any = "Priority";
  priorityId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private action: ActionTakenService,
    private service: CommonApiServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }else{
    this.getuniquecode();
      }
    });
    this.createFormGrp();
    this.getcat();
    // this.getIssueDetails();
  }

  setData(id: any) {
    this.service.getAll(apiUrls.getSlaById + id).subscribe(responceData => {
        this.f.slaCode.setValue(responceData.data.code),
        this.f.SLA.setValue(responceData.data.sla),
        this.f.category.setValue(responceData.data.categoryId),
        this.getsub();
        this.f.subCategory.setValue(responceData.data.subCategoryId),
        this.getissueDetailsService();
        this.f.issueDetails.setValue(responceData.data.issueDetailsId),
        this.f.priority.setValue(responceData.data.priority),
        this.f.status.setValue(responceData.data.active)
        this.priorityId= responceData.data.priorityId
    })
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      slaCode: [''],
      SLA: [''],
      category: ['', Validators.required],
      subCategory: ['',Validators.required],
      issueDetails: [''],
      priority: ['',Validators.required],
      status: ['',Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getcat() {
    this.action.getCategory().subscribe((responceData: any) => {
   
      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getsub() {    
    this.action.getByIdcategory(this.f.category.value).subscribe((responceData: any) => {
      this.sub = responceData.data;
    });
  }


  getpriority() {
    this.service.getAll(apiUrls.getActivePriority + "/" + this.f.subCategory.value + "/" + this.f.category.value).subscribe((resp: any) => {
      this.priority = resp.data
      if (resp.status == 's') {
        this.f.priority.setValue(this.priority.priority ? this.priority.priority : '-')
        this.priorityId= this.priority .id
      } else {
        this.Priority = ''
        this.priorityId=''
        this.f.priority.setValue('');
      }

    });
  }
  getissueDetailsService() {
    this.service.getAll(apiUrls.getID + this.f.subCategory.value + "/" + this.f.category.value).subscribe((resp: any) => {
      this.issue = resp.data;

    });
  }
  getuniquecode() {
    this.service.getAll(apiUrls.getSlaUniqueCode).subscribe((resp: any) => {

      if (resp.status == "s") {
        this.f.slaCode.setValue(resp.data)
      }

    });
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {
    
      let postdata = {
        "code": this.f.slaCode.value,
        "categoryId": this.f.category.value,
        "subCategoryId": this.f.subCategory.value,
        "sla": this.f.SLA.value,
        "active":  this.f.status.value == "true" ? true : false,
        "issueDetailsId": this.f.issueDetails.value,
        "priority": this.f.priority.value,
        'priorityId':   this.priorityId
      }
      this.service.post(apiUrls.addSLA, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/sla/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }else{
  

      let postdata = {
        "code": this.f.slaCode.value,
        "categoryId": this.f.category.value,
        "subCategoryId": this.f.subCategory.value,
        "sla": this.f.SLA.value,
        "active": this.f.status.value,
        "issueDetailsId": this.f.issueDetails.value,
        "priority": "High",
        "id": this.id,
        'priorityId':   this.priorityId
      }
   

      this.service.Put(apiUrls.updateSla, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/sla/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }
  keyPress(event: any) {
    const pattern = (/^\d*\.?\d*$/);

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
