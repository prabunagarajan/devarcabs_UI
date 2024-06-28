import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import {  UserManagementService } from '@app/services/helpdesk/user-management.service';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('activeModalClose', { static: false }) activeModalClose;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private alert: AlertService,
    private service: UserManagementService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.createFormGrp()
    var usermaildata = sessionStorage.getItem("user_mail");
    console.log(usermaildata);
    this.f.email.setValue(usermaildata)
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      email: [''],
      emailotp: ['',Validators.required],
    })
  }

  get f(){
    return this.createForm.controls;
  }

  addotp(form){
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

    let postdata={
      "emailId": this.f.email.value,
      "otp": this.f.emailotp.value,
    }
    this.service.userverifyotp(postdata).subscribe((resp: any) => {
      if(resp.status == 's'){
        const createObj= JSON.parse(sessionStorage.getItem('usercreatejson'));
        this.service.adduser(createObj).subscribe((resp: any) => {    
          if(resp.status == 's'){
            sessionStorage.setItem("usercreatejson", "");
            this.alert.showSuccess(resp.userDisplayMesg, '');
            this.router.navigate(['/helpdesk/user-management/list']);
          }else{
            this.alert.showError(resp.userDisplayMesg, 'Error');
          }
        })
        this.activeModalclose();
        sessionStorage.setItem("user-mail", "");
        this.exampleModalCenter.show();
        this.activeModal.close('')
        this.alert.showSuccess(resp.userDisplayMesg, '');
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
  
    });

  }
  }

  resend(){
    if ( this.f.email.value != '') {
      this.service.usergenerateotp(this.f.email.value).subscribe((resp: any) => {
        sessionStorage.setItem("user_mail", this.f.email.value);

        if (resp.status == 's' && resp.errorCode== 200) {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success')
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      })
    }

  }

  activeModalclose(){
    this.activeModal.close('')
  }



}
