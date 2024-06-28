import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class PackageTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allPackageTypes(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllpackageType;
        return this.http.get(url);
    }

    searchPackage(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchPackageType;
        return this.http.post(url, postParam);
    }

    addPackageType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addpackageType;
        return this.http.post(url, postParam);
    }

    getPackageById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getpackageTypeById + '?id=' + id;
        return this.http.get(url);
    }

    updatePackageType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatepackageType;
        return this.http.put(url, postParam);
    }
}
