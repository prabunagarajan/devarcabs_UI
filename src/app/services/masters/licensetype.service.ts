import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LicenseTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getLicenseType(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLicenseType;
        return this.http.get(url);
    }

    searchLicenseType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchLicenseType;
        return this.http.post(url, postParam);
    }

    addLicenseType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addLicenseType;
        return this.http.post(url, postParam);
    }

    getLicenseTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLicenceTypeById + '?id=' + id;
        return this.http.get(url);
    }

    updateLicenseType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLicenseType;
        return this.http.put(url, postParam);
    }
}
