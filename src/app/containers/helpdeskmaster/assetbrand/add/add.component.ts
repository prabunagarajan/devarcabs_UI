import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { AssetbrandService } from '@app/services/helpdesk/assetbrand.service';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  createForm: FormGroup;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  id: any;
  dtOptions: DataTables.Settings = {};
  dropdown: any;

  constructor(private formBuilder: FormBuilder,
    private service: AssetbrandService,
    private alert: AlertService,
    private router: Router,
    private route:ActivatedRoute,
    private Service: CommonApiServiceService


    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {                
        this.id = params.id;
        this.setData(this.id);
      }
    });
    this.createFormGrp();
    this.getassettyep();
      }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      // code: ['']
      assetType: ['', Validators.required],
      brand: ['', Validators.required],
      status: [true,Validators.required],
    });
    // this.getuniquecode();
  }
  get f(){
    return this.createForm.controls;
  }


  setData(id:any) {
    this.service.getByIdAssetBrand(id).subscribe((resp: any) => {
      this.f.assetType.setValue(resp.data.assetType),
      this.f.brand.setValue(resp.data.brand),
      this.f.status.setValue(resp.data.status);  
    })
  }

  getassettyep() {
    this.Service.getAll(apiUrls.getActiveAssettype).subscribe((resp: any) => {

      this.dropdown = resp.data;
    });
  }
  // getuniquecode(){
  //   this.service.getuniquecode().subscribe((resp: any) => {
  //    console.log(resp);
  //    if(resp.status=="s"){
  //    this.f.code.setValue(resp.data)
  //    }
      
  //   });
  // }

  addRegistration(form) {
    console.log(form)
    this.formSubmitted = true;
    if(form.invalid){
      return
    } 
      if(this.id == '' || this.id == undefined){
        console.log(this.id);
        
        const postData = {
          "brand": this.f.brand.value,
          "assetType": this.f.assetType.value,
          "status":  this.f.status.value,
        }      
        this.Service.post(apiUrls.addAssetBrand,postData).subscribe(
        (responseData) => {
          if (responseData.status == "s") {
            //this.exampleModalCenter.show();
            this.alert.showSuccess(responseData.userDisplayMesg, '');
            //sessionStorage.removeItem('formdata');
            this.router.navigate(['/helpdeskmaster/assetbrand/list']);
          } else {
            this.alert.showError('Unsuccess', 'Error');
          }
        }
      )}
      else {

        const postData = {
          "brand": this.f.brand.value,
          "assetType": this.f.assetType.value,
          "status":  this.f.status.value,
          "createdBy": Number(localStorage.getItem('USER_ID')),
          "id":  this.id,
        }
        this.service.updateAssetBrand(postData).subscribe(
          (responseData) => {
            if (responseData.status == "s") {
              //this.exampleModalCenter.show();
              this.alert.showSuccess(responseData.userDisplayMesg, '');
              //sessionStorage.removeItem('formdata');
              this.router.navigate(['/helpdeskmaster/assetbrand/list']);
              } else {
              this.alert.showError('Unsuccess', 'Error');
            }
          }
        )
      }
    }
  }

