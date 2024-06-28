import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FeeMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getFee(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllFee;
        return this.http.get(url);
    }

    searchFee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchFee;
        return this.http.post(url, postParam);
    }

    addFee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addFee;
        return this.http.post(url, postParam);
    }

    getFeeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getFeeByid + id;
        return this.http.get(url);
    }

    putFee(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateFee;
        return this.http.put(url, postParam);
    }
}
