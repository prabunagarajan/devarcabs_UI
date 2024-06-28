import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LicenceService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getLicence(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLicence;
        return this.http.get(url);
    }

    searchLicence(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchLicence;
        return this.http.post(url, postParam);
    }

    addLicence(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postLicence;
        return this.http.post(url, postParam);
    }

    getLicenceById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLicenceByid + id;
        return this.http.get(url);
    }

    putLicence(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLicence;
        return this.http.put(url, postParam);
    }
}
