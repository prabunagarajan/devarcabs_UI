import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class GrievanceRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;
  docUploadBaseURL = environment.documentIPUrl;

  getAllGrievanceRegList(): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceRegList;
    return this.http.get(url);
  }

  getGrievanceRegCode(): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceCode;
    return this.http.get(url);
  }

  getGrievanceRegById(id): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceRegGetById + id;
    return this.http.get(url);
  }

  updateGrievanceReg(req): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceUpdate;
    return this.http.put(url,req);
  }

  addGrievanceReg(req): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceRegAdd;
    return this.http.post(url,req);
  }

  searchGrievanceRegList(req): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceRegSearch;
    return this.http.post(url,req);
  }

  getGrievanceRegcount(payload): Observable<any>{
    const url = this.baseURL + apiUrls.grievanceRegCount;
    return this.http.post(url,payload);
  }

  getRegListByUser(payload): Observable<any>{
    const url = this.baseURL + apiUrls.regListByUser;
    return this.http.post(url,payload);
  }

  getGrievanceCategory(): Observable<any>{
    const url = this.baseURL + apiUrls.getAllGrievanceCategory;
    return this.http.get(url);
  }

  getGrievanceActiveCategory(): Observable<any>{
    const url = this.baseURL + apiUrls.getAllActiveGrievanceCategory;
    return this.http.get(url);
  }

  getActiveIssueDetails(payload): Observable<any>{
    const url = this.baseURL + apiUrls.issueDetails;
    return this.http.post(url,payload);
  }

  getActiveIssueFrom(): Observable<any>{
    const url = this.baseURL + apiUrls.regIssueFrom;
    return this.http.get(url);
  }

  getActiveStatus(): Observable<any>{
    const url = this.baseURL + apiUrls.getStatusDropDownForReg;
    return this.http.get(url);
  }

  getRefTicketNo(): Observable<any>{
    const url = this.baseURL + apiUrls.getRefTicketNo;
    return this.http.get(url);
  }

  uploadDocuments(payload): Observable<any> {
    let headers = new HttpHeaders()
    .set("Accept","application/json")
    .set('Content-Type','multipart/form-data');
    const url = this.docUploadBaseURL + apiUrls.uploadDocuments;
    return this.http.post(url, payload,{ headers: headers });
  }

}
