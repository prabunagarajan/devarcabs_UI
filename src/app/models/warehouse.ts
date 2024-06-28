export class WareHouseBwfl8list {
  id: number;
  employeeName: string;
  employeeDesignation: string;
  employeeAddress: string;
  appointmentDate: Date;
  referenceDeputy: string;
  remarks: string;
  status: string;
  entityId: number;
  active: boolean;
}

export class WareHouseBwfl6list {
  id: number;
  active: true;
  addressOfConsigner: string;
  brandRegistrationId: number;
  entityId: number;
  inBulk: number;
  issuedPassDate: Date;
  issuedPassNumber: number;
  ml180: number;
  ml325: number;
  ml375: number;
  ml650: number;
  ml750: number;
  numberOfCases: number;
  remarks: number;
  status: string;
  strengthId: number;
}

export class WareHouseBwfl7list {
  id: number;
  brandRegistrationId: number;
  bwfl7Date: Date;
  passCoveringIssue: string;
  passNumber: number;
  nameOfConsigner: string;
  nameOfConsignee: string;
  dispatched: number;
  permitNumber: number;
  dateOfPermit: Date;
  officerIncharge: string;
  descriptionOfFL: string;
  batchNumber: number;
  quart: number;
  pint: number;
  nips: number;
  totalBulkLtr: number;
  remarks: string;
  entityId: number;
  active: boolean;
}

export class WareHouseBwfl9list {
  id: number;
  brandRegistrationId: number;
  liquorDescription: string;
  ml180: number;
  ml375: number;
  ml750: number;
  beer: number;
  quantityInBulkLitres: number;
  alcohol: number;
  total: number;
  remarks: string;
  status: string;
  entityId: number;
  active: boolean;
}

export class WareHouseBwfl10list {
  id: any;
  brandRegistrationId: number;
  bwfl10Name: string;
  bwfl10Date: Date;
  liquorDescription: string;
  stockRemaining: number;
  consignerAddress: string;
  remarks: string;
  status: string;
  entityId: number;
  active: boolean;
}
export class OutsideUpBrandRegister {
  id: any;
  reqdate: string;
  liquorTypeId: string;
  parentCode: string;
}
