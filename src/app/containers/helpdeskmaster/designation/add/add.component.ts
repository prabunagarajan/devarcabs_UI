
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
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
  editId;
  editMode: boolean = false;
  designationDetails;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private service: CommonApiServiceService
  ) { }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('Id');
    this.getUniqueCode();
    this.createFormGrp();
    if ( this.editId ) {
      this.setEditMode(this.editId);
    }
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      designationCode: [''],
      designation: [''],
      active: [true,Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getUniqueCode() {
    if (this.editId) {
      // Does not require any unique code, as one will be assigned already during the edit.
      return;
    }
    this.service.getAll(apiUrls.getDesignationUniqueCode).subscribe(response => {
      this.f.designationCode.setValue(response.data);
    });
  }

  setEditMode(designationId) {
    this.editMode = true;
    this.service.getAll(`${apiUrls.getDesignationById}${designationId}`).subscribe(response => {
      if (response.data) {
        this.designationDetails = response.data;
        this.createForm.setValue({
          designationCode: this.designationDetails.code,
          designation: this.designationDetails.designationName,
          active: this.designationDetails.active
        });
      }
    })
  }

  addDesignation() {
    if (this.createForm.valid) {
      const formValue = this.createForm.value;
      const requestParam: any = {
        code: formValue.designationCode,
        designationName: formValue.designation,
        active: formValue.active
      };
      if (this.editMode) {
        requestParam.id = this.editId;
        this.service.Put(apiUrls.updateDesignation, requestParam).subscribe(response => {
          // this.alert.showSuccess();
          this.navigateToListing();
        });
        return;
      }
      this.service.post(apiUrls.addDesignation, requestParam).subscribe(response => {
        this.navigateToListing();
      });
    }
  }
  navigateToListing() {
    this.router.navigate(['/helpdeskmaster/designation/list']);
  }

}
