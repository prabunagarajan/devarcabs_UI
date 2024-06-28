import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class BrandMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getBrandMaster(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllBrandMaster;
        return this.http.get(url);
    }

    searchBrandMaster(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchBrandMaster;
        return this.http.post(url, postParam);
    }

    addBrandMaster(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addBrandMaster;
        return this.http.post(url, postParam);
    }

    getBrandMasterById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getByIdBrandMaster + id;
        return this.http.get(url);
    }

    putBrandMaster(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateBrandMaster;
        return this.http.put(url, postParam);
    }
}
