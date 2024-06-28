import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DipMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getDip(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDips;
        return this.http.get(url);
    }

    searchDip(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDip;
        return this.http.post(url, postParam);
    }

    addDip(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.adddip;
        return this.http.post(url, postParam);
    }

    getDipById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getDipById + id;
        return this.http.get(url);
    }

    putDip(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDip;
        return this.http.put(url, postParam);
    }
}
