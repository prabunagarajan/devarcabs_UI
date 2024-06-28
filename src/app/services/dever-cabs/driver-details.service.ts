import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  driverDetailsAdd(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.driverDetailsAdd;
    return this.http.post(url, postdata);
  }

  driverDetailsUpdate(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.driverDetailsUpdate;
    return this.http.put(url,postdata);
  }

  driverDetailsGetById(id): Observable<any> {
    const url = this.baseURL + apiUrls.driverDetailsGetById + id;
    return this.http.get(url);
  }
  driverDetailsList(): Observable<any> {
    const url = this.baseURL + apiUrls.driverDetailsList;
    return this.http.get(url);
  }
  searchcategory(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.ticketsearchCategory;
    return this.http.post(url, postdata);
}
driverDetailsActive(): Observable<any> {
  const url = this.baseURL + apiUrls.driverDetailsList;
  return this.http.get(url);
}
}
