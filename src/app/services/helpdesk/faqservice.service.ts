import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class FAQService {

    constructor(
        private http: HttpClient
      ) { }
  
     baseURL = environment.helpdeskURL;

   
      getAllfaq(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllfaqList;
        return this.http.get(url);
      }
      getByIdfaq(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdfaqList + id;
        return this.http.get(url);
      }
    
    }