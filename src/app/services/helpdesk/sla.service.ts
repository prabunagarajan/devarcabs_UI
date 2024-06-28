import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class SLAService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;


  getAllsla(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllslaList;
    return this.http.get(url);
  }
  //rule name based search filter
  getfilterrulename(name): Observable<any> {
    const url = this.baseURL + apiUrls.filtergetrulename + name;
    return this.http.get(url);
  }
  getByIdslaList(id): Observable<any> {
    const url = this.baseURL + apiUrls.slalistgetbyId + id;
    return this.http.get(url);
  }
  getByIdslatemp(id): Observable<any> {
    const url = this.baseURL + apiUrls.getalltemplatebyid + id;
    // const url = this.baseURL + apiUrls.slatemplistgetbyId + id;
    return this.http.get(url);
  }
  getalltemp(): Observable<any> {
    // const url = this.baseURL + apiUrls.getallsmsList;
    const url = this.baseURL + apiUrls.getalltemplate;
    return this.http.get(url);
  }
  getallemail(): Observable<any> {
    const url = this.baseURL + apiUrls.getallemail;
    return this.http.get(url);
  }
  getallsms(): Observable<any> {
    const url = this.baseURL + apiUrls.getallsms;
    return this.http.get(url);
  }
  addslarule(data: any): Observable<any> {
    const url = this.baseURL + apiUrls.addSla;
    return this.http.post(url, data);
  }
  addSlatemplate(data: any): Observable<any> {
    const url = this.baseURL + apiUrls.addSlatemplate;
    return this.http.post(url, data);
  }
  searchtemplate(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.filterslatemplate;
    return this.http.post(url, postdata);
  }
}