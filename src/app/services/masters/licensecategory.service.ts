import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LicenseCategotyService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getLicenseCategory(): Observable<any> {
        const url = this.baseURL + apiUrls.getLicenseCategoryes;
        return this.http.get(url);
    }

    searchLicenseCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchLincenseCategory;
        return this.http.post(url, postParam);
    }

    addLicense(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addLicenseCategory;
        return this.http.post(url, postParam);
    }

    getLicenseById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLicenseCategoryById + '?id=' + id;
        return this.http.get(url);
    }

    updateLicense(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLicenseCategory;
        return this.http.put(url, postParam);
    }
}
