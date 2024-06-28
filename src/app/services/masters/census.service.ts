import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class CensusService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getCensus(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllCensus;
        return this.http.get(url);
    }

    searchCensus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCencus;
        return this.http.post(url, postParam);
    }

    addCensus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addCensus;
        return this.http.post(url, postParam);
    }

    getCensusById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getCensusByid + id;
        return this.http.get(url);
    }

    putCensus(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateCensus;
        return this.http.put(url, postParam);
    }
}
