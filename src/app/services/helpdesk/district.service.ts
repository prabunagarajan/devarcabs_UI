import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getDistrictList(): Observable<any> {
    const url = this.baseURL + apiUrls.getDistrictList;
    return this.http.get(url);
  }

  getCountryList(): Observable<any> {
    const url = "https://devapigateway.upexciseonline.co/master/v1.0.0/" + apiUrls.getAllCountry;
    return this.http.get(url);
  }

  getStateList(): Observable<any> {
    const url = "https://devapigateway.upexciseonline.co/master/v1.0.0/" + apiUrls.getAllState;
    return this.http.get(url);
  }

  getActualProblemCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getActualPproblemCode
    return this.http.get(url);
  }

  getDistrictById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getDistrictById + id;
    return this.http.get(url);
  }

  createActualProblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createActualProblem;
    return this.http.post(url, postdata);
  }

  updateActualProblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateActualProblem;
    return this.http.put(url, postdata);
  }

  searchactualproblem(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.filteractualproblem;
    return this.http.post(url, postdata);
  }

  getDistrictStatus(): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityTypeStatus;
    return this.http.get(url);
  }

}
