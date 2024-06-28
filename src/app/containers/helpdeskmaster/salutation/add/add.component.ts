import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
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
  salutationDetails;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: CommonApiServiceService
  ) { }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.getUniqueCode();
    this.createFormGrp();
    if ( this.editId ) {
      this.setEditMode(this.editId);
    }
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      salutationCode: ['', Validators.required],
      salutation: ['', Validators.required],
      active: [true, Validators.required]
    });
  }

  getUniqueCode() {
    if (this.editId) {
      // Does not require any unique code, as one will be assigned already during the edit.
      return;
    }
    this.service.getAll(apiUrls.getUniqueSalutationCode).subscribe(response => {
      this.f.salutationCode.setValue(response.data);
    });
  }

  get f(){
    return this.createForm.controls;
  }

  setEditMode(salutationId) {
    this.editMode = true;
    this.service.getAll(`${apiUrls.getSalutationById}${salutationId}`).subscribe(response => {
      if (response.data) {
        this.salutationDetails = response.data;
        this.createForm.setValue({
          salutationCode: this.salutationDetails.code,
          salutation: this.salutationDetails.salutationname,
          active: this.salutationDetails.status
        });
      }
    })
  }

  addSalutation() {
    if (this.createForm.valid) {
      const formValue = this.createForm.value;
      const requestParam: any = {
        "code": formValue.salutationCode,
        "salutationname": formValue.salutation,
        "status": formValue.active
      };
      if (this.editMode) {
        requestParam.id = this.editId;
        this.service.Put(apiUrls.updateSalutation, requestParam).subscribe(response => {
          this.navigateToListing();
        });
        return;
      }
      this.service.post(apiUrls.createSalutation, requestParam).subscribe(response => {
        this.navigateToListing();
      });
    }
  }
  navigateToListing() {
    this.router.navigate(['/helpdeskmaster/salutation/list']);
  }
}
