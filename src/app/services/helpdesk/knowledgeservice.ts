import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class KnowledgeService {

    constructor(
        private http: HttpClient
    ) { }

    baseURL = environment.helpdeskURL;




    getallknowledge(): Observable<any> {
        const url = this.baseURL + apiUrls.getallknowlegeva;
        return this.http.get(url);
    }
    getknowledgebyId(id: any): Observable<any> {
        const url = this.baseURL + apiUrls.getknowlegebyId + id;
        // const url = this.baseURL + apiUrls.getaknowlegebyId + id;        
        return this.http.get(url);
    }
    getallissues(): Observable<any> {
        const url = this.baseURL + apiUrls.getallissues;
        return this.http.get(url);
    }
    addknowledge(data: any): Observable<any> {
        const url = this.baseURL + apiUrls.addknowledge;
        return this.http.post(url, data);
    }
    updateknowledge(data: any): Observable<any> {
        const url = this.baseURL + apiUrls.updateknowledge;
        return this.http.put(url, data);
    }
}