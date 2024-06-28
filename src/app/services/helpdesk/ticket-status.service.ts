import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class TicketStatusService {
  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;

  getTicketStatusCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getTicketStatusCode;
    return this.http.get(url);
  }

  getTicketStatusList(): Observable<any> {
    const url = this.baseURL + apiUrls.getTicketStatusList;
    return this.http.get(url);
  }

  getTicketStatusById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getTicketStatusById + id;
    return this.http.get(url);
  }

  addTicketStatus(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addTicketStatus;
    return this.http.post(url, postdata);
  }

  editTicketStatus(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.editTicketStatus;
    return this.http.put(url,postdata);
  }

  searchTicketStatus(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchTicketStatus;
    return this.http.post(url, postdata);
  }

  getAllActiveTicketStatus(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActiveTicketStatus;
    return this.http.get(url);
  }




}
