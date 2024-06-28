import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class FeetypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllFeetype(): Observable<any> {
        const url = this.baseURL + apiUrls.getallfeetype;
        return this.http.get(url);
    }

    searchFeetype(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchFeetype;
        return this.http.post(url, postParam);
    }

    addFeetype(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postfeetype;
        return this.http.post(url, postParam);
    }

    getFeetypeById(id): Observable<any> {
        console.log(apiUrls.getfeetypebyid);
        const url = this.baseURL + apiUrls.getfeetypebyid + '?id=' + id;
        return this.http.get(url);
    }

    updateFeetype(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatefeetype;
        return this.http.put(url, postParam);
    }
}
