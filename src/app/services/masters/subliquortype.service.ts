import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class SubLiquorTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    getSubLiquorType(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllSubLiquorType;
        return this.http.get(url);
    }

    searchSubLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchSubLiquorType;
        return this.http.post(url, postParam);
    }

    addSubLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addSubLiquorType;
        return this.http.post(url, postParam);
    }

    getSubLiquorTypeById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getSubLiquorTypeById + '?id=' + id;
        return this.http.get(url);
    }

    putSubLiquorType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateSubLiquorType;
        return this.http.put(url, postParam);
    }
    getSubLiquorTypesByLiquorId(id): Observable<any> {
        const url = this.baseURL + apiUrls.getSubLiquorsByLiquorId + '?liquortypeid=' + id;
        return this.http.get(url);
    }
    

    // catagory 
    getAllCatagory(){
        const url = this.baseURL + apiUrls.getallCatagory;
        return this.http.get(url);
    }
}
