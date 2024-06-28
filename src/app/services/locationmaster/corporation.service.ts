import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class CorporationMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getCorporation(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllCorporation;
        return this.http.get(url);
    }

    searchCorporation(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCorporation;
        return this.http.post(url, postParam);
    }

    addCorporation(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addCorporation;
        return this.http.post(url, postParam);
    }

    getcorportionById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getCorporationByid + '?id=' + id;
        return this.http.get(url);
    }

    updatecorporation(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateCorporation;
        return this.http.put(url, postParam);
    }
}
