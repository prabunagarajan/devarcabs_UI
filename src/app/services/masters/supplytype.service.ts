import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class SupplyTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getSupplyType(): Observable<any> {
        const url = this.baseURL + apiUrls.getallsupplytype;
        return this.http.get(url);
    }

    searchSupplyType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchsupply;
        return this.http.post(url, postParam);
    }

    addSupplyType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postsupplytype;
        return this.http.post(url, postParam);
    }

    getSupplyTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getsupplytypebyid + id;
        return this.http.get(url);
    }

    putSupplyType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatesupplytype;
        return this.http.put(url, postParam);
    }
}
