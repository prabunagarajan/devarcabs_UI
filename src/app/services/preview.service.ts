import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  setData: any;
  constructor() {
    console.log(this.setData);
   }


}
