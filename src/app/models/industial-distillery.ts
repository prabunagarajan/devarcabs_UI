export class Pd8 {
  id: number;
  from: string;
  to: string;
  molassesUsed: number;
  washPrepared: number;
  washDistillery: number;
}

export class Pd9a {
  id: number;
  fromDate: string;
  toDate: string;
  molassesUsed: number;
  finalGravity: number;
  strength: number;
  dateOfPassed: string;
  almolasses: string;
}

export class TankConversion {
  tankName: string;
  requestDate: string;
  status: string;
  balance: string;
  spiritType: string;
  convertTo: string;
  requestId: string;
}

export class ExportIndentLiquor {
  exportTo: string;
  appDate: string;
  unit: string;
  brandName: string;
  size: string;
  packageType: string;
  cases: number;
  bottles: number;
  bl: string;
}

export class TankRepair {
  tankName: string;
  requestDate: string;
  repairType: string;
  customRadioInline1: string;
  spirittype: string;
  capacity: string;
  reasonForRepair: string;
  specification:string;
  durationOfrepair:number;
  status: string;
}
export class TankMaintainance {
  tankId: number;
  reqdate: string;
  reasonForMaintenance: string;
  refNumber: string;
  durationofMaintenance:string;
  status: string;
  maintanenceType:string;
  active: boolean
}
export class Qrcode {
  brandName :string
  productionLineValue: string;
  applicationNumber:number
  packageSizeName: string;
  productionLineCode: string;
  requestDate:string;
  noOfCases: number;
  licenseNumber: string;
   status: string;
  active: boolean
}
export class ProductionPlan {
  bottlingProductionPlanId: number;
  givenNumberOfCases: string;
  size: string;
  mapped: number;
  barcodeGenerate: string;
  number: number;
  quantity: string;
  status: string;
  active: boolean
}