import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LiquorCategoryService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllLiquor(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllLiquorCategory;
        return this.http.get(url);
    }

    searchLiquor(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.liquorCategorySearch;
        return this.http.post(url, postParam);
    }

    addLiquor(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addLiquorCategory;
        return this.http.post(url, postParam);
    }

    getLiquorById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getLiquorcatgByid + '?id=' + id;
        return this.http.get(url);
    }

    updateLiquor(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateLiquorCategory;
        return this.http.put(url, postParam);
    }
}
