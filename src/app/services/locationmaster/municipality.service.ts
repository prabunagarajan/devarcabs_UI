import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class MunicipalityMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getMunicipality(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllMunicipality;
        return this.http.get(url);
    }

    searchMunicipality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchMunicipality;
        return this.http.post(url, postParam);
    }

    addMunicipality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addMunicipality;
        return this.http.post(url, postParam);
    }

    getmunicipalityById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getMunicipalityById + '?id=' + id;
        return this.http.get(url);
    }

    updateMunicipality(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateMunicipality;
        return this.http.put(url, postParam);
    }
}
