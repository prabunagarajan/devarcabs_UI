export class ImportPermitStatus {
  id: number;
  code: string;
  parentName: string;
  unitState: string;
  permitNumber: number;
  status: boolean;
}


export class Pending {
  id: number;
  applicationNumber: string;
  // transportPassType: string;
  transportNo: string;
  applicationDate: Date;
  premisesTypeValue: string;
  requestType: string;
  status: boolean;
}

export class Approved {
  id: number;
  applicationNumber: string;
  transportPassType: string;
  transportNo: string;
  applicationDate: Date;
  premisesTypeValue: string;
  requestType: string;
  status: boolean;
}


export class RevetBack {
  id: number;
  applicationNumber: string;
  transportPassType: string;
  transportNo: string;
  applicationDate: Date;
  premisesTypeValue: string;
  requestType: string;
  status: boolean;
}