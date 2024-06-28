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
  id: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  formSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute,
    private Service: CommonApiServiceService, private alert: AlertService,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      shiftWorkingDaysCode: ['', Validators.required],
      shiftWorkingDays: ['', Validators.required],
      active: [true, Validators.required]
    });
    this.getuniquecode()
  }

  get f(){
    return this.createForm.controls;
  }
  setData(id: any) {
    this.Service.getAll(apiUrls.getShiftWorkingById + id).subscribe(responceData => {
      console.log(responceData);
        this.f.shiftWorkingDaysCode.setValue(responceData.data.code),
        this.f.shiftWorkingDays.setValue(responceData.data.workingdays),
        this.f.active.setValue(responceData.data.status)
    })
  }
  getuniquecode() {
    this.Service.getAll(apiUrls.getShiftWorkingUniqueCode).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status == "s") {
        this.f.shiftWorkingDaysCode.setValue(resp.data)
      }

    });
  }
  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    }
    if (this.id == '' || this.id == undefined) {
      console.log(this.id);

      let postdata = {
        "code": this.f.shiftWorkingDaysCode.value,
        "workingdays": this.f.shiftWorkingDays.value,
        "status": this.f.active.value,
      }
      this.Service.post(apiUrls.addShiftWorkingDays, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shiftworkingdays/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }else{
      console.log(this.id);

      let postdata = {
        "code": this.f.shiftWorkingDaysCode.value,
        "workingdays": this.f.shiftWorkingDays.value,
        "status": this.f.active.value,
        "id": this.id,
      }
      console.log("postdata", postdata);

      this.Service.Put(apiUrls.updateShiftWorkingDays, postdata).subscribe((resp: any) => {

        if (resp.status == 's') {
          this.exampleModalCenter.show();
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shiftworkingdays/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }


      });
    }
  }
  licensefee(id) {
    if (this.f.shiftWorkingDays.value.charAt(0) === '0' || this.f.shiftWorkingDays.value.charAt(0) == 0) {
      this.f.shiftWorkingDays.setValue('')
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
