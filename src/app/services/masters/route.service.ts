import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allRoutes(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllRoute;
        return this.http.get(url);
    }

    searchRoute(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchRoute;
        return this.http.post(url, postParam);
    }

    addRoute(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addRoute;
        return this.http.post(url, postParam);
    }

    getRouteById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getRouteById + '?id=' + id;
        return this.http.get(url);
    }

    updateRoute(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateRoute;
        return this.http.put(url, postParam);
    }
}
