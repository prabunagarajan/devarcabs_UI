import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityTypeService } from '@app/services/helpdesk/entity-type.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  editId=0;
  createForm: FormGroup;
  formSubmitted=false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  editView: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private alert: AlertService,
    private Service:EntityTypeService
    ) { }

  ngOnInit() {
    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getEntityTypeById(params.id);
      }
    });

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
      entityCode: ['',Validators.required],
      entityName: ['',Validators.required],
      entityOrOthers: ['',Validators.required],
      status: [true,Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getEntityTypeCode(){
    this.Service.getEntityTypeCode().subscribe((responceData) => {
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.f.entityCode.setValue(responceData.data)
      }else{
        this.f.entityCode.setValue('');
      }
    })
  }

  addEntityType(form) {
    this.formSubmitted = true;
     if(form.valid){
      const paylaod = {
        "entityName": this.f.entityName.value,
        "active": this.f.status.value,
        "entityCode": this.f.entityCode.value,
        "entityOrOthers": this.f.entityOrOthers.value
      }
      this.Service.createEntityType(paylaod).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/entity-type/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
     } 
  }

  updateEntityType(form) {
    this.formSubmitted = true;
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const paylaod = {
        "id": this.editId,
        "entityName": this.f.entityName.value,
        "active": this.f.status.value,
        "entityCode": this.f.entityCode.value,
        "entityOrOthers": this.f.entityOrOthers.value
      }
      this.Service.updateEntityType(paylaod).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/entity-type/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
    }
  }

  submit(createForm){
    if(this.editId != 0){
      this.updateEntityType(createForm);
    }else{
      this.addEntityType(createForm);
    }
  }

  getEntityTypeById(id) {
    this.Service.getEntityTypeById(id).subscribe(responceData => {
      if(responceData.status=='s' && responceData.errorCode == 200){
        this.f.entityCode.setValue(responceData.data[0].entityCode);
        this.f.entityName.setValue(responceData.data[0].entityName);
        this.f.status.setValue(responceData.data[0].active);
        this.f.entityOrOthers.setValue(responceData.data[0].entityOrOthers);
      }
    })
  }
}
