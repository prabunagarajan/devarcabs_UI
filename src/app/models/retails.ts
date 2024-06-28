export class DailyAbstract {
  id: number;
  date: Date;
  closingBalanceWBGRForeignManufracturer: string;
  closingBalanceWBGRIndianManufracturer: string;
  closingBalanceOtherSpirits1: string;
  closingBalance: string;
  closingBalanceBeerofForeignManufracturer: string;
  closingBalanceBeerofIndianManufracturer: string;
  closingBalanceOtherSpirits2: string;
}

export class FormFL13 {
  id: number;
  licenseeName: string;
  licenseType: string;
  type: string;
  licenseFeeonSpirit: string;
  licenseFeeonBeer: string;
  totalAmount: string;
}

export class FormFL21 {
  id: number;
  nameOfTheFirm: string;
  licenseType: string;
  descriptionOfLiqour: string;
  quantityOfImportedLiquor: string;
  dutyFee: string;
  status: string;
  country: string;
  pincode: string;
  state: string;
  district: string;
  tehsil: string;
  UrbanOrRural: string;
  muncipalArea: string;
  ward: string;
  policeStation: string;
  locality: string;
  street: string;
  route: string;
  importedLiquorQuantity: string;
  permitFee: string;
}

export class FormFL24 {
  id: number;
  permitNo: string;
  permitDate: string;
  importerName: string;
  dutyPaidAmount: string;
  permitFeePaidAmount: string;
  remarks: string;
}

export class FormFl25B {
  id: number;
  date: string;
  rationCardHolder: string;
  rationCardNo: string;
  quantitySold: string;
  status: string;
}

export class FormFl28 {
  id: number;
  applicationName: string;
  distillery: string;
  licenseNo: string;
  PermitFeePaid: string;
  rate: string;
  status: string;
}

export class FormFL30 {
  id: number;
  licenseNo: string;
  passNumber: string;
  issueDate: string;
  quantityOfDenaturedSpirit: string;
  status: string;
}

export class FormFl35 {
  id: number;
  importerName: string;
  addressOfImporter: string;
  liquorImportedLocation: string;
  route: string;
  Consignment: string;
  remarks: string;
  status: string;
}

export class FormFL42 {
  id: number;
  date: string;
  openingBalance: string;
  permitNo: string;
  quantity: number;
  total: string;
  closingBalance: string;
}

export class IndentRequest {
  id: number;
  indentNo: number;
  datatime: string;
  WsNameType: string;
  totalCost: number;
  amountPaid: number;
  status: string;
}

export class ReadyForSale {
  id: number;
  date: string;
  productname: string;
  size: string;
  quantity: number;
  amount: number;
}

export class LiquorCategoryReport {
  id: number;
  brandName: string;
  liquorType: string;
  noOfCases: string;
  noOfBottles: string;
}

export class SalesReport {
  id: number;
  transactionId: string;
  purchasedDate: string;
  quantity: string;
  amount: string;
  saleStatus: string;
}

export class StockReport {
  id: number;
  transactionId: string;
  stockInDate: string;
  soldDate: string;
  productsName: string;
  size: string;
  amount: string;
}

export class Return {
  id: number;
  transactionDate: string;
  transportPassNo: string;
  totalNoofItems: string;
  refundableAmount: number;
}

export class ReturnFromCustomer {
  id: number;
  transactionId: string;
  transactionDate: string;
  quantity: number;
  amount: string;
}

export class SalesLedger {
  id: number;
  date: Date;
  closingBalance650: number;
  closingBalance500: number;
  closingBalance355: number;
  closingBalance330: number;
  closingBalance275: number;
  closingBalanceWine: number;
}

export class StockAvailability {
  id: number;
  star: string;
  wholesaleType: string;
  wholesaleName: string;
}

export class StockIn {
  id: number;
  indentNo: number;
  transportPassNo: string;
  totalBottlesReceived: number;
  totalAmount: number;
  paymentStatus: string;
}

export class StockInHand {
  id: number;
  brandName: string;
  size: number;
  availableCases: number;
  noOfBottolPerCase: number;
}

export class Transaction {
  id: number;
  dateandTime: string;
  productQTY: string;
  Amount: string;
}

export class WineDistribution {
  id: number;
  receivedDate: Date;
  transportPassNumber: string;
  nameofRetailShop: string;
  nameofBrand: string;
  intensity: number;
  size: string;
  wineCount: number;
}

export class FormFL25Part1 {
  dateAndTime: string;
  exicseOfficerInspectionDate: string;
  remarks: string;
  status: string;
}

export class Reports {
  id: number;
  purchasedDate: string;
  productName: string;
  size: string;
  amount: string;
}

export class StockAvailabilityWholesale {
  id: number;
  productName: string;
  size: string;
  packageType: string;
  availableCases: string;
  availableBottles: string;
}

export class Indentrequest {
  id: number;
  indentNumber: string;
  distillery: string;
  location: string;
  productTypeId: string;
  grade: string;
  indentquantity: string;
}

export class FormFL25Part3 {
  dateAndTime: string;
  exicseOfficerInspectionDate: string;
  remarks: string;
  status: string;
}

export class AccountPurchaser {
  id: number;
  receiptDate: string;
  permitNumber: string;
  name: string;
  address: string;
  licenseNo: string;
}

export class FormFL25Part4 {
  date: string;
  foreignManufactureSales: string;
  otherSpiritsnadLiquorsSales: string;
  otherSortsSales: string;
  beerOfForeignManufactureSlaes: string;
  beerOfIndianManufactureSales: string;
  openingBalance: string;
  receipts: string;
  Sales: string;
  closingBalance: string;
  status: string;
}