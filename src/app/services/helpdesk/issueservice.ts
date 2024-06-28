import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;




  getallissues(): Observable<any> {
    const url = this.baseURL + apiUrls.getallissues;
    return this.http.get(url);
  }

  getallissuesbyid(id): Observable<any> {
    const url = this.baseURL + apiUrls.getallissuesbyid + id;
    return this.http.get(url);
  }
  //subcategory
  getallsubcategory(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllSubcategoryList;
    return this.http.get(url);
  }
  //add issue details
  addissuedetails(data): Observable<any> {
    const url = this.baseURL + apiUrls.addissuedetails;
    return this.http.post(url, data);
  }
  //update issue details
  updateissuedetails(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateissuedetails;
    return this.http.post(url, postdata);
  }
}