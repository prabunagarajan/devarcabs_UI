import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@appEnv/environment";
import { apiUrls } from "@appEnv/apiurls";

@Injectable({
  providedIn: "root",
})
export class ActionTakenService {
  constructor(private http: HttpClient) {}

  baseURL = environment.helpdeskURL;

  getAllActionTakenList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllActionTakenList;
    return this.http.get(url);
  }
  getCategory(): Observable<any> {
    const url = this.baseURL + apiUrls.getcatogry;
    return this.http.get(url);
  }
  getSubCategory(): Observable<any> {
    const url = this.baseURL + apiUrls.getActiveActionTakenList;
    return this.http.get(url);
  }
  getByIdcategory(id): Observable<any> {
    const url = this.baseURL + apiUrls.subcategorybycategoryid+id;
    return this.http.get(url);
  }
  getActiveActionTakenList(): Observable<any> {
    const url = this.baseURL + apiUrls.getActiveActionTakenList;
    return this.http.get(url);
  }
  getByIdActiontakenList(id): Observable<any> {
    const url = this.baseURL + apiUrls.actiontakenlistgetbyId + id;
    return this.http.get(url);
  }
  searchActionTaken(postdata){
    const url = this.baseURL + apiUrls.searchActionTaken;
    return this.http.post(url, postdata);
  }
  getuniquecode(){
    const url = this.baseURL + apiUrls.getUniqueCodeActionTaken;
    return this.http.get(url);
  }
  createaction(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.createaction;
    return this.http.post(url, postdata);
  }
  updateAction(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateaction;
    return this.http.put(url, postdata);
  }
}
