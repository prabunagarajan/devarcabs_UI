import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LiquorTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getLiquorType(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLiquorType;
        return this.http.get(url);
    }

    searchLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchLiquorType;
        return this.http.post(url, postParam);
    }

    addLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addLiquorType;
        return this.http.post(url, postParam);
    }

    getLiquorTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLiquorTypeById + id;
        return this.http.get(url);
    }

    putLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLiquorType;
        return this.http.put(url, postParam);
    }
}
