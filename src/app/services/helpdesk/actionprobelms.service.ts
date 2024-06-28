import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: "root",
})
export class ActualProbelmService {
  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getAllActualProbelmList(): Observable<any> {
    const url = this.baseURL + apiUrls.getActualProblemList;
    return this.http.get(url);
  }
  getAllActiveActualProbelmList(): Observable<any> {
    const url = this.baseURL + apiUrls.getActiveProblem;
    return this.http.get(url);
  }

  getActualProblemCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getActualPproblemCode
    return this.http.get(url);
  }

  getByIdActualProbelmList(id): Observable<any> {
    const url = this.baseURL + apiUrls.getActualProblemById +"?id=" +id;
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

  categoryList():Observable<any>{
    const url = this.baseURL + apiUrls.getallcategory;
    return this.http.get(url);
  }

  subCategoryList(categoryId):Observable<any>{
    const url = this.baseURL + apiUrls.subcategorybycategoryid + categoryId;
    return this.http.get(url);
  }
  
}
