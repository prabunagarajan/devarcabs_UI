import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  addassetaccessories(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addassetaccessories;
    return this.http.post(url, postdata);
  }

  editassetaccessories(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.editassetaccessories;
    return this.http.put(url,postdata);
  }

  getassetaccessoriesbyId(id): Observable<any> {
    const url = this.baseURL + apiUrls.getassetaccessoriesbyId + id;
    return this.http.get(url);
  }


  getassetaccessorieslist(): Observable<any> {
    const url = this.baseURL + apiUrls.getassetaccessorieslist;
    return this.http.get(url);
  }

  getassetaccessoriessearch(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.getassetaccessoriessearch;
    return this.http.post(url, postdata);
  }

  getdropdownassetaccessorieslist(): Observable<any> {
    const url = this.baseURL + apiUrls.getdropdownassetaccessorieslist;
    return this.http.get(url);
  }
  getassetaccessoriescode(): Observable<any> {
    const url = this.baseURL + apiUrls.getassetaccessoriescode;
    return this.http.get(url);
  }


}
