import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LicenseeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getLicensee(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLicensee;
        return this.http.get(url);
    }

    searchLicensee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchLicensee;
        return this.http.post(url, postParam);
    }

    addLicensee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postLicensee;
        return this.http.post(url, postParam);
    }

    getLicenseeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLicenseeByid + id;
        return this.http.get(url);
    }

    putLicensee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLicensee;
        return this.http.put(url, postParam);
    }
}
