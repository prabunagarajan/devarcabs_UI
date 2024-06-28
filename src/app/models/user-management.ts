export class Designation {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class User {
  id: number;
  code: string;
  firstName: string;
  lastName: string;
  username: string;
  mobileNumber: string;
  email: string;
  active: boolean;
}

export class AuthUser {
  userName: string;
  userId: string;
  logInTime: string;
  logRemoteIp: string;
  isCustomer: string;
}

export class Role {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class Entity {
  id: number;
  code: string;
  name: string;
  active: boolean;
}