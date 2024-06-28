import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {

  constructor(
    private http: HttpClient
  ) { }
  baseURL = environment.helpdeskURL;
  userManagerUrl = environment.userManagerUrl;
  baseurll = environment.baseURLL;
  // designation api's
  getAll(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllDesignation;
    return this.http.get(url);
  }

  getAllDesignation(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllDesignation;
    return this.http.post(url, postParam);
  }

  saveUpdateDesignation(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.saveUpdateDesignation;
    return this.http.post(url, postParam);
  }

  getdesignationById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getByDesignationId + '?id=' + id;
    return this.http.get(url);
  }

  getDesignationByEntityTypeId(id): Observable<any> {
    const url = this.baseURL + apiUrls.getDesignationByEntyTypeId + '?entityTypeId=' + id;
    return this.http.get(url);
  }
  getDesignation(): Observable<any> {
    const url = this.baseURL + apiUrls.getDesignations;
    return this.http.post(url, {
      page: 0,
      pageSize: 10
    });
  }

  getAllActiveDesignation(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActiveDesignation;
    return this.http.post(url, postParam);
  }

  validateDesignationCode(key): Observable<any> {
    const url = this.baseURL + apiUrls.validateDesignationCode + '?designationCode=' + key;
    return this.http.get(url);
  }

  getRoleMenuListData() {
    const url = this.baseURL + apiUrls.getRoleMenuList;
    // const url = 'https://devapigateway.upexciseonline.co/user-managment/v1.0.0/' + apiUrls.getRoleMenuList;
    return this.http.get(url);
  }

  // entityMaster api's
  getAllEntities() {
    const url = this.baseURL + apiUrls.getAllEntitys;
    return this.http.get(url);
  }

  getEntityByTypeId(id): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityByTypeId + '?entityTypeId=' + id;
    return this.http.get(url);
  }

  // entityType api's
  getActiveEntities(): Observable<any> {
    // const url = this.baseURL + apiUrls.getAllEntitys;
    const url = this.baseURL + apiUrls.getallentity;
    return this.http.post(url, {
      page: 0,
      pageSize: 10
    });
  }

  getAllEntityType(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllEntityType;
    return this.http.post(url, postParam);
  }

  getActiveEntityType(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getActiveEntityType;
    return this.http.post(url, postParam);
  }
  
  getLicensesByEntity(entityId): Observable<any> {
    const url = this.baseURL + apiUrls.getLicensesByEntity + '?entityId=' + entityId;
    return this.http.get(url);
  }

  getEntitybytypeid(id): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityByTypeId + '?entityTypeId=' + id;
    return this.http.get(url);
  }

  getworkflowbyentityid(id): Observable<any> {
    const url = this.baseURL + apiUrls.getworkflowbyentityid + '?entityId=' + id;
    return this.http.get(url);
  }

  // roleMaster api's
  getAllRole(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllRoles;
    return this.http.post(url, postParam);
  }

  addRoleMaster(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.addRole;
    return this.http.post(url, postParam);
  }

  getRoleById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getroleById + '?id=' + id;
    return this.http.get(url);
  }

  updateRoleMaster(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.updateRole;
    return this.http.post(url, postParam);
  }

  validateRoleCode(value): Observable<any> {
    const url = this.baseURL + apiUrls.validateRoleCode + '?roleCode=' + value;
    return this.http.get(url);
  }

  getMenuByUserId() {
    const url = this.baseURL + apiUrls.getMenuByUserId;
    return this.http.get(url);
  }

  getMenuForCustomer() {
    const url = this.userManagerUrl + apiUrls.getMenuForCustomer;
    return this.http.get(url);
  }

  // user api's
  getAllUsers(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllUsers;
    return this.http.post(url, postParam);
  }

  saveUpdateUser(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.saveUpdateUser;
    return this.http.post(url, postParam);
  }

  getUserById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getUserById + '?id=' + id;
    return this.http.get(url);
  }

  getAllRoleMaster(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllRoles;
    return this.http.get(url);
  }

  getAllActiveRoles(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActiveRoles;
    return this.http.post(url, postParam);
  }
  getRoleByuser(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getRoleByuser + '?userTypeCode=' + postParam;
    return this.http.get(url);
  }
  getDesignationByuser(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.getdesignationbyuser + '?userType=' + postParam;
    return this.http.get(url);
  }
  getUserByRole(roleCode): Observable<any> {
    const url = this.baseURL + apiUrls.getUserByRole + '?roleCode=' + roleCode;
    return this.http.get(url);
  }

  updateUser(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.updateUser;
    return this.http.post(url, postParam);
  }

  checkUserName(name): Observable<any> {
    const url = this.baseURL + apiUrls.checkUserName + '?userName=' + name;
    return this.http.get(url);
  }

  checkEmail(name): Observable<any> {
    const url = this.baseURL + apiUrls.checkEmail + '?emailId=' + name;
    return this.http.get(url);
  }

  checkMobileNumber(name): Observable<any> {
    const url = this.baseURL + apiUrls.checkMobileNumber + '?mobileNumber=' + name;
    return this.http.get(url);
  }
  getDistrictsByState() {
    const url = this.baseurll + apiUrls.getDistrictBYState;
    return this.http.get(url);
}
}
