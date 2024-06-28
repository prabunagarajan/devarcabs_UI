
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class EmailrequestService {

    constructor(
        private http: HttpClient
    ) { }

    baseURL = environment.helpdeskURL;

    //knowlege base list
    getAllemailrequestList(): Observable<any> {
        const url = this.baseURL + apiUrls.getemailrequestList;
        return this.http.get(url);
    }

    getByidemailrequestList(id): Observable<any> {
        const url = this.baseURL + apiUrls.getemailrequestListbyid + id;
        return this.http.get(url);
    }

    //rule name based search filter
    getfilteremail(name: any): Observable<any> {
        const url = this.baseURL + apiUrls.serachemailreq;
        return this.http.post(url, name);
    }
}

