import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getDepartment(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllDepartments;
        return this.http.get(url);
    }

    searchDepartment(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchDepartment;
        return this.http.post(url, postParam);
    }

    addDepartment(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addDepartment;
        return this.http.post(url, postParam);
    }

    getDepartmentById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getDepartmentByid + id;
        return this.http.get(url);
    }

    putDepartment(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateDepartment;
        return this.http.put(url, postParam);
    }
}
