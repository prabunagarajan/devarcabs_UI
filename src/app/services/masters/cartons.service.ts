import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class CartonService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getAllCarts(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllcart;
        return this.http.get(url);
    }

    searchCarton(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCartons;
        return this.http.post(url, postParam);
    }

    addCartons(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addcartoon;
        return this.http.post(url, postParam);
    }

    getcartonsById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getcartoonByid + '?id=' + id;
        return this.http.get(url);
    }

    updateCartons(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatecartoon;
        return this.http.put(url, postParam);
    }
}
