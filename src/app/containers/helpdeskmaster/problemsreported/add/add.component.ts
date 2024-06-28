import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';
import { PriorityService } from '@app/services/helpdesk/priority.service';
import { ProbelmReportedService } from '@app/services/helpdesk/probelmreported.service';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  state: any;
  districts: any;
  taluk:any;
  formSubmitted = false;
  sub:any;
  cat:any;
  priority1:any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  id: any;

  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private subcategory:SubcategoryService,
    private Service:ActualProbelmService,
    private route:ActivatedRoute,
    private priority:PriorityService,
    private problemreported:ProbelmReportedService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {                
          this.id = params.id;
          this.setData(this.id);
        }
      });
      this.createFormGrp();
      //this.getsub();
      this.getcat();
      this.getpriority()
    }
  
    createFormGrp() {
      this.createForm = this.formBuilder.group({
        code: ['', Validators.required],
        problem: ['', Validators.required],
        ticketsubcategoryid: ['', Validators.required],
        categoryid: ['', Validators.required],
        status: ['', Validators.required]
      });
      this.getuniquecode();
    }

    get f(){
      return this.createForm.controls;
    }
  
    setData(id:any) {
      this.problemreported.getByIdProbelmReportedList(id).subscribe((resp: any) => {
        this.f.code.setValue(resp.data.prCode),
        this.f.problem.setValue(resp.data.problem),
        this.f.categoryid.setValue(resp.data.categoryId),
        this.getsub();
        this.f.status.setValue(resp.data.active),
        this.f.ticketsubcategoryid.setValue(resp.data.subCategoryId);

      })
    }
    addRegistration(form) {
      console.log(form)
      this.formSubmitted = true;
      if(form.invalid){
        return
      }       
       if(this.id == '' || this.id == undefined){
        const postData = {
          "problem": this.createForm.value.problem,
          "active": this.createForm.value.status,
          "category_id": parseInt(this.createForm.value.categoryid),
          "ticketsubcategoryid": parseInt(this.createForm.value.ticketsubcategoryid),
          "prCode": this.createForm.value.code,
  
        }
        // const postData = this.createForm.value;
        console.log(postData);
  
  
        this.problemreported.addproblemreported(postData).subscribe(
          (responceData) => {
            if (responceData.status=="s" ) {
              this.exampleModalCenter.show();
              sessionStorage.removeItem('formdata');
              this.alert.showSuccess(responceData.userDisplayMesg, '');
              this.router.navigate(['/helpdeskmaster/reported/list']);
            } else {
              this.alert.showError('Unsuccess', 'Error');
            }
          }
        );
      } else {
        const postData = {
          "problem": this.createForm.value.problem,
          "active": this.createForm.value.status,
          "category_id": parseInt(this.createForm.value.categoryid),
          "ticketsubcategoryid": parseInt(this.createForm.value.ticketsubcategoryid),
          "prCode": this.createForm.value.code,
          "id": this.id
  
        }
        // const postData = this.createForm.value;
        console.log(postData);
  
  
        this.problemreported.editproblemreported(postData).subscribe(
          (responceData) => {
            if (responceData.status=="s" ) {
              this.exampleModalCenter.show();
              sessionStorage.removeItem('formdata');
              this.alert.showSuccess(responceData.userDisplayMesg, '');
              this.router.navigate(['/helpdeskmaster/reported/list']);
            } else {
              this.alert.showError('Unsuccess', 'Error');
            }
          }
        );
      }
    } 
    getuniquecode(){
      this.problemreported.getUniqueCode().subscribe((resp: any) => {
       console.log(resp);
       if(resp.status=="s"){
       this.f.code.setValue(resp.data)
       }
        
      });
    }

    getsub() {
      this.problemreported.subCategoryList(this.f.categoryid.value).subscribe((responceData: any) => {
        this.sub = (responceData.status === 's') ? responceData.data : [];
      });
    }

    getcat() {
      this.problemreported.categoryList().subscribe((responceData: any) => {
        this.cat = (responceData.status === 's') ? responceData.data : [];
      });
    }
    
    getpriority() {
      this.priority.getAllpriority().subscribe((responceData: any) => {
        this.priority1 = (responceData.status === 's') ? responceData.data : [];
      });
    }

    clearform() {
      this.createForm.reset();
    }
  }
  