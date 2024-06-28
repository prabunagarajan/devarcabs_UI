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
  styleUrls: ['./add.component.scss']
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
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,
    private action: ActionTakenService,
    private Service: CommonApiServiceService,
    private service: ActualProbelmService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
    // this.getproblem();
    this.getcat();

  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      code: ['', Validators.required],
      actionTaken: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      actualProblemId: ['', Validators.required],
      active: [true, Validators.required],
    });
    this.getuniquecode();

  }
  setData(id: any) {
    this.action.getByIdActiontakenList(id).subscribe((resp: any) => {
      this.f.code.setValue(resp.data.actionTakenCode),
        this.f.actionTaken.setValue(resp.data.actionTaken),
        this.f.categoryId.setValue(resp.data.categoryId),
        this.getsub();
      this.f.active.setValue(resp.data.active),
        this.f.subCategoryId.setValue(resp.data.subCategoryId);
      this.getActualProblem();

      this.f.actualProblemId.setValue(resp.data.actualProblemId)

    })
  }
  getActualProblem() {
    this.Service.getAll(apiUrls.ActualProblemBasedONcat + this.f.categoryId.value + '/' + this.f.subCategoryId.value).subscribe((responceData: any) => {
      this.problem = responceData.data;
    });
  }
  addRegistration(form) {
    console.log(form)
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {
      const paylaod = {
        "actionTaken": this.createForm.value.actionTaken,
        "active": this.createForm.value.active,
        "actualProblemId": parseInt(this.createForm.value.actualProblemId),
        "categoryId": parseInt(this.createForm.value.categoryId),
        "subCategoryId": parseInt(this.createForm.value.subCategoryId),
        "code": this.createForm.value.code,

      }
      this.action.createaction(paylaod).subscribe(
        (responseData) => {
          if (responseData.status == "s") {
            this.exampleModalCenter.show();
            sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responseData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/actiontaken/list']);
          } else {
            this.alert.showError(responseData.userDisplayMesg, 'Error');
          }
        }
      );
    }
    else {
      const postData = {
        "actionTaken": this.createForm.value.actionTaken,
        "active": this.createForm.value.active,
        "actualProblemId": parseInt(this.createForm.value.actualProblemId),
        "categoryId": parseInt(this.createForm.value.categoryId),
        "subCategoryId": parseInt(this.createForm.value.subCategoryId),
        "code": this.createForm.value.code,
        "id": this.id,
      }
      this.action.updateAction(postData).subscribe(
        (responseData) => {
          if (responseData.status == "s") {
            this.exampleModalCenter.show();
            this.alert.showSuccess(responseData.userDisplayMesg, '');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/helpdeskmaster/actiontaken/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      )
    }
  }

  get f() {
    return this.createForm.controls;
  }
  getcat() {
    this.action.getCategory().subscribe((responceData: any) => {
      console.log(responceData);
      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  getsub() {
    this.f.actualProblemId.setValue('')
    this.f.subCategoryId.setValue('')
    this.action.getByIdcategory(this.f.categoryId.value).subscribe((responceData: any) => {
      this.sub = responceData.data;
    });

  }
  getuniquecode() {
    this.action.getuniquecode().subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.code.setValue(resp.data)
      }

    });
  }

}
