import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, ActionTakenService, AuthService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  createForm: any;
  statedropdown: any;
  districtdropdown: any;
  formSubmitted: boolean;
  formSubmittedMap: boolean
  editId: any = '';
  Fielddropdown: any;
  FielddropdownMap: any;
  mapMethod: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private authService: AuthService,
    private Service: CommonApiServiceService) { }
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,4}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  createObj: any = {
    shopCode: ''
  }
  addMethod: any
  MapForm
  cardName: any = 'Add Shop Code Details'
  ngOnInit() {
    this.getFieldList()
    this.createFormGrp();
    this.getState();

    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
  }
  getFieldList() {
    this.Service.getAll(apiUrls.FieldEngglist).subscribe((resp: any) => {
      if (resp.errorCode == 200) {
        this.Fielddropdown = resp.data;
      } else {
        this.Fielddropdown = []
      }
    })
  }
  ChooseMethod(id) {
    this.formSubmittedMap = false
    this.formSubmitted = false
    if (this.createObj['shopCode'] == 'Add') {
      this.addMethod = true
      this.mapMethod = false
    } else {
      this.mapMethod = true
      this.addMethod = false
    }
  }
  SelectedFe() {
    this.Service.getAll(apiUrls.FieldEngglist).subscribe((resp: any) => {
      if (resp.errorCode == 200) {
        this.FielddropdownMap = resp.data;
        for (let index = 0; index < this.FielddropdownMap.length; index++) {
          const element = this.FielddropdownMap[index];
          if (element.username == this.fm.CurrentFE.value) {
            let index = this.FielddropdownMap.indexOf(element);
            this.FielddropdownMap.splice(index, 1);
          }
        }
      } else {
        this.FielddropdownMap = []
      }
    })
  }
  setData(editId) {
    if (editId != '' && editId != undefined) {
      this.addMethod = true
      this.cardName = 'Update Shop Code Details'
      this.mapMethod = false
      this.Service.getAll(apiUrls.shopcodemasterGetBY + editId).subscribe((resp: any) => {
        this.f.division.setValue(resp.data.division)
        this.f.shopCode.setValue(resp.data.shopCode)
   
        this.f.state.setValue(resp.data.stateCode)
        this.getDistrict()
        this.f.district.setValue(resp.data.districtCode)
        this.f.Employee.setValue(resp.data.userId)
   
      });
    }
  }
  createFormGrp() {
    this.createForm = this.formBuilder.group({
      division: ['', Validators.required],
      shopCode: [''],
      district: ['', Validators.required],
      state: ['', Validators.required],
      Employee: ['', Validators.required]
    });
    this.MapForm = this.formBuilder.group({
      CurrentFE: ['', Validators.required],
      MappingFE: ['', Validators.required],
    });
  }
  get f() {
    return this.createForm.controls
  }
  get fm() {
    return this.MapForm.controls
  }
  getState() {
    const postdata = { "userName": "admin", "password": "123456", "countrycode": "IN" }
    this.Service.post(apiUrls.getUserState, postdata).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.statedropdown = resp.content;
      }
    })
  }
  getDistrict() {
    const postdata = { "userName": "admin", "password": "123456", "statecode": this.f.state.value }
    this.Service.post(apiUrls.getUserDistrict, postdata).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.districtdropdown = resp.content;
      } else {
        this.districtdropdown = []
      }
    })
  }
  keyPress(event: any) {
    let value = event.target.value;
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = value;
    const position = event.target.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
  addRegistration(createForm) {
    this.formSubmitted = true
    if (createForm.invalid) {
      return
    }
    let distName = ''
    let employeeId=''
    this.Fielddropdown.map(ele => {
      if (ele.username == this.f.Employee.value) {
        employeeId = ele.employeeId
      }
    })
    this.districtdropdown.map(ele => {
      if (ele.code == this.f.district.value) {
        distName = ele.value
      }
    })
    if (this.editId == '' || this.editId == undefined) {

      let postdata = {
        "division": this.f.division.value,
        "shopCode": (this.f.shopCode.value),
        "districtCode":Number(this.f.district.value),
        "userId": this.f.Employee.value,
        "districtName": distName,
        "stateCode": this.f.state.value,
        "employeeId":employeeId
      }
      let reqARRAY = []
      reqARRAY.push(postdata)
      this.Service.post(apiUrls.shopcodemasteradd, reqARRAY).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shop-code-map/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    } else { 

      let postdata = {
        "division": this.f.division.value,
        "id": this.editId,
        "shopCode": (this.f.shopCode.value),
        "districtCode": Number(this.f.district.value),
        "userId": this.f.Employee.value,
        "districtName": distName,
        "stateCode": this.f.state.value,
        "employeeId":employeeId
      }
      let reqARRAY = []
      reqARRAY.push(postdata)
      this.Service.Put(apiUrls.shopcodemasterupdate, reqARRAY).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shop-code-map/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }
  }
  MapRegistration(MapForm) {
    this.formSubmittedMap = true
    if (MapForm.invalid) {
      return
    } else {
      if(this.fm.CurrentFE.value !=this.fm.MappingFE.value){
      let postdata = {
        "currentfieldId": this.fm.CurrentFE.value,
        "mappingId": this.fm.MappingFE.value
      }
      this.Service.post(apiUrls.shopcodemappingupdate, postdata).subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, '');
          this.router.navigate(['helpdeskmaster/shop-code-map/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'Error');
        }
      });
    }else{
      this.alert.showError('Current Field Engineer and Mapping To  should not be same')
    }
    }
  }
}
