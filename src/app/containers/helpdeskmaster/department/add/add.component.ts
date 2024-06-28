import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '@app/services/helpdesk/department.service';
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

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private alert: AlertService,
    private Service:DepartmentService
    ) { }

  ngOnInit() {
    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getDepartmentById(params.id);
      }else{
        this.getDeptCode();
      }
    });
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      deptCode: ['',Validators.required],
      department: ['',Validators.required],
      status: [true,Validators.required],
    });
  }

  get f(){
    return this.createForm.controls;
  }

  getDeptCode(){
    this.Service.getDeptCode().subscribe((responceData) => {
      if(responceData.status == 's' && responceData.errorCode == 200){
        this.f.deptCode.setValue(responceData.data)
      }else{
        this.f.deptCode.setValue('');
      }
    })
  }

  addRegistration(form) {
    this.formSubmitted = true;
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const paylaod = {
        "department": this.f.department.value,
        "status": this.f.status.value ? "true": 'false',
        "departmentCode": this.f.deptCode.value
      }
      this.Service.createDept(paylaod).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            //this.exampleModalCenter.show();
            //sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/department/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
    }
  }

  updateDepartment(form) {
    this.formSubmitted = true;
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const paylaod = {
        "id": this.editId,
        "department": this.f.department.value,
        "status": this.f.status.value ? "true": 'false',
        "departmentCode": this.f.deptCode.value
      }
      this.Service.upadateDept(paylaod).subscribe(
        (responceData) => {
          if (responceData.status == 's') {
            //this.exampleModalCenter.show();
            //sessionStorage.removeItem('formdata');
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['/helpdeskmaster/department/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'Error');
          }
        }
      );
    }
  }

  getDepartmentById(id) {
    this.Service.getByIdDeptList(id).subscribe(responceData => {
      if(responceData.status=='s' && responceData.errorCode == 200){
        this.f.deptCode.setValue(responceData.data.departmentCode);
        this.f.department.setValue(responceData.data.department);
        this.f.status.setValue(responceData.data.status == 'true' ? true : false);
      }
    })
  }

}
