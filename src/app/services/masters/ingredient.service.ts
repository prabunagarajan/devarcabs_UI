import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    AllIngredient(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllIngredients;
        return this.http.get(url);
    }

    searchIngredient(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchIngredient;
        return this.http.post(url, postParam);
    }

    addIngredient(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addIngredient;
        return this.http.post(url, postParam);
    }

    getIngredientById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getIngredientById + '?id=' + id;
        return this.http.get(url);
    }

    updateIngredient(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateIngredient;
        return this.http.put(url, postParam);
    }
}
