import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;
  basemasterURL = environment.MasterBaseUrl;
  baseURLL= environment.basemasterDataURLL;

  adduser(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.adduser;
    return this.http.post(url, postdata);
  }

  edituser(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.edituser;
    return this.http.put(url,postdata);
  }
  usergenerateotp(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.usergenerateotp+postdata;
    return this.http.post(url, postdata);
  }

  userverifyotp(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.userverifyotp;
    return this.http.post(url, postdata);
  }

  gethelpdeskuserbyid(id): Observable<any> {
    const url = this.baseURL + apiUrls.gethelpdeskuserbyid + id;
    return this.http.get(url);
  }


  getusermanagementlist(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.getusersearch;
    return this.http.post(url, postdata);
  }
  getuserloginhistory(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.userloginhistory;
    return this.http.post(url, postdata);
  }

  getuserbyrole(id): Observable<any> {
    const url = this.baseURL + apiUrls.getuserbyrole + id;
    return this.http.get(url);
  }

  getuserbyroleedit(id,userid): Observable<any> {
    const url = this.baseURL + apiUrls.getuserbyroleedit + id + apiUrls.getuserbyroleedituser+userid;
    return this.http.get(url);
  }

  getemploymentstatus(): Observable<any> {
    const url = this.baseURL + apiUrls.getemploymentstatus;
    return this.http.get(url);
  }

  getupdatereason(): Observable<any> {
    const url = this.baseURL + apiUrls.getupdatereason;
    return this.http.get(url);
  }

  getrolemaster(): Observable<any> {
    const url = this.baseURL + apiUrls.getrolemaster;
    return this.http.get(url);
  }

  getuseremployeeid(): Observable<any> {
    const url = this.baseURL + apiUrls.getuseremployeeid;
    return this.http.get(url);
  }

  getShiftConfiguration(): Observable<any> {
    const url = this.baseURL + apiUrls.getShiftConfiguration;
    return this.http.get(url);
  }

  getShiftWorkingDays(): Observable<any> {
    const url = this.baseURL + apiUrls.getShiftWorkingDays;
    return this.http.get(url);
  }

  getSalutation(): Observable<any> {
    // const url = this.baseURL + apiUrls.getAllActiveSalutations;
    // const url = this.basemasterURL + apiUrls.salutationsActive;
    // return this.http.get(url);
    const postdata = {"userName":"admin","password":"123456","type":"SALUTATION"}
    const url = this.baseURL + apiUrls.entitytypedropdown;
    return this.http.post(url, postdata);
  }

  getDesignation(): Observable<any> {
    // const url = this.baseURL + apiUrls.getActiveDesignations;
    // const url = this.basemasterURL + apiUrls.designationActive;
    // return this.http.get(url);
    const postdata = {"userName":"admin","password":"123456","type":"DESIGNATION"}
    const url = this.baseURL + apiUrls.entitytypedropdown;
    return this.http.post(url, postdata);
  }

  getAllEntityTypeName(): Observable<any>{
    // const url = this.baseURL + apiUrls.entityTypeList;
    // const url = this.basemasterURL + apiUrls.entitynameActive;
    // return this.http.get(url);
    const postdata = {"userName":"admin","password":"123456","type":"ENTITY_TYPE"}
    const url = this.baseURL + apiUrls.entitytypedropdown;
    return this.http.post(url, postdata);
  }

  getDistrict(): Observable<any>{
    // const url = this.baseURL +  apiUrls.getDistrictList;
    const url = this.baseURLL +  apiUrls.getuserdistrict + 9;
    return this.http.get(url);
  }

  getDepartment(): Observable<any> {
    // const url = this.baseURL + apiUrls.deptList;
    // const url = this.basemasterURL + apiUrls.departmentActive;
    // return this.http.get(url);
    const postdata = {"userName":"admin","password":"123456","type":"DEPARTMENT"}
    const url = this.baseURL + apiUrls.entitytypedropdown;
    return this.http.post(url, postdata);
  }







  // searchTicketStatus(postdata): Observable<any> {
  //   const url = this.baseURL + apiUrls.searchTicketStatus;
  //   return this.http.post(url, postdata);
  // }

  // getAllActiveTicketStatus(): Observable<any> {
  //   const url = this.baseURL + apiUrls.getAllActiveTicketStatus;
  //   return this.http.get(url);
  // }
}
