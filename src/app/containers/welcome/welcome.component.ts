import { Component, OnInit } from '@angular/core';
import { AuthService, AlertService } from '@app/services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  username: string;
  
  constructor(private authSer: AuthService) { }

  ngOnInit() {

    const authUserName = this.authSer.getUserName();
    this.username = authUserName ? authUserName : 'Admin';
  }

}
