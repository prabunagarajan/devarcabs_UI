import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.scss']
})
export class AuthRegistrationComponent implements OnInit {
  registrationTypeList: any;
  curDate = new Date();
  regObj: any = {
  registrationtype : '',
  applicantname : '',
  fathersname : '',
  dob : '',
  email : '',
  mobile : '',
  pan: '',
  aadhar: '',
  address: '',
  status : true
  };
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private apiservice: ApiService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getRegistrationType();
  }

  getRegistrationType() {


    this.apiservice.get('registrationtypelist').then(responceData => {
      this.registrationTypeList = responceData;
    }).catch((err: any) => {
    });

}
addregistration(registrationForm) {
  this.formSubmitted = false;
  if (registrationForm.valid === false) {
    this.formSubmitted = true;
  } else {
    // console.log(this.countryObject);

      // console.log(this.countryObject);
      const postParam = {
        applicantname: this.regObj.applicantname,
        fathersname: this.regObj.fathersname,
        dob: this.regObj.dob,
        email: this.regObj.email,
        mobile : this.regObj.mobile,
        registrationtype : this.regObj.registrationtype,
        pan : this.regObj.pan,
        aadhar : this.regObj.aadhar,
        address: this.regObj.address,
        created_by: 'Admin',
        created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        modified_by: 'Admin',
        modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        status: this.regObj.status
      };

      this.apiservice.post('registration', postParam).then(responceData => {
        this.router.navigate(['auth/registration/registrationotp']);
  
      }).catch((err: any) => {
     
      });


  }
}
navigateLogin() {
  this.router.navigate(['auth/signin']);
}

}
