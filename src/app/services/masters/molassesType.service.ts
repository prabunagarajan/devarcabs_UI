import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class MolassesTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allMolassesType(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllMolassesType;
        return this.http.get(url);
    }

    searchMolassesType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchMolassesType;
        return this.http.post(url, postParam);
    }

    addMolassesType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addMolassesType;
        return this.http.post(url, postParam);
    }

    getMolassesById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getMolassesTypeById + '?id=' + id;
        return this.http.get(url);
    }

    updateMolassesType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateMolassesType;
        return this.http.put(url, postParam);
    }
}
