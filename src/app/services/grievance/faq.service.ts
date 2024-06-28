import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;

  getAllfaqList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllGrievanceFAQ;
    return this.http.get(url);
  }

  getFAQCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getGrievanceFAQCode;
    return this.http.get(url);
  }

  getByIdfaq(id): Observable<any> {
    const url = this.baseURL + apiUrls.getGrievanceFAQById + id;
    return this.http.get(url);
  }

  updateFAQ(req): Observable<any> {
    const url = this.baseURL + apiUrls.updateGrievanceFAQ;
    return this.http.put(url,req);
  }

  addFAQ(req): Observable<any> {
    const url = this.baseURL + apiUrls.addGrievanceFAQ;
    return this.http.post(url,req);
  }

  searchFAQList(req): Observable<any> {
    const url = this.baseURL + apiUrls.grievanceFAQSearch;
    return this.http.post(url,req);
  }

  getCategory(): Observable<any>{
    const url = this.baseURL + apiUrls.getAllActiveCategoryForGrievance;
    return this.http.get(url);
  }

}
