import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registration-otp',
  templateUrl: './registration-otp.component.html',
  styleUrls: ['./registration-otp.component.scss']
})
export class RegistrationOtpComponent implements OnInit {


  regObj: any = {
 enterotp : '',
 renterotp : ''
  };
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private apiservice: ApiService, private datepipe: DatePipe) { }

  ngOnInit() {
  }
  submitOtp(registrationForm) {
    this.formSubmitted = false;
    if (registrationForm.valid === false) {
      this.formSubmitted = true;
    } else {
        const postParam = {
          enterotp: this.regObj.enterotp,
          renterotp: this.regObj.renterotp
        };



        this.apiservice.post('registration', postParam).then(responceData => {
          this.router.navigate(['auth/signin']);

        }).catch((err: any) => {
    
        });


    }
  }
  reSentOtp(registrationForm) {

  }

}
