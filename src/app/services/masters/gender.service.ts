import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class GenderService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllGender(): Observable<any> {
        const url = this.baseURL + apiUrls.getallgender;
        return this.http.get(url);
    }

    searchGender(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchGender;
        return this.http.post(url, postParam);
    }

    addGender(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postgender;
        return this.http.post(url, postParam);
    }

    getGenderById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getgenderbyid + '?id=' + id;
        return this.http.get(url);
    }

    updateGender(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updategender;
        return this.http.put(url, postParam);
    }
}
