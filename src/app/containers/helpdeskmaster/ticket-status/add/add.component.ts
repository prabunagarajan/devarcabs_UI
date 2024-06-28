import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import {  TicketStatusService } from '@app/services/helpdesk/ticket-status.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  problem: any;
  editId: any='';

  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private alert: AlertService,
    private service: TicketStatusService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.createFormGrp();
    if (this.createObj) {
      this.setData(this.editId);
    }

    this.getuniuecode();

  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      ticketstatusCode: [''],
      ticketstatusname: ['',Validators.required],
      status: [''],
    });
    
  }

  get f(){
    return this.createForm.controls;
  }

  setData(editId: any) {
    this.service.getTicketStatusById(editId).subscribe((resp: any) => {
      let responseStatus = resp.data.status == "1" ? true : false ;
      this.f.ticketstatusCode.setValue(resp.data.ticketstatusCode),
      this.f.ticketstatusname.setValue(resp.data.ticketstatusname),
      this.f.status.setValue(resp.data.status);
    });
  }


  getuniuecode(){
    this.service.getTicketStatusCode().subscribe((resp: any) => {
     if(resp.status=="s"){
     this.f.ticketstatusCode.setValue(resp.data)
     }
      
    });
  }


  addRegistration(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
   if(this.editId== ''){
    // let statusadd = this.f.status.value == true ? "1" : "0";
    let postdata={
      "ticketstatusCode": this.f.ticketstatusCode.value,
      "ticketstatusname":  this.f.ticketstatusname.value,
      "status":   this.f.status.value,
    
    }
    this.service.addTicketStatus(postdata).subscribe((resp: any) => {
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/ticket-status/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });
  }
  else{
    let statusupdate = this.f.status.value == true ?'1':'0'
    let postdata={
      "ticketstatusCode": this.f.ticketstatusCode.value,
      "ticketstatusname":  this.f.ticketstatusname.value,
      "status":   this.f.status.value,
      "id":  this.editId,
    
    }
    this.service.editTicketStatus(postdata).subscribe((resp: any) => {
     
      if(resp.status == 's'){
        this.exampleModalCenter.show();
        this.alert.showSuccess(resp.userDisplayMesg, '');
         this.router.navigate(['/helpdeskmaster/ticket-status/list']);
      }else{
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
      
   
    });


  }

  }

  }

}
