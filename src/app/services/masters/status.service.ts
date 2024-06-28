import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class StatusMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getStatus(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllStatus;
        return this.http.get(url);
    }

    searchStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchStatus;
        return this.http.post(url, postParam);
    }

    addStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addStatus;
        return this.http.post(url, postParam);
    }

    getStatusById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getStatusById + id;
        return this.http.get(url);
    }

    putStatus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateStatus;
        return this.http.put(url, postParam);
    }
}
