export class Inspectionreport {
  id: number;
  date: string;
  verificationName: string;
  tankNo: string;
  trs: string;
  brix: string;
}

export class Mf5part1g {
  id: number;
  requestDate: string;
  openStockByAccount: string;
  totalDispatchOfMolasses: string;
  totalSugarQuantity: string;
  status: string;
}

export class Mf5part2 {
  id: number;
  serialNoOfTank: string;
  tankType: string;
  openStock: string;
  molassesTotal: string;
  nameOfDistillery: string;
  quantitySupplied: string;
  status: string;
}

export class Mf5part3 {
  id: number;
  serialNoOfTank: string;
  tankType: string;
  openStock: string;
  molassesTotal: string;
  nameOfDistillery: string;
  quantitySuppliedMolasses: string;
  status: string;
}

export class Mf4transportpass {
  id: number;
  gatePassNo: number;
  mf4Date: string;
  indentNumber: string;
  indentDate: string;
  distilleryName: string;
  status: string;
}

export class Mf9 {
  id: number;
  thisYear: string;
  thisYearCanesupply: string;
  foreCastQtyBHeavy: number;
  foreCastQtyCHeavy: number;
  foreCastQtyCaneJuice: number;
  foreCastQtyCaneSyrup: number;
  status: string;
}

export class Mf9fortnight {
  id: number;
  thisYear: string;
  thisYearCanesupply: string;
  status: string;
}

export class Molassescharges {
  id: number;
  requestDate: string;
  openingBalance: string;
  deposit: string;
  total: string;
  dispatchedDayQtls: string;
  dispatchedToDateQtls: string;
  consumedDay: string;
  consumedToDate: string;
  remarks: string;
  status: string;
}

export class Molassesreciept {
  id: number;
  name: string;
  openingBalance: string;
  reciptBalance: number;
  consumption: number;
  bookBalance: number;
  actualBalance: string;
}

export class Sheeranidhi {
  id: number;
  date: string;
  totalDispatchMolassesQtls: number;
  totalDueMolasses: number;
  totalProgressiveDeposits: number;
  status: string;
}

export class Stockin {
  id: number;
  date: string;
  producedMolasses: string;
  gradeName: string;
  molassesTransferStatus: string;
  status: boolean;
}