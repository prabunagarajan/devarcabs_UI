import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { MustMatch } from '@app/validators/must-match.validator';
import { apiUrls } from '@appEnv/apiurls';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  @ViewChild('t', { static: false }) tabset: NgbTabset;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  changePasswordForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  // @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  id: any;
  userName: any;
  userId:any;
  hide1 = false;
  hide2 =false ;
  public passwordTabSelected: boolean = false;
  public changePasswordMode: boolean = false;
  public showNextButton: boolean = true;
  obj: any='';
  submitbuttonenable: boolean=false;
  shiftConfigurationResponseDTO: any;
  configuration: void;
  workLocationResponseDTO: any;
  hide3 = false;
  notification: any;
  ticketStatusId: any;
  ticketId: any;
  pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  constructor(private formBuilder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private route:ActivatedRoute,
    private service:CommonApiServiceService,
    private authService: AuthService
) { }
role
  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.userId= this.authService.getUserId().toString();
    this.role=localStorage.getItem('RoleName')
    this.changepasswordForm();
    this.viewProfile();
    // this.getNotification();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    
  }

  tabChange(event) {
    this.passwordTabSelected = false;
    this.changePasswordMode = false;
    this.showNextButton = true;
    this.submitbuttonenable=false
   
    if (event.nextId === 'change-pwd-tab') {
      this.passwordTabSelected = true;
    }
    if (event.nextId === 'notification-tab') {
      this.getNotification();
      this.changePasswordForm.setErrors(null)
      this.submitbuttonenable=false
      this.showNextButton = false;
    }
  }
  // back(event){
  //   // event.nextId === 'profile-tab'
  //   this.router.navigate(['/helpdesk/view-profile',event.nextId === 'profile-tab'])
  // }
  changePassword() {
    this.changePasswordMode = true;
  }
  onTogglePass1(val) {
    this.hide1 = val;
  }
  onTogglePass2(val) {
    this.hide2 = val;
  }
  onTogglePass3(val) {
    this.hide3 = val;
  }
  viewProfile(){
    this.service.getAll(apiUrls.viewProfile + this.userId).subscribe(responceData => {
    this.obj=responceData.data
    this.shiftConfigurationResponseDTO=responceData.data.shiftConfigurationResponseDTO.startDate  +  " to    " +responceData.data.shiftConfigurationResponseDTO.endDate
    this.configuration=responceData.data.shiftConfigurationResponseDTO.shiftConfigResponseDTO.configuration,
    this.workLocationResponseDTO= this.obj.workLocationResponseDTO.departmentValue
    console.log(  this.shiftConfigurationResponseDTO);
    
    })
  }
  changepasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      userName: [''],
      password: ['', Validators.required],
      confirmPassword: ['',Validators.required,Validators.pattern(this.pattern)],
      currentPassword: ['',Validators.required,Validators.pattern(this.pattern)],
    },{
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f(){  
    return this.changePasswordForm.controls;
  }
  getNotification(){
  
    let req = {     
      "assignToId":this.userId,
      "flag":true  
    }
    this.service.post(apiUrls.flagList,req).subscribe(
      (resp:any) => {        
      this.notification = (resp.status === 's') ? resp.data ? resp.data : [] : [];
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
      
  }
  updateFlag(data){  
    let req = {     
      "id":data.id,
      "ticketStatusId":data.ticketStatusId,
      "flag":false  
    }
    this.service.post(apiUrls.flagUpdate,req).subscribe(
      (responseData) => {
        if (responseData.status == "s") {
          this.alert.showAlert('Ticket has been Viewed!!', 'success')
          this.getNotification();
        } else {
           this.getNotification();

        }
      })
  }
  enablesubmit(){
    this.submitbuttonenable=true
    // this.changePasswordForm.controls['confirmPassword'].enable
    // this.changePasswordForm.controls['password'].enable
  }
  submitChangePassword(form){
    this.formSubmitted = true;
    if(form.invalid){
      return
    }         
        const postData = {
            "confirmPassword": this.f.confirmPassword.value,
            "password": this.f.password.value,
            "userName": this.userName,
            "currentPassword": this.f.currentPassword.value,
          }
        
      this.service.post(apiUrls.changePassword,postData).subscribe(
        (responseData) => {
          if (responseData.status == "s") {
            //this.exampleModalCenter.show();
            this.alert.showSuccess(responseData.userDisplayMesg, '');
            //sessionStorage.removeItem('formdata');
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      )}
      backNo(){
        this.tabset.select('profile-tab');
      }
}
