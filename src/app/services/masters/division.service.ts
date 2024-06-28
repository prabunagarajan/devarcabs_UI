import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DivisionService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllDivision(): Observable<any> {
        const url = this.baseURL + apiUrls.getalldivision;
        return this.http.get(url);
    }

    searchDivision(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDivision;
        return this.http.post(url, postParam);
    }

    addDivision(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postdivision;
        return this.http.post(url, postParam);
    }

    getDivisionById(id): Observable<any> {
        console.log(apiUrls.getdivisionbyid);
        const url = this.baseURL + apiUrls.getdivisionbyid + '?id=' + id;
        return this.http.get(url);
    }

    updateDivision(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatedivision;
        return this.http.put(url, postParam);
    }
}
