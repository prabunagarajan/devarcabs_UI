import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ProductTypeService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allProducts(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllproductType;
        return this.http.get(url);
    }

    searchProductType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.productTypeSearch;
        return this.http.post(url, postParam);
    }

    addProductType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addproductType;
        return this.http.post(url, postParam);
    }

    getProductById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getproductTypeById + '?id=' + id;
        return this.http.get(url);
    }

    updateProductType(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateproductType;
        return this.http.put(url, postParam);
    }
}
