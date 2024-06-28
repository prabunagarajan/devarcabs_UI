import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getDeptCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getDeptCode;
    return this.http.get(url);
  }

  getDeptList(): Observable<any> {
    const url = this.baseURL + apiUrls.deptList;
    return this.http.get(url);
  }
  
  getByIdDeptList(id): Observable<any> {
    const url = this.baseURL + apiUrls.deptGetById + id;
    return this.http.get(url);
  }

  createDept(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createDept;
    return this.http.post(url, postdata);
  }

  upadateDept(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateDept;
    return this.http.put(url, postdata);
  }

  searchDept(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchDept;
    return this.http.post(url, postdata);
  }
}
