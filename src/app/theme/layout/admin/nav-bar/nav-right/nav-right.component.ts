import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, AlertService } from '@app/services';
import { MessagingService } from '@appServices/messaging.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig, NgbCollapseModule]
})
export class NavRightComponent implements OnInit, OnDestroy {

  @ViewChild('loginOutPopup', { static: false }) loginOutPopup;
  pipe = new DatePipe('en-US');
  logInTime: string;
  dateTime: string;
  profileUrl: string;
  username: string;
  userId: string;
  notificationEarlierList: any;
  message;
  firbaseToken: string;
  topicKey = 'uId_';
  reqTokenSubscription;
  messageSubscription;
  newMsgCount = 0;
  header: boolean=false;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private authSer: AuthService,
    private alertSer: AlertService,
    private messagingService: MessagingService,private service:CommonApiServiceService
  ) {}

  async ngOnInit() {
    if (localStorage.getItem('userName') == 'third_party') {
    
      this.header = false;
    }
    else{
      this.header = true;
    }
    this.logInTime = this.authSer.getLogInTime();
    this.userId = this.authSer.getUserId();
    this.dateTime = this.pipe.transform(this.logInTime, 'd MMM y, h:mm a');
    this.profileUrl = this.authSer.getProfileUrl();
    const authUserName = this.authSer.getUserName();
    this.username = authUserName ? authUserName : 'Admin';

    this.reqTokenSubscription = this.messagingService.requestPermission().subscribe(
      async (token) => {
        return;
        if (token) {
          this.firbaseToken = token;
          // console.log('got-firbaseToken::', token);
          const registerResp: any = await this.messagingService.registerToken(this.firbaseToken, [this.topicKey + this.userId]);
          // console.log('registerResp::', registerResp);
          // const notificationResp: any = await this.messagingService.sendNotification(this.userId, 'Test Title', 'Test Body Data');
          // console.log('notificationResp::', notificationResp);
          this.subscribeForMessage();

          return true;
        } else {
          console.log('token not received');
        }
      },
      // (err) => console.error('Unable to get permission to notify.', err)
    );

    //this.findTop5Notification();
  }

  subscribeForMessage() {

    this.messagingService.receiveMessage();
    this.messageSubscription = this.messagingService.currentMessage.subscribe((res) => {
      if (res) {
        this.notificationEarlierList.unshift(res.notification);
        this.notificationEarlierList.pop();
        // const [ m1, m2, m3, m4, m5 ] = this.notificationEarlierList;
        // this.notificationEarlierList = [res.notification, m1, m2, m3, m4];
        this.newMsgCount++;
        this.alertSer.showSuccess(res.notification.body);
      }
    });
  }

  findTop5Notification() {
    this.messagingService.findTop5Notification(this.userId).subscribe(
      (res: any) => {
        const { responseCode: respCode, responseMessage: respMsg, content: respContent } = res;
        this.notificationEarlierList = (respCode === 200) ? respContent : [];
      }
    );
  }

  changeIsAllRead() {
    this.messagingService.updateIsReadNotification(this.userId).subscribe(
      (res: any) => (res) ? this.newMsgCount = 0 : console.error('updateIsReadNotification res::', res),
      // (err) => console.error('Unable to get permission to notify.', err)
    );
  }

  onLogoutClick() { this.loginOutPopup.show(); }
  onLogoutPopClose() { this.loginOutPopup.hide(); }

  async onLogout() {
    this.service.post(apiUrls.logoutapi ,'').subscribe(
      (res: any) => {
        if(res.status=='s'){
        // this.messagingService.subscription.unsubscribe();
        this.authSer.logout();
        this.loginOutPopup.hide();
        this.alertSer.showSuccess(res.userDisplayMesg)
        setTimeout(() => { this.router.navigate(['/']); }, 0);
        }else{
          this.alertSer.showError(res.userDisplayMesg)
        }
      }
    );

  }

  async ngOnDestroy() {
    this.reqTokenSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }

}
