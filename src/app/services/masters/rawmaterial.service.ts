import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class RawMaterialService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allRawMaterial(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllRawMaterial;
        return this.http.get(url);
    }

    searchRawMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchRawMaterial;
        return this.http.post(url, postParam);
    }

    addRawMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addRawMaterial;
        return this.http.post(url, postParam);
    }

    getMaterialById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getRawMaterialById + '?id=' + id;
        return this.http.get(url);
    }

    updateRawMaterial(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateRawMaterial;
        return this.http.put(url, postParam);
    }
}
