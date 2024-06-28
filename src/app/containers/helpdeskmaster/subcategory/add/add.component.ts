import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertService, SubcategoryService } from '@app/services';

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
  taluk: any;
  formSubmitted = false;
  sub: any;
  cat: any;
  editId: any='';
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private alert: AlertService,
    private subcategory: SubcategoryService
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
    // this.getsub();
    this.getcat();
    this.getuniuecode();
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      categoryid: ['', Validators.required],
      code: ['', Validators.required],
      subcategoryName: ['', Validators.required],
      active: ['', Validators.required]
    });
  }
  get f(){
    return this.createForm.controls;
  }

  setData(editId: any) {
    // this.createForm.patchValue(this.createObj);
    this.subcategory.getByIdSubcategoryList(editId).subscribe((resp: any) => {
      console.log(resp)
      this.f.code.setValue(resp.data.code),
      this.f.categoryid.setValue(resp.data.categoryid),
      this.f.subcategoryName.setValue(resp.data.subcategoryName),
      this.f.active.setValue(resp.data.active);
       });
  }

  getuniuecode(){
    this.subcategory.getSubcategoryCode().subscribe((resp: any) => {
     console.log(resp);
     if(resp.status=="s"){
     this.f.code.setValue(resp.data)
     }
      
    });
  }


  addRegistration(form) {
    console.log(form)
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      // const postData = this.createForm.value;
      // console.log(postData);
      if(    this.editId  ==''){
      let postdata={
        "active": JSON.parse(this.f.active.value),
        "categoryid":  parseInt(this.f.categoryid.value),
        "code": this.f.code.value,
        "subcategoryName":  this.f.subcategoryName.value
      
      }
      
      console.log(postdata)
      
      this.subcategory.addsubcategory(postdata).subscribe(
        (responceData) => {
          if (responceData.status == "s") {
            this.exampleModalCenter.show();
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/helpdeskmaster/subcategory/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      );
      }else{
        let postdata={
          "active": JSON.parse(this.f.active.value),
          "categoryid":  parseInt(this.f.categoryid.value),
          "code": this.f.code.value,
          "subcategoryName":  this.f.subcategoryName.value,
          "id":  this.editId,
        }
        this.subcategory.editsubcategory(postdata).subscribe(
          (responceData) => {
            if (responceData.status == "s") {
              this.exampleModalCenter.show();
              this.alert.showSuccess(responceData.userDisplayMesg, '');
              sessionStorage.removeItem('formdata');
              this.router.navigate(['/helpdeskmaster/subcategory/list']);
            } else {
              this.alert.showError('Unsuccess', 'Error');
            }
          }
        );
      }

    }
  }
  // getsub($event) {
  //   console.log($event.target.value)
  //   this.subcategory.getByIdcategory($event.target.value).subscribe((responceData: any) => {
  //     console.log(responceData);

  //     this.sub = (responceData.status === 's') ? responceData.data : [];
  //   });
  // }
  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);

      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }

  clearform() {
    this.createForm.reset();
  }
}
