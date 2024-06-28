import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class LocationmasterService {

  baseURL = environment.baseURLMaster;

  constructor(
    private http: HttpClient
  ) { }

  getLocations(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllLocation;
    return this.http.get( url );
  }

  getLocationById(id): Observable<any> {
    const url = this.baseURL + apiUrls.getLocationById + id;
    return this.http.get( url );
  }

  getAllCountry(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllCountry;
    return this.http.get( url );
  }

  getAllState(): Observable<any> {
    const url = this.baseURL + apiUrls.getAllState;
    return this.http.get( url );
  }

  getStateByCountryid(id) {
    const url = this.baseURL + apiUrls.getStateByCountryId + '?countryId=' + id;
    return this.http.get(url);
  }

  searchLocation(postParam): Observable<any> {
    const url = this.baseURL + apiUrls.searchLocation;
    return this.http.post(url, postParam);
}
addLocation(postParam): Observable<any> {
  const url = this.baseURL + apiUrls.addLocation;
  return this.http.post(url, postParam);
}
updateLocation(postParam): Observable<any> {
  const url = this.baseURL + apiUrls.updateLocation;
  return this.http.put(url, postParam);
}
}
