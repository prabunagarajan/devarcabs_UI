import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;
  //  baseURL1 = environment.helpdesk;
  //create ticket
  createticket(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createticket;
    return this.http.post(url, postdata);
  }
  //call disconnected 
  createCallDisconnectedTicket(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createCallDisconnectedTicket;
    return this.http.post(url, postdata);
  }
  ticket(data): Observable<any> {
    const url = this.baseURL + apiUrls.serachbylicno + data;
    return this.http.get(url);
  }
  searchticket(id): Observable<any> {
    const url = this.baseURL + apiUrls.searchticket + id ;
    return this.http.get(url);
  }
  //view and search list ticket
  getAllticket(): Observable<any> {
    const url = this.baseURL + apiUrls.getallticket;
    return this.http.get(url);
  }
  searchfilterticket(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.getallsearchticket;
    return this.http.post(url, postdata);
  }

  //groupid based member
  groupidbasmember(): Observable<any> {
    const url = this.baseURL + apiUrls.getmemberbasedgroupid;
    return this.http.get(url);
  }
  updateticketstatus(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateticketstatus;
    return this.http.post(url, postdata);
  }
}