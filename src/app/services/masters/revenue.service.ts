import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class RevenueService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allRevenues(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllRevenues;
        return this.http.get(url);
    }

    searchRevenue(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchRevenue;
        return this.http.post(url, postParam);
    }

    addRevenue(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addRevenue;
        return this.http.post(url, postParam);
    }

    getRevenueById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getRevenueById + '?id=' + id;
        return this.http.get(url);
    }

    updateRevenue(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateRevenue;
        return this.http.put(url, postParam);
    }
}
