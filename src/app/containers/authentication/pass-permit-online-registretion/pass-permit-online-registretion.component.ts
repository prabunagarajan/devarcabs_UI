import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pass-permit-online-registretion',
  templateUrl: './pass-permit-online-registretion.component.html',
  styleUrls: ['./pass-permit-online-registretion.component.scss']
})
export class PassPermitOnlineRegistretionComponent implements OnInit {
  registrationTypeList: any;
  curDate = new Date();
  regObj: any = {};
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiservice: ApiService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.regObj.organizationType = '';
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
    // console.log(countryForm.valid);
    if (registrationForm.valid === false) {
      this.formSubmitted = true;
    } else {
    }
  }
  navigateLogin() {
    this.router.navigate(['auth/signin']);
  }

}
