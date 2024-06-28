import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class EntityService {

    baseURL = environment.baseURLUser;

    constructor(
        private http: HttpClient
    ) { }
 
    getAllEntitys(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllEntity;
        return this.http.get(url);
    }

    getAllEntityType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.getAllEntityType;
        return this.http.post(url, postParam);
    }

    saveUpdateEntityType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.saveUpdateEntityType;
        return this.http.post(url, postParam);
    }

    validateEntityCode(key): Observable<any> {
        const url = this.baseURL + apiUrls.validateEntityCode + '?entityCode=' + key;
        return this.http.get(url);
    }

    getEntityById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getEntityById + '?id=' + id;
        return this.http.get(url);
    }

    // updateEntity(postParam): Observable<any> {
    //     const url = this.baseURL + apiUrls.updateEntity;
    //     return this.http.put(url, postParam);
    // }
}
