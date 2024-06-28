import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;
  formSubmitted = false;
  list: any;
  dropdowngetbrand: any;
  dropdown: any;
  tableData: any;
  totalRecords: any;
  noTableData: string;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  editId: any;
  editView: string;



  constructor(
    private formBuilder: FormBuilder, private router: Router,
    private alert: AlertService, private service: CommonApiServiceService,
    private route:ActivatedRoute,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    this.getassettyep();
    this.getbrand();
    this.viewEdit()
  }
  viewEdit(){
    if(this.editId){
        this.editView="Edit"
    }
    else{
      this.editView="Add"
    }

  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      assetName: ['', Validators.required],
      assetType: ['', Validators.required],
      assetsubtype: ['', Validators.required],
      status: [true, Validators.required]
    });
  }

  get f() {
    return this.createForm.controls;
  }


  setData(editId: any) {
    // this.createForm.patchValue(this.createObj);
    this.service.getAll(apiUrls.assetSubTypeGet+editId).subscribe((resp: any) => {
      console.log(resp)
      this.f.assetName.setValue(resp.data.assetName),
      this.f.assetType.setValue(resp.data.assetType),
      this.f.assetsubtype.setValue(resp.data.assetsubType),
      this.f.active.setValue(resp.data.active);
       });
  }
  getassettyep() {
    this.service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  getbrand() {
    this.service.getAll(apiUrls.deviceActive).subscribe((resp: any) => {

      this.dropdowngetbrand = resp.data;
    });
  }

  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      // const postData = this.createForm.value;
      // console.log(postData);
      if(this.editId  =='' || this.editId  == null || this.editId ==undefined){
      let postdata={
        "status": JSON.parse(this.f.status.value),
        "assetsubType":  this.f.assetsubtype.value,
        "assetName": this.f.assetName.value,
        "assetType":  this.f.assetType.value,
        "createdBy": localStorage.getItem('USER_ID')

      }

      console.log(postdata)
      
      this.service.post(apiUrls.assetSubTypeAdd, postdata).subscribe(
        (responceData) => {
          if (responceData.status == "s") {
            this.exampleModalCenter.show();
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/helpdeskmaster/asset-subtype/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
      }else{
        let postdata={
          "status": JSON.parse(this.f.status.value),
          "assetsubType":  this.f.assetsubtype.value,
          "assetName": this.f.assetName.value,
          "assetType":  this.f.assetType.value,
          "id":  this.editId,
          "createdBy": localStorage.getItem('USER_ID')
        }
        this.service.Put(apiUrls.assetSubTypeUpdate, postdata).subscribe(
          (responceData) => {
            if (responceData.status == "s") {
              this.exampleModalCenter.show();
              this.alert.showSuccess(responceData.userDisplayMesg, '');
              sessionStorage.removeItem('formdata');
              this.router.navigate(['/helpdeskmaster/asset-subtype/list']);
            } else {
              this.alert.showError(responceData.userDisplayMesg, 'Error');
            }
          }
        );
      }

    }
  }
}


