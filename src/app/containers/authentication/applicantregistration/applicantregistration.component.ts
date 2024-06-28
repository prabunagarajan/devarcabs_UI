import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AlertService, UserManagmentService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';


@Component({
  selector: 'app-applicantregistration',
  templateUrl: './applicantregistration.component.html',
  styleUrls: ['./applicantregistration.component.scss']
})
export class ApplicantregistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alert: AlertService,
    private userManageService: UserManagmentService, private service: CommonApiServiceService
  ) { }

  ngOnInit() {
    this.onLogin()
  }
  onLogin() {
    const { username, password } = {
      "password": "SystemUser@123",
      "username": "thirdpartyuser@gmail.com"
    }
    const user = { username: username, password };

    this.authService.login(user).subscribe((resp: any) => {
      const { userId: respUserId } = resp;
      if (resp != '' && respUserId != undefined && resp.roleCodes[0] != '') {
        localStorage.setItem('userName', resp.userName)
        localStorage.setItem('RoleName', resp.roleCodes[0])
        localStorage.setItem('userId', resp.userId)
        this.getUserMenu();
      }
    });
  }
  getUserMenu() {
    let resflag = false;
    let finalLandingUrl='/grievance/register-grievance/grievance-registerlogin'
    if (localStorage.getItem('userName') == 'third_party') {
      finalLandingUrl = '/grievance/register-grievance/grievance-registerlogin';
    }
    this.router.navigate([finalLandingUrl]);
    // this.userManageService.getMenuByUserId().subscribe(
    //   (resp: any) => {
    //     if (resp) {
    //       resflag = true;
    //       const { data, url } = resp;
    //       const length = Object.keys(data).length;
    //       if (length === 1) {
    //         // this.authService.setUserMenus(data);
    //       } else {
    //         // this.authService.setUserMenus(data);
    //       }
    //     }
    //     this.router.navigate([finalLandingUrl]);
    //   },
    //   (err: any) => {
    //   }
    // );
    // setTimeout(function () {
    //   if (resflag === false) {
    //     this.router.navigate([finalLandingUrl]);
    //   }
    // }, 500);

  }

}
