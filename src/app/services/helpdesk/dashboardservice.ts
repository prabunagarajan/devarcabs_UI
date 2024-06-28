
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(
        private http: HttpClient
    ) { }

    baseURL = environment.helpdeskURL;
    //dashboard base list
    getAlldashboardList(): Observable<any> {
        const url = this.baseURL + apiUrls.getdashboardlists;
        return this.http.get(url);
    }
}

