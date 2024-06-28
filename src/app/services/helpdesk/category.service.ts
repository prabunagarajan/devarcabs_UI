import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) { }

    baseURL = environment.helpdeskURL;

    addcategory(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.addcategory;
        return this.http.post(url, postdata);
    }

    editCategory(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.editcategory;
        return this.http.put(url,postdata);
    }
    
    getByIdCategoryList(id): Observable<any> {
        const url = this.baseURL + apiUrls.getallCategorybyid + id;
        return this.http.get(url);
    }

    getallcategory(): Observable<any> {
        const url = this.baseURL + apiUrls.getallcategory;
        return this.http.get(url);
    }

    searchcategory(postdata): Observable<any> {
        const url = this.baseURL + apiUrls.ticketsearchCategory;
        return this.http.post(url, postdata);
    }


}