import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DomainService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllDomains(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDomain;
        return this.http.get(url);
    }

    searchDomain(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDomain;
        return this.http.post(url, postParam);
    }

    addDomain(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDomain;
        return this.http.post(url, postParam);
    }

    getdomainById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getDomainById + '?id=' + id;
        return this.http.get(url);
    }

    updateDomain(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDomain;
        return this.http.put(url, postParam);
    }
}
