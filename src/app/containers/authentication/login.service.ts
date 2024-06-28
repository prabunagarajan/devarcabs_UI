import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  users: any = [{mail: 'upexise', password: 'upexise'}, {mail: 'upexise', password: '12345'}];

  getuser() {
    return this.users;
  }
}
