import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { UserManagementService } from '@app/services/helpdesk/user-management.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailVerificationComponent } from '@app/_shared/email-verification/email-verification.component';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';
import * as moment from 'moment';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { EntityTypeService } from '@app/services/helpdesk/entity-type.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  displayedColumnsAssignlist = [
    'position',
    'username',
    'employeeId',
    'emailId',

  ]
  dataSourceAssignList = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('multiSelect', { static: false }) multiSelect;
  createForm: FormGroup;
  createWorkLocationForm: FormGroup;
  createBackupUserForm: FormGroup;
  createShiftConfigurationForm: FormGroup;
  isHelpdeskUserActive = true;
  isShiftconfigurationActive = false;
  settings: { singleSelection: boolean; idField: string; textField: string; enableCheckAll: boolean; selectAllText: string; unSelectAllText: string; allowSearchFilter: boolean; limitSelection: number; clearSearchFilter: boolean; maxHeight: number; itemsShowLimit: number; searchPlaceholderText: string; noDataAvailablePlaceholderText: string; closeDropDownOnSelection: boolean; showSelectedItemsAtTop: boolean; defaultOpen: boolean; };
  ArrayItem: any = []
  selectedItems: any = [];
  selectedItemsDist: any = []
  finalSelectItem: any;
  multiSelectDropdonw: boolean;
  createObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  problem: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  employmentstatusdropdown: any;
  reasonforupdatedropdown: any;
  rolemasterdropdown: any;
  ShiftConfigurationdropdown: any;
  shiftworkingdaysdropdown: any;
  salutationdropdown: any;
  designationdropdown: any;
  entitytypenamedropdown: any;
  districtdropdown: any;
  departmentdropdown: any;
  userbyroledropdown: any;
  salutationval: any;
  editId: any;
  statedropdown: any;
  role: any = '';
  data: any = '';

  dropdownassignGroup: any;
  Assignto: any;
  GrievanceAssignformGroup: FormGroup;
  assignid: any;
  isUpdateRequest: any;
  GrievanceAssignFieldData: any;
  datadist: any = []


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private service: UserManagementService,
    private modalService: NgbModal,
    private Service: CommonApiServiceService


  ) { }
  districtDropDownSettings
  searchList = {
    firstname: '',
    salutation: ''
  }
  maxdate
  date = new Date()
  startdate = new Date();
  enddate = new Date();
  ngOnInit() {
    this.createFormGrp();
    this.maxdate = moment(this.date).format("yyyy-MM-DD"); 
    this.createFormGrp();
    this.getemploymentstatusdropdown();
    this.getreasonforupdatedropdown();
    this.getrolemasterdropdown();
    this.getuseremployeeid();
    this.getShiftConfiguration();
    this.getShiftWorkingDays();
    this.getSalutation();
    this.getDesignation();
    this.getAllEntityTypeName();
    this.getState();
    this.getDepartment();
    this.getassigngroup();
    this.getAssigned();
    this.GrievanceAssignformGroup = this.formBuilder.group({
      multiselect: [''],
      role: ['']
    });
    this.districtDropDownSettings = {
      singleSelection: false,
      idField: 'code',
      textField: 'value',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 8,
      searchPlaceholderText: 'Search',
      noDataAvailablePlaceholderText: 'No Record Found',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      } else {
      }
    });
  }

  setData(editId: any) {
    this.service.gethelpdeskuserbyid(editId).subscribe((resp: any) => {
      this.role = resp.data.roleName
      this.f.salutation.setValue(resp.data.salutationCode)
      this.f.dateofjoining.setValue(resp.data.dateOfJoining)
      this.f.email.setValue(resp.data.emailId)
      this.f.mobileno.setValue(resp.data.phoneNumber)
      this.f.employmentstatus.setValue((resp.data.employmentStatus).toUpperCase())
      this.f.designation.setValue(resp.data.designationCode)
      this.f.firstname.setValue(resp.data.firstName)
      this.f.middlename.setValue(resp.data.middleName)
      this.f.lastname.setValue(resp.data.lastName)
      this.f.lastname.setValue(resp.data.lastName)
      this.f.username.setValue(resp.data.username)
      this.f.employeeid.setValue(resp.data.employeeId)
      this.f.state.setValue(resp.data.workLocationResponseDTO[0].stateCode)
      this.getDistrict();

      this.f.role.setValue(resp.data.roleId)
      if (resp.data.roleName == 'Field Engineer') {
        this.multiSelectDropdonw = false
        this.f.district.setValue(resp.data.workLocationResponseDTO[0].districtCode)
      } else {
        this.multiSelectDropdonw = true
        let array = []

        if (resp.data.workLocationResponseDTO.length != undefined) {
          resp.data.workLocationResponseDTO.map(ele => {
            array.push({ code: ele.districtCode, value: ele.districtNames });
          })
          this.selectedItemsDist = array;
        }

      }
      this.f.startdate.setValue(resp.data.shiftConfigurationResponseDTO.startDate)
      this.f.enddate.setValue(resp.data.shiftConfigurationResponseDTO.endDate)
      this.f.shiftconfiguration.setValue(resp.data.shiftConfigurationResponseDTO.shiftConfigResponseDTO.id)
      this.f.shiftworkingdays.setValue(resp.data.shiftConfigurationResponseDTO.shiftWorkingDaysResponseDTO.id)
      this.f.department.setValue(resp.data.workLocationResponseDTO[0].departmentCode)
      this.f.entityname.setValue(resp.data.workLocationResponseDTO[0].entityTypeCode)
      this.f.reasonforupdate.setValue((resp.data.workLocationResponseDTO[0].updateReason).toUpperCase())
      this.f.backupuserrole.setValue(resp.data.backupUserResponseDTO.roleId)
      this.f.backupuserdesignation.setValue(resp.data.backupUserResponseDTO.designationCode)
      this.f.backupuser.setValue(resp.data.backupUserResponseDTO.backupUserId)
      this.f.backupuseremployeeid.setValue(resp.data.backupUserResponseDTO.employeeCode)
      this.f.deviceid.setValue(resp.data.deviceId)
      this.f.address.setValue(resp.data.address)
      this.getuserbyroleeditvalue(this.f.backupuserrole.value, editId)

    });
    // this.assignToofficer(editId)
  }

  setActiveShiftconfiguration(status) {
    if (status == 'Active') {
      this.isHelpdeskUserActive = true;
      this.isShiftconfigurationActive = false;
    } else {
      this.isShiftconfigurationActive = true;
      this.isHelpdeskUserActive = false;
    }
  }

  createFormGrp() {
    this.createForm = this.formBuilder.group({
      salutation: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      address: [''],
      dateofjoining: ['', Validators.required],
      // email: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$")]],
      employeeid: [''],
      employmentstatus: ['', Validators.required],
      role: ['', Validators.required],
      designation: ['', Validators.required],
      isdepartmentasset: [''],
      deviceid: [''],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      shiftconfiguration: ['', Validators.required],
      shiftworkingdays: ['', Validators.required],
      department: ['', Validators.required],
      // departmententity:[''],
      entityname: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      reasonforupdate: ['', Validators.required],
      backupuserrole: [''],
      backupuserdesignation: [''],
      backupuser: [''],
      backupuseremployeeid: [''],
    });
  }
  get MultiformGroup() {
    return this.GrievanceAssignformGroup.controls;
  }
  get f() {
    return this.createForm.controls;
  }


  getemploymentstatusdropdown() {
    this.service.getemploymentstatus().subscribe((responceData: any) => {
      this.employmentstatusdropdown = (responceData.status === 's') ? responceData.data : [];
    });
  }

  getreasonforupdatedropdown() {
    this.service.getupdatereason().subscribe((responceData: any) => {
      this.reasonforupdatedropdown = (responceData.status === 's') ? responceData.data : [];
    });
  }

  getrolemasterdropdown() {
    this.service.getrolemaster().subscribe((responceData: any) => {
      this.rolemasterdropdown = (responceData.status === 's') ? responceData.data : [];

    });
  }

  getuseremployeeid() {
    this.service.getuseremployeeid().subscribe((resp: any) => {
      if (resp.status == "s" && this.editId == undefined) {
        this.f.employeeid.setValue(resp.data)

      }

    });
  }
  Backupuser(event) {
    this.userbyroledropdown.map(el => {
      if (el.id == event.target.value) {
        this.f.backupuseremployeeid.setValue(el.employeeId)
      }
    })
  }
  getShiftConfiguration() {
    this.service.getShiftConfiguration().subscribe((resp: any) => {
      this.ShiftConfigurationdropdown = resp.data;
    });
  }

  getShiftWorkingDays() {
    this.service.getShiftWorkingDays().subscribe((resp: any) => {
      this.shiftworkingdaysdropdown = resp.data;

    });
  }

  getSalutation() {
    this.Service.getAll(apiUrls.getsalutation).subscribe((resp: any) => {
      if (resp.errorCode == 200) {
        this.salutationval = resp.data;
        this.salutationdropdown = resp.data;
      } else {
        this.salutationval = [];
        this.salutationdropdown = [];
      }

    });
  }

  getDesignation() {
    this.Service.getAll(apiUrls.getdesignation).subscribe((resp: any) => {
      // this.designationdropdown = resp.data.downDropDownMasterValueList;
      if (resp.errorCode == 200) {
        this.designationdropdown = resp.data;
      } else {
        this.designationdropdown = [];
      }
    });
  }

  getAllEntityTypeName() {
    this.Service.getAll(apiUrls.entityactivelist).subscribe((res: any) => {
      if (res.status == "s" && res.errorCode == 200) {
        this.entitytypenamedropdown = res.data;
      } else {
        this.entitytypenamedropdown = []
      }
    })
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

    this.selectedItemsDist = ''
    const postdata = { "userName": "admin", "password": "123456", "statecode": this.f.state.value }
    this.Service.post(apiUrls.getUserDistrict, postdata).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.districtdropdown = resp.content;
        this.datadist = resp.content
      } else {
        this.datadist = []
      }
    })
  }

  getDepartment() {
    this.Service.getAll(apiUrls.getdepartment).subscribe((resp: any) => {
      // this.designationdropdown = resp.data.downDropDownMasterValueList;
      if (resp.errorCode == 200) {
        this.departmentdropdown = resp.data;
      } else {
        this.departmentdropdown = [];
      }
    });

  }


  getuserbyrole(event) {
    if (this.editId == undefined) {
      this.service.getuserbyrole(this.f.backupuserrole.value).subscribe((resp: any) => {
        if (resp.status == 's' && resp.errorCode == 200) {
          this.userbyroledropdown = resp.data;
        }
      })
    }
  }

  getuserbyroleeditvalue(id1, id2) {
    if (this.editId != undefined) {
      this.service.getuserbyroleedit(id1, id2).subscribe((resp: any) => {
        if (resp.status == 's' && resp.errorCode == 200) {
          this.userbyroledropdown = resp.data;
        }
      })
    }
  }


  addRegistration(form) {
    this.formSubmitted = true;
    if (form.invalid) {
      return
    } else {
      let distARRAY = []
      if (this.editId == undefined) {
        if (!this.multiSelectDropdonw) {
          this.districtdropdown.map(data => {
            if (data.code == this.f.district.value) {
              let req = {
                "departmentCode": this.f.department.value,
                "stateCode": this.f.state.value,
                "districtCode": data.code,
                "entityTypeCode": this.f.entityname.value,
                "updateReason": this.f.reasonforupdate.value,
                "districtNames": data.value
              }
              distARRAY.push(req)
            }

          })
        } else if (this.multiSelectDropdonw) {
          for (let index = 0; index < this.selectedItemsDist.length; index++) {
            const element = this.selectedItemsDist[index];
            let req = {
              "departmentCode": this.f.department.value,
              "stateCode": this.f.state.value,
              "districtCode": element.code,
              "entityTypeCode": this.f.entityname.value,
              "updateReason": this.f.reasonforupdate.value,
              "districtNames": element.value
            }
            distARRAY.push(req)
          }
        }
        let postdata = {
          "dateOfJoining": this.f.dateofjoining.value,
          "designationCode": this.f.designation.value,
          "address": this.f.address.value,
          "deviceId": this.f.deviceid.value,
          "emailId": this.f.email.value,
          "employeeId": this.f.employeeid.value,
          "employmentStatus": this.f.employmentstatus.value,
          "firstName": this.f.firstname.value,
          "lastName": this.f.lastname.value,
          "middleName": this.f.middlename.value,
          "phoneNumber": this.f.mobileno.value,
          "roleId": parseInt(this.f.role.value),
          "salutationCode": this.f.salutation.value,
          "username": this.f.username.value,
          "workLocationRequestDTO": distARRAY
          ,
          "shiftConfigurationRequestDTO": {
            "endDate": this.f.enddate.value,
            "shifConfigId": parseInt(this.f.shiftconfiguration.value),
            "shifWorkingDaysId": parseInt(this.f.shiftworkingdays.value),
            "startDate": this.f.startdate.value
          }
          , "backupUserRequestDTO": {
            "backupUserId": parseInt(this.f.backupuser.value),
            "designationCode": this.f.backupuserdesignation.value,
            "employeeCode": this.f.backupuseremployeeid.value,
            "roleId": parseInt(this.f.backupuserrole.value)
          }
        }
        if (form.valid == true && this.f.email.value != '') {
          this.service.usergenerateotp(this.f.email.value).subscribe((resp: any) => {
            sessionStorage.setItem("user_mail", this.f.email.value);
            if (resp.status == 's' && resp.errorCode == 200) {
              this.alert.showSuccess(resp.userDisplayMesg, 'success');
              sessionStorage.setItem("usercreatejson", JSON.stringify(postdata));
              const modalRef = this.modalService.open(EmailVerificationComponent);
            }
            else if (resp.status == 's' && resp.errorCode == 205) {
              this.service.adduser(postdata).subscribe((resp: any) => {
                if (resp.status == 's') {
                  sessionStorage.setItem("usercreatejson", "");
                  // this.alert.showSuccess(resp.userDisplayMesg, '');
                  this.router.navigate(['/helpdesk/user-management/list']);
                } else {
                  this.alert.showError(resp.userDisplayMesg, 'Error');
                  this.alert.showAlert(resp.userDisplayMesg, 'error')
                }
              })
              sessionStorage.setItem("user-mail", "");

            }
            else {
              this.alert.showAlert(resp.userDisplayMesg, 'error')
              this.alert.showError(resp.userDisplayMesg, 'Error');
            }
          })
        }


      }
      else {
        let distARRAY = []
        if (!this.multiSelectDropdonw) {
          this.districtdropdown.map(data => {
            if (data.code == this.f.district.value) {
              let req = {
                "departmentCode": this.f.department.value,
                "stateCode": this.f.state.value,
                "districtCode": data.code,
                "entityTypeCode": this.f.entityname.value,
                "updateReason": this.f.reasonforupdate.value,
                "districtNames": data.value
              }
              distARRAY.push(req)
            }

          })
        } else if (this.multiSelectDropdonw) {
          for (let index = 0; index < this.selectedItemsDist.length; index++) {
            const element = this.selectedItemsDist[index];
            let req = {
              "departmentCode": this.f.department.value,
              "stateCode": this.f.state.value,
              "districtCode": element.code,
              "entityTypeCode": this.f.entityname.value,
              "updateReason": this.f.reasonforupdate.value,
              "districtNames": element.value
            }
            distARRAY.push(req)
          }
        }
        let postdata = {
          "dateOfJoining": this.f.dateofjoining.value,
          "designationCode": this.f.designation.value,
          "emailid": this.f.email.value,
          "employeeId": this.f.employeeid.value,
          "address": this.f.address.value,
          "deviceId": this.f.deviceid.value,
          "employmentStatus": this.f.employmentstatus.value,
          "firstName": this.f.firstname.value,
          "lastName": this.f.lastname.value,
          "middleName": this.f.middlename.value,
          "phoneNumber": this.f.mobileno.value,
          "roleId": parseInt(this.f.role.value),
          "salutationCode": this.f.salutation.value,
          "username": this.f.username.value,

          "id": parseInt(this.editId),
          "workLocationRequestDTO": distARRAY
          ,
          "shiftConfigurationRequestDTO": {
            "endDate": this.f.enddate.value,
            "shifConfigId": parseInt(this.f.shiftconfiguration.value),
            "shifWorkingDaysId": parseInt(this.f.shiftworkingdays.value),
            "startDate": this.f.startdate.value
          }
          , "backupUserRequestDTO": {
            "backupUserId": parseInt(this.f.backupuser.value),
            "designationCode": this.f.backupuserdesignation.value,
            "employeeCode": this.f.backupuseremployeeid.value,
            "roleId": parseInt(this.f.backupuserrole.value)
          }
        }
        this.service.edituser(postdata).subscribe((resp: any) => {
          if (resp.status == 's') {
            // const modalRef = this.modalService.open(EmailVerificationComponent);
            // sessionStorage.setItem("user_mail", this.f.email.value);
            this.exampleModalCenter.show();
            this.alert.showSuccess(resp.userDisplayMesg, '');
            this.router.navigate(['/helpdesk/user-management/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'Error');
          }
        });
      }
    }
  }
  getAssigned() {
    this.Service.getAll(apiUrls.handlingofficer + '?userId=' + this.editId).subscribe(
      resp => {
        if (resp.status == 's') {
          this.GrievanceAssignFieldData = resp.data
          this.dataSourceAssignList = new MatTableDataSource(this.GrievanceAssignFieldData)
          this.dataSourceAssignList.paginator = this.paginator
          this.isUpdateRequest = 'true'
        } else {
          this.dataSourceAssignList = new MatTableDataSource()
          this.isUpdateRequest = 'false'
        }

      })

  }
  getassigngroup() {
    this.service.getrolemaster().subscribe((responceData: any) => {
      this.Assignto = (responceData.status === 's') ? responceData.data : [];
      this.Assignto.forEach(ele => {
        if (ele.roleCode == "ASSIGN_TO_OFFICER") {
          this.GrievanceAssignformGroup.controls['role'].setValue(ele.id)
          this.assignid = ele.id
          console.log("  this.assignid", this.assignid);
          this.assignToofficer(this.assignid)
        }
      })
    });

  }
  assignToofficer(id) {
    let ID = this.assignid
    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'username',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 8,
      searchPlaceholderText: 'Search',
      noDataAvailablePlaceholderText: 'No Record Found',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.Service.getAll(apiUrls.assignto + "?roleId=" + id).subscribe(
      resp => {
        if (resp.status == 's') {
          this.data = resp.data
        } else {
          this.data = ''
        }

      })
  }
  addAssignTO() {
    let finalSelectItem = new Set(this.finalSelectItem);
    this.finalSelectItem = Array.from(finalSelectItem)
    let post = {
      "assignToOfficerIds": this.finalSelectItem,
      "handlingOfficerIds": [this.editId],
      "isUpdateRequest": this.isUpdateRequest
    }
    if (this.selectedItems != '') {
      this.Service.Put(apiUrls.AssignToOfficer, post).subscribe(
        resp => {
          if (resp.status == 's') {
            this.alert.showSuccess(resp.userDisplayMesg)
            this.router.navigate(["/helpdesk/user-management/list"])
          } else {
            this.alert.showError(resp.userDisplayMesg)
          }
        })
    } else {
      this.alert.showAlert("Please Select Grievance Assign To ", 'error')
    }
  }
  public onItemSelect(item: any) {
    this.selectedItems.forEach(element => {
      this.ArrayItem.push(element.id)
    });

    this.finalSelectItem = this.ArrayItem
  }
  public onDeSelect(item: any) {
    this.selectedItems.forEach(element => {
      this.ArrayItem.push(element.id)
    });
    this.finalSelectItem = this.ArrayItem

  }
  public onSelectAll(items: any) {
    this.selectedItems.forEach(element => {
      this.ArrayItem.push(element.id)
    });
    this.finalSelectItem = this.ArrayItem
  }
  public onDeSelectAll(items: any) {
    this.selectedItems.forEach(element => {
      this.ArrayItem.push(element.id)
    });

    this.finalSelectItem = this.ArrayItem
  }
  ResetPassword() {
    let req = {
      "userId": this.editId
    }
    this.Service.post(apiUrls.USERresetPassword, req).subscribe(data => {
      if (data.errorCode == '200') {
        this.alert.showSuccess(data.userDisplayMesg)
      } else {
        this.alert.showError(data.userDisplayMesg)
      }

    })

  }
  rolechange() {
    this.selectedItemsDist = ''
    this.f.district.setValue('')
    this.rolemasterdropdown.map(ele => {
      if (ele.id == this.f.role.value) {
        if (ele.roleCode == 'FIELD_ENGINEER') {
          this.multiSelectDropdonw = false
        } else {
          this.multiSelectDropdonw = true
        }
      }
    })
  }

  public onItemSelectdist(item: any) {
  }
  public onDeSelectdist(item: any) {
  }
  public onSelectAlldist(items: any) {
    this.selectedItemsDist = items
  }
  public onDeSelectAlldist(items: any) {
  }
}
