import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class PenalityService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allPenalitys(): Observable<any> {
        const url = this.baseURL + apiUrls.getallpenalty;
        return this.http.get(url);
    }

    searchPenality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.penalitySearch;
        return this.http.post(url, postParam);
    }

    addPenality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postpenalty;
        return this.http.post(url, postParam);
    }

    getPenalityById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getpenaltybyid + '?id=' + id;
        return this.http.get(url);
    }

    updatePenality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatepenalty;
        return this.http.put(url, postParam);
    }
}
