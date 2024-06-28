import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class ModeOfPaymentService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    allPayments(): Observable<any> {
        const url = this.baseURL + apiUrls.getallpayment;
        return this.http.get(url);
    }

    searchPayment(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchPayment;
        return this.http.post(url, postParam);
    }

    addPaymentMode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.postpayment;
        return this.http.post(url, postParam);
    }

    getPaymentById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getpaymentbyid + '?id=' + id;
        return this.http.get(url);
    }

    updatePaymentMode(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updatepayment;
        return this.http.put(url, postParam);
    }
}
