import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
  })
  export class PriorityService {

    constructor(
        private http: HttpClient
      ) { }
  
     baseURL = environment.helpdeskURL;

   
      getAllpriority(): Observable<any> {
        const url = this.baseURL + apiUrls.getpriority;
        return this.http.get(url);
      }
    
    }