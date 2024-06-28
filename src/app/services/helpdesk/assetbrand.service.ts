import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class AssetbrandService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL = environment.helpdeskURL;


  getAllAssetBrandList(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllAssetBrand;
    return this.http.get(url);
  }

  getAllActiveAssetBrandList(): Observable<any> {
    const url = this.baseURL + apiUrls.getActiveAssetbrand;
    return this.http.get(url);
  }

  getByIdAssetBrand(id): Observable<any> {
    const url = this.baseURL + apiUrls.getByIdAssetBrand + id;
    return this.http.get(url);
  }
  addAssetBrand(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.addAssetBrand;
    return this.http.post(url, postdata);
  }

  updateAssetBrand(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.updateAssetBrand;
    return this.http.put(url, postdata);
  }

  getByIdcategory(id): Observable<any> {
    const url = this.baseURL + apiUrls.subcategorybycategoryid + id;
    return this.http.get(url);
  }
  getuniquecode(): Observable<any> {
    const url = this.baseURL + apiUrls.getAssetUniqueCode;
    return this.http.get(url);
  }
  searchassetbrand(postdata): Observable<any> {
    const url = this.baseURL + apiUrls.searchAssetBrand;
    return this.http.post(url, postdata);
  }
}