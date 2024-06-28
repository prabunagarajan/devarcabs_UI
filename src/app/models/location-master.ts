export class Block {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}
export class Country {
  id: number;
  code: string;
  name: string;
  countryCode: number;
  countryName: string;
  currency: string;
  stateName: string;
  isActive: boolean;
}
export class Corporation {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}
export class District {
  id: number;
  code: string;
  name: string;
  shortName: string;
  stateName: string;
  isActive: boolean;
}
export class Location {
  id: number;
  locCode: string;
  locationCode: string;
  locationName: string;
  state: string;
  country: string;
  active: boolean;
}
export class Municipality {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}
export class State {
  id: number;
  code: string;
  name: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  stateName: string;
  shortName: string;
  isActive: boolean;
}
export class Taluk {
  id: number;
  code: string;
  shortName: string;
  name: string;
  stateName: string;
  districtName: string;
  isActive: boolean;
}
export class Village {
  id: number;
  code: string;
  name: string;
  talukName: string;
  districtName: string;
  active: boolean;
}
export class Zone {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}