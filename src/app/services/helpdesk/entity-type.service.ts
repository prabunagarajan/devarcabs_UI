import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: 'root'
})
export class EntityTypeService {

  constructor(private http: HttpClient) { }

  baseURL = environment.helpdeskURL;

  getEntityTypeCode(): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityTypeCode;
    return this.http.get(url);
  }

  getEntityTypeList(): Observable<any> {
    const url = this.baseURL + apiUrls.entityTypeList;
    return this.http.get(url);
  }

  getEntityTypeStatus(): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityTypeStatus;
    return this.http.get(url);
  }
  
  getEntityTypeById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getEntityTypeById + id;
    return this.http.get(url);
  }

  createEntityType(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createEntityType;
    return this.http.post(url, postdata);
  }

  updateEntityType(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateEntityType;
    return this.http.put(url, postdata);
  }

  searchEntityType(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchEntityType;
    return this.http.post(url, postdata);
  }

  getAllEntityTypeName(){
    const url = this.baseURL + apiUrls.getAllEntityTypeName;
    return this.http.get(url);
  }
}
