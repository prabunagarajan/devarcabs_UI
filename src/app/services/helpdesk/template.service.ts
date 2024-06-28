import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';
@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;

  getTemplateAddress(): Observable<any> {
    const url = this.baseURL + apiUrls.getTemplateAddress;
    return this.http.get(url);
  }

  getAllTemplateTypes(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllTemplateTypes;
    return this.http.get(url);
  }

  getAllTemplateslist(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllTemplateslist;
    return this.http.get(url);
  }

  getTemplateById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getTemplateById + id;
    return this.http.get(url);
  }

  addTemplate(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTemplate;
    return this.http.post(url, postdata);
  }

  editTemplate(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.editTemplate;
    return this.http.put(url,postdata);
  }

  searchTemplate(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchTemplate;
    return this.http.post(url, postdata);
  }


}
