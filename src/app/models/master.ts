export class Dropdown {
  id: number;
  paramKey: string;
  description: string;
}

export class LicenseConfiguration {
  id: number;
  entityDesc: string;
  licenseTypeDesc: string;
  status: string;
  entityCode: string;
  licenseTypeCode: string;
}

export class Workflow {
  id: number;
  moduleNameCode: string;
  subModuleNameCode: string;
  moduleNameDesc: string;
  workflowName: string;
  subModuleNameDesc: string;
}

export class ApplicantStatus {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class ApplicantType {
  id: number;
  code: string;
  type: string;
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

export class Cartens {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class ConsumptionType {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class Department {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class Domain {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class Year {
  id: number;
  endMonth: string;
  name: string;
  startMonth: string;
  active: boolean;
}

export class Gender {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class Ingredient {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class LabelMaster {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class LicenceType {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class LiquorCategory {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}

export class ModeOfPay {
  id: number;
  code: string;
  stages: string;
  active: boolean;
}

export class MolassesType {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class PackageType {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class ProductType {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class Revenue {
  id: number;
  code: string;
  name: string;
  stages: string;
  active: boolean;
}

export class Route {
  id: number;
  distance: number;
  duration: string;
  routeCode: string;
  routeName: string;
  wastage: number;
  routeFrom: string;
  routeTo: string;
  active: boolean;
}

export class SpiritType {
  id: number;
  code: string;
  type: string;
  isActive: boolean;
}

export class Stage {
  id: number;
  code: string;
  name: string;
  stages: string;
  active: boolean;
}

export class Status {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class Strength {
  id: number;
  strength: string;
  category: string;
  code: string;
  active: boolean;
}

export class SupplyType {
  id: number;
  supplyType: string;
  name: string;
  percentage: number;
  isActive: boolean;
}

export class TankCoverType {
  id: number;
  code: string;
  type: string;
  active: boolean;
}

export class TankType {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class TransferMode {
  id: number;
  code: string;
  name: string;
  active: boolean;
}

export class VehicleMake {
  id: number;
  code: string;
  makeModel: string;
  isActive: boolean;
}

export class VehicleModel {
  id: number;
  code: string;
  model: string;
  isActive: boolean;
}

export class VerificationType {
  id: number;
  code: string;
  name: string;
  frequencyDays: number;
  active: boolean;
}

export class Division {
  id: number;
  divisionCode: string;
  divisionName: string;
  active: boolean;
}

export class Feetype {
  id: number;
  feeTypeCode: string;
  feeTypeName: string;
  active: boolean;
}

export class Headcode {
  id: number;
  headcode: string;
  category: string;
  code: string;
  active: boolean;
}

export class Treasury {
  id: number;
  treasuryCode: string;
  treasuryName: string;
  divisionid: number;
  isActive: boolean;
}

export class Description {
  id: number;
  code: string;
  name: string;
  feeName: string;
  headName: string;
  isActive: boolean;
}

export class SubLiquorType {
  id: number;
  code: string;
  name: string;
  liquortype: string;
}
export class RawMaterial {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
}
export class DropdownConfiguration {
  id: number;
  paramKey: string;
  description: string;
  isActive: boolean;
}

export class MappingData {
  id: number;
  filterCode: string;
  filterValue: string;
  subFilterCode: string;
  subFilterValue: string;
  paramKey: string;
  paramValue: string;
  isActive: boolean;
}

export class CommentData {
  id: number;
  Date: string;
  UserName: string;
  Comments: string;
}

export class RetailShop {
  id: number;
  shopId: string;
  licenseTypeCode: string;
  licenseTypeDesc: string;
  districtCode: string;
  districtDesc: string;
  tehsilCode: string;
  tehsilDesc: string;
  zoneCode: string;
  zoneDesc: string;
  pinCode: string;
  status: boolean;
}
