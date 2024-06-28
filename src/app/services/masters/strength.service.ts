import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class StrengthService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllStrength(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllStrengths;
        return this.http.get(url);
    }

    searchStrength(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchStrength;
        return this.http.post(url, postParam);
    }

    addStrength(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addStrength;
        return this.http.post(url, postParam);
    }

    getStrengthById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByStrengthId + '?id=' + id;
        return this.http.get(url);
    }

    updateStrength(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateStrength;
        return this.http.put(url, postParam);
    }
}
