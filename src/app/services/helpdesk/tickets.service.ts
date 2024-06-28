import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class ticketService {

    constructor(
        private http: HttpClient
      ) { }
  
    baseURL = environment.helpdeskURL;

      getTicketsbyId(id): Observable<any> {
        const url = this.baseURL + apiUrls.ViewTicketsbyId + id;
        return this.http.get(url);
      }
      getTicketstatus(): Observable<any> {
        const url = this.baseURL + apiUrls.ticketstatus;
        return this.http.get(url);
      }
      deleteTicketsbyId(id): Observable<any> {
        const url = this.baseURL + apiUrls.deleteticket + id;
        return this.http.get(url);
      }
    }