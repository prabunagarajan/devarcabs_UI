// const Link = ''; // HMIS-INVENTORY/v1/
export const apiUrls = {
  getallentitynames: 'entity/getAllEntity',
  stockInList: 'stockin/getAllStock',
  sugarmillDashboard: 'dashBoard/getThisYearProductionDetails',
  gettanksbyid: 'tankRegistration/getTankRegByGradeId',
  getmf9details: 'mf9productionforecast/getProductionForecast',
  getmf9Forecasedetails: 'mf9fortnight/getProductionForecast',
  getStockById: 'stockin/getStockById?id=',
  addStock: 'stockin/addStock',
  getMolassesAdminChargesValue: 'molassesAdminCharge/getLatestMolassesAdminCharge',
  gettankbyproductid: 'tankRegistration/getTankRegByProductTypeId',
  fortnightSearch: 'mf9fortnight/mf9ProductionForecastLazySearch',
  getlatestfortnight: 'mf9fortnight/getLatestFortnightForecast',
  gettankbyid: 'stockin/availableStockTank',
  gettankbyproducttype: 'mf9productionforecast/getTankTypeByProductType',
  updateStock: 'stockin/updateStock',
  transferTank: 'stockin/availableStockTank',
  getTankByGradeId: 'tankRegistration/getTank/ByGradeId',
  getTankDetailsTransfer: 'tankRegistration/getTankRegById',
  tankConAdd: 'tankConversion/addTankConversion',
  tankConUpdate: 'tankConversion/updateTankConversion',
  tankConAll: 'tankConversion/getAllTankConversion',
  tankConAddGetById: 'tankConversion/getTankConversionById?id=',
  tankDetails: 'tankRegistration/getTankRegByTankId?tankId=',
  getAllTank: 'tankType/getAllTankType',
  getAllGrade: 'grademaster/getAllGradeMaster',
  stockoutAdd: 'stockout/addStock',
  stockoutUpdate: 'stockout/updateStock',
  stockoutGetById: 'stockout/getStockById?id=',
  currentSeason: 'utility/molasses/currentSeason',
  stockoutAll: 'stockout/getAllStock',
  stockAppRej: 'tankConversion/tankConversionApprove',
  getAllTransportGen: 'transportgeneration/getAllTransportGeneration',
  transportGenGetById: 'MF4transportPass/outward/getbyid?outwardId=',
  mfpart3GetAll: 'molassesFormat/getAllMolassesFormat',
  mfpart3GetById: 'molassesFormat/getMolassesFormatById?id=',
  mfpart3Add: 'molassesFormat/addMolassesFormat',
  molassesAdminGetById: 'molassesAdminCharge/getMolassesAdminChargeById?id=',
  addMolassesAdmin: 'molassesAdminCharge/addMolassesAdminCharge',
  updateMolassesAdmin: 'molassesAdminCharge/updateMolassesAdminCharge',
  getAllMolassesAdmin: 'molassesAdminCharge/getAllMolassesAdminCharge',
  mfpart3GetUpdate: 'molassesFormat/updateMolassesFormat',
  addTransportGeneration: 'transportgeneration/addTransportGeneration',
  updateTransportGeneration: 'MF4transportPass/outward/update',
  sugarmillNameTransGen: 'sugermillreg/getAllSugarMillReg',
  approveTransGen: 'transportgeneration/approveTransportGeneration',
  mf7Update: 'mf7register/update',
  getAllSugarMillReg: 'sugermillreg/getAllSugarMillReg',
  getSugerMillById: 'sugermillreg/getSugerMillById?id=',
  sugarMillApprovalLog: 'sugermillreg/sugarMillApprovalLog',
  getAllMolassesRecieptReg: 'molassesReciept/getAllMolassesRecieptReg',
  getMolassesRecieptRegById: 'molassesReciept/getMolassesRecieptRegById?id=',
  addMolassesRecieptReg: 'molassesReciept/addMolassesRecieptReg',
  updateMolassesRecieptReg: 'molassesReciept/updateMolassesRecieptReg',
  getAllMF5Part1Register: 'mF5Part1register/getAllMF5Part1Register',
  addMf5PartOne: 'mF5Part1register/create',
  addMf7: 'mf7register/create',
  getAllMf7: 'mf7register/getAllMf7Register',
  mf7GetById: 'mf7register/getMf7RegisterById?id=',
  getMF5Part1RegisterById: 'mF5Part1register/getMF5Part1RegisterById?id=',
  updateMf5PartOne: 'mF5Part1register/update',
  addMf5Part2: 'molassesFormat/addMolassesFormat',
  updateMf5Part2: 'molassesFormat/updateMolassesFormat',
  mf5Part2GetById: 'molassesFormat/getMolassesFormatById?id=',
  getAllMf9: 'mf9productionforecast/getAllProductionForecast',
  getAllMf5Part2: 'molassesFormat/getAllMolassesFormat',
  getAllTankMaster: '/tankmaster/getAllTankMaster',
  // VerificationType
  postverificatiobtype: 'verificationType/addVerificationType',
  getallverificationtype: 'verificationType/getAllVerificationType',
  getverificationbyId: 'verificationType/getVerificationTypeById?id=',
  updateverificationtype: 'verificationType/updateVerificationType',
  searchVerification: 'verificationType/verificationLazySearch',
  tankRegGetById: 'tankRegistration/getTankRegById?id=',
  getapprovalloags: 'api/master/findWorkFlowAudit?applicationNumber=',
  tankRegAdd: 'tankRegistration/addTankReg',
  tankRegUpdate: 'tankRegistration/updateTankReg',
  getAllTankReg: 'ankRegistration/getAllTankReg',

  findDependentMasterList: 'api/masterValues/findDependentMasterList',
  findDependentValuesByFilterCodeAndSubCode: 'api/masterValues/findDependentValuesByFilterCodeAndSubCode',
  findDependentValuesMasterOnMaster: 'api/masterValues/findDependentValuesMasterOnMaster',
  findActiveDropDownList: 'api/masterValues/findActiveDropDownList',
  findActiveDropDownChildList: 'api/masterValues/findActiveDropDownChildList',
  isFilterKeyExist: 'api/masterValues/isFilterKeyExist',
  createUpdateDependentValues: 'api/masterValues/createUpdateDependentValues',

  // Transfer Mode
  getalltransfermode: 'transferMode/getAllTransferMode',
  posttransfermode: 'transferMode/addTransferMode',
  gettransfermodebyid: 'transferMode/getTransferModeById',
  updatetransfermode: 'transferMode/updateTransferMode',
  searchTransferMode: 'transferMode/transferModeLazySearch',
  approvedIndent: 'indentrequest/sugarmill_approved_indents?supplyType=',
  outwardIndentDetails: 'MF4transportPass/outward/getIndentById?id=',
  getTanks: 'tankRegistration/getTankReg',

  // getMf4TankDetails:'molassesStockTransfer/getstock?takeRegId=',
  getMf4TankDetails: 'stockin/getStockInInward?takeRegId=',
  getTankExistingCapacity: 'indentrequest/getExistingCapacity?',
  createMf4: 'MF4transportPass/outward/create',
  // tank maintanance
  addtankmaintanance: 'tankMaintanence/addTankMaintenance',
  getalltankmaintanance: 'tankMaintanence/getAllTankMaintenance',
  getbyid: 'tankMaintanence/getTankMaintenanceById',
  gettankbytankId: 'tankMaintanence/getTankMaintenanceByTankId',
  updateTankmaintanance: 'tankMaintanence/updateTankMaintenance',
  searchtankmaintanancelist: 'tankMaintanence/tankMaintenanceLazySearch',
  approvetank: 'tankMaintanence/tankMaintanenceApprove',
  // tank active inactive
  addtankactiveinactive: 'tankActiveInactive/addTankActiveInactive',
  getalltankactiveinactive: 'tankActiveInactive/getAllTankActiveInactive',
  gettankactivebyid: 'tankActiveInactive/getTankActiveInactiveById',
  updatetankactiveinactive: 'tankActiveInactive/updateTankActiveInactive',
  searchtankactivelist: 'tankActiveInactive/tankActiveInactiveLazySearch',
  tankactiveapprove: 'tankActiveInactive/tankActiveInactiveApprove',
  exportExcell: 'tankActiveInactive/exportExcel',
  //tank removel
  addtankremovel: 'tankRemoval/addTankRemoval',
  getalltankremovel: 'tankRemoval/getAllTankRemoval',
  gettankremovebyId: 'tankRemoval/getTankRemovalById',
  updatetankremovel: 'tankRemoval/updateTankRemoval',
  searchtankremovellist: 'tankRemoval/tankRemovalLazySearch',
  approvetankremovel: 'tankRemoval/tankRemovalApprove',
  exporttankremovelexcell: 'tankRemoval/exportExcel',
  // tanktype
  getalltanktype: 'tankType/getAllTankType',
  posttanktype: 'tankType/addTankType',
  gettanktypebyid: 'tankType/getTankTypeById',
  updatetanktype: 'tankType/updateTankType',
  searchTankType: "tankType/tankTypeLazySearch",

  // Supplytype
  postsupplytype: 'supplyType/addSupplyType',
  getallsupplytype: 'supplyType/getAllSupplyType',
  getsupplytypebyid: 'supplyType/getSupplyTypeById?id=',
  updatesupplytype: 'supplyType/updateSupplyType',
  searchsupply: 'supplyType/supplyTypeSearch',

  // Sub Brand
  postsubbrand: 'subBrand/addSubBrand',
  getallsubbrand: 'subBrand/getAllSubBrand',
  getsubbrandbyid: 'subBrand/getSubBrandById',
  updatesubbrand: 'subBrand/updateSubBrand',
  searchsubbrand: 'subBrand/subBrandSearch',
  getAllBrandMaster: 'brand/getAllBrand',
  searchBrandMaster: 'brand/brandLazySearch',
  getByIdBrandMaster: 'brand/getBrandById?id=',
  addBrandMaster: 'brand/addBrand',
  updateBrandMaster: 'brand/updateBrand',
  addConsumType: 'consumptionType/addConsumptionType',
  getByIdConsumptionType: 'consumptionType/getConsumptionTypeById?id=',
  updateConsumptionType: 'consumptionType/updateConsumptionType',
  getAllConsumptionType: 'consumptionType/getAllConsumptionType',
  searchConsumptionType: 'consumptionType/consumptionTYpeSearch',
  addCountry: 'country/addCountry',
  getAllCountry: 'country/getAllActiveCountry',
  getByIdCountry: 'country/getCountryById?id=',
  updateCountry: 'country/updateCountry',
  searchCountry: 'country/countryLazySearch',
  addDistrict: 'district/addDistrict',
  getAllDistrict: 'district/getAllActiveDistrict',
  searchDistrict: 'district/districtLazySearch',
  getByIdDistrict: 'district/getDistrictById?id=',
  updateDistrict: 'district/updateDistrict',
  addState: 'state/addState',
  getAllState: 'state/getAllActiveState',
  getByIdState: 'state/getStateById?id=',
  updateState: 'state/updateState',
  searchState: 'state/stateLazySearch',
  addDomain: 'domain/addDomain',
  getAllDomain: 'domain/getAllDomain',
  updateDomain: 'domain/updateDomain',
  getDomainById: 'domain/getDomainById',
  addMolassesType: 'molassesType/addMolassesType',
  getAllMolassesType: 'molassesType/getAllMolassesType',
  updateMolassesType: 'molassesType/updateMolassesType',
  getMolassesTypeById: 'molassesType/getMolassesTypeById?id=',
  addpackageType: 'packageType/addPackageType',
  getAllpackageType: 'packageType/getAllPackageType',
  updatepackageType: 'packageType/updatePackageType',
  getpackageTypeById: 'packageType/getPackageTypeById',
  addproductType: 'productType/addProductType',
  getAllproductType: 'productType/getAllProductType',
  updateproductType: 'productType/updateProductType',
  getproductTypeById: 'productType/getProductTypeById',
  addRoute: 'routeMaster/addRouteMaster',
  getAllRoute: 'routeMaster/getAllRouteMaster',
  updateRoute: 'routeMaster/updateRouteMaster',
  getRouteById: 'routeMaster/getRouteMasterById',
  addStatus: 'status/addStatus',
  getAllStatus: 'status/getAllStatus',
  updateStatus: 'status/updateStatus',
  getStatusById: 'status/getStatusById?id=',
  searchStatus: 'status/statusSearch',
  searchDomain: 'domain/domainSearch',

  saveUpdateEntityType: 'entityType/saveUpdateEntityType',
  getAllEntity: 'entityType/getAllEntityType',
  getEntityById: 'entityType/getEntityTypeById',
  validateEntityCode: 'entityType/validateEntityCode',
  getLicensesByEntity: 'entityType/getLicensesByEntity',

  getAvailableTank: 'stockin/availableStockTank',
  getAvailableGrade: 'stockin/availableStockGrade',
  getStateByCountryId: 'state/getStateByCountryId',
  getDistByStateId: 'district/getDistByStateId',
  districtLazySearch: 'district/districtLazySearch',
  searchRevenue: 'revenue/revenueSearch',
  searchRoute: 'routeMaster/routeMasterSearch',
  searchRawMaterial: 'rawMaterial/rawMaterialSearch',
  productTypeSearch: 'productType/productTypeSearch',
  penalitySearch: 'penalty/penaltySearch',
  searchPackageType: 'packageType/packageTypeSearch',
  searchPayment: 'payment/paymentSearch',
  searchMolassesType: 'molassesType/getMolassesSearch',
  // getallentitytypes:'entity/getEntityByTypeId',
  getallentitytypes: 'entity/getAllSugarMillEntity',
  getalldistwarehousentitytype: 'entity/getAllDistWarehouseEntity',

  // Spirit Type
  spiritAdd: 'spirit/addSpirit',
  spiritGelAll: 'spirit/getAllSpirit',
  spiritUpdate: 'spirit/updateSpirit',
  spiritGetbyId: 'spirit/getSpiritById',
  spiritSearch: 'spirit/spiritSearch',

  // vehicle make
  addVehicleMake: 'vehicle/addVehicle',
  getAllVehicleMake: 'vehicle/getAllVehicles',
  updateVehicleMake: 'vehicle/updateVehicle',
  getVehicleMakeById: 'vehicle/getVehicleById?id=',
  searchVehiclemake: 'vehicle/vehicleSearch',

  //vehicleModel
  addVehicleModel: 'vehicleModel/addVehicleModel',
  getAllVehicleModel: 'vehicleModel/getAllVehiclesModels',
  updateVehicleModel: 'vehicleModel/updateVehicleModel',
  getVehicleModelById: 'vehicleModel/getVehicleModelById?id=',
  searchVehicleModel: 'vehicleModel/vehicleModelSearch',

  // stage
  stageAdd: '/stage/addStage',
  stageGelAll: '/stage/getAllStages',
  stageUpdate: '/stage/updateStage',
  stageGetbyId: '/stage/getStageById?id=',
  stagesearch: 'stage/stageSearch',

  //mf4-recieved by distillery
  mf4getall: 'mf4receivedbydistillery/getAllMF4receiveByDistillery',
  distilleryinwardmollasees: 'mf4receivedbydistillery/inward/create',
  mf4getbyid: 'mf4receivedbydistillery/getmf4DistilleryDetailsById?id=',
  mf4update: 'mf4receivedbydistillery/updateMF4receiveByDistillery',
  mf4exceldownload: 'mf4receivedbydistillery/exportExcel',
  mf4lazysearch: 'mf4receivedbydistillery/mf4receive/lazysearch',
  mf4autodata: 'mf4receivedbydistillery/getmf4DistilleryDetailsByOutwardId?outwardId=',

  //indent-purchase-permit-request
  indentPurchasePermitRequestAdd: 'indentpurchasepermitrequest/addIndent',
  indentPurchasePermitRequestGelAll: 'indentpurchasepermitrequest/getAllIndent',
  indentPurchasePermitRequestUpdate: 'indentpurchasepermitrequest/updateIndent',
  indentPurchasePermitRequestGetbyId: 'indentpurchasepermitrequest/getIndentById?id=',
  indentPurchasePermitRequestSearch: 'indentpurchasepermitrequest/lazySearch',

  //Distillery ------ screens start ------------------------- /////
  ////indent request ///////
  getAllIndent: 'indentrequest/getAllIndent',
  addIndent: 'indentrequest/addIndent',
  getIndentById: 'indentrequest/getIndentById?id=',
  approveIndent: 'indentrequest/approveIndent',
  updateIndent: 'indentrequest/updateIndent',
  indentlazysearch: 'indentrequest/lazySearch',
  exceldownload: 'indentrequest/exportExcel',
  getautopopulate: 'indentrequest/getIndentDetails',
  getreserddetails: 'Allotmentrequest/getAllotmentDetails',
  getallotmentids: 'Allotmentrequest/getAllotmentNumber',

  //import-permit-request
  getAllImportPermit: 'indentimportpermitrequest/getAllIndentImport',
  getByIdImportPermit: 'indentimportpermitrequest/getIndentImportById?id=',
  AddImportPermit: 'indentimportpermitrequest/addIndentImport',
  UpdateImportPermit: 'indentimportpermitrequest/updateIndentImport',
  imppermitexceldownload: 'indentimportpermitrequest/exportExcel',
  importpermitlazySearch: 'indentimportpermitrequest/lazySearch',


  // Allotment-request
  allotmentrequestCreate: 'Allotmentrequest/addAllotment',
  allotmentrequestList: 'Allotmentrequest/getAllAllotment',
  allotmentrequestGetById: 'Allotmentrequest/getAllotmentById?id=',
  allotmentrequestUpdate: 'Allotmentrequest/updateAllotment',
  LazySearch: 'Allotmentrequest/lazySearch',
  allotmentexportExcel: 'Allotmentrequest/exportExcel',
  approveAllotment: 'Allotmentrequest/approveAllotment',
  consumptiontype: 'Allotmentrequest/getConsumptionTypes',
  updateallotmentrequest: 'Allotmentrequest/updateAllotmentRequest',
  approvelallotmentreq: 'Allotmentrequest/approveAllotmentRequest',

  //mf12 screen
  mf12registerCreate: 'mf12register/create',
  mf12registerList: 'mf12register/getAllmf12Register',
  mf12registerGetById: 'mf12register/getmf12RegisterById?id=',
  mf12registerUpdate: 'mf12register/update',
  mf12azySearch: 'mf12register/LazySearch',

  // pd8b distillation
  addProductionPD8b: 'productionPD8b/addProductionPD8b',
  getproductionPD8bById: 'productionPD8b/getproductionPD8bById?id=',
  updateProductionPD8b: 'productionPD8b/updateProductionPD8b',
  pd8blazySearch: 'productionPD8b/lazySearch',
  pd8bapproval: 'productionPD8b/approval',
  pd8aapprovedlist: 'productionPD8b/get/approved-pd8A',

  //mf6part1
  mf6part1Create: 'mf6part1/create',
  mf6part1List: 'mf6part1/getAllmf6part1',
  mf6part1GetById: 'mf6part1/getbyid?id=',
  mf6part1Update: 'mf6part1/update',
  mf6part1LazySearch: 'mf6part1/LazySearch',
  mf6part1gatpassdetail: 'mf6part1/autopop/value?gatepassnumber=',
  currentStock: 'molassesStockTransfer/currentStock/molassesbyentity',
  currentstockbytank: 'molassesStockTransfer/currentstock/bytank?takeRegId=',
  userdesignation: 'usermanager/worklocation/entity/designation',

  //mf6part2
  mf6part2Create: 'MF6Part2register/create',
  mf6part2List: 'MF6Part2register/getAllMF6Part2Register',
  mf6part2GetById: 'MF6Part2register/getMF6Part2RegisterById?id=',
  mf6part2Update: 'MF6Part2register/update',
  mf6part2LazySearch: 'MF6Part2register/LazySearch',

  //pd22 register of insurance
  pd22registrationAdd: 'PD22Registerofissuance/addPD22Registerofissuance',
  pd22registrationGetAll: 'PD22Registerofissuance/getAllPD22Registerofissuance',
  pd22registrationGetbyId: 'PD22Registerofissuance/getPD22RegisterofissuanceById?id=',
  pd22registrationUpdate: 'PD22Registerofissuance/updatePD22Registerofissuance',
  pd22lazySearch: 'PD22Registerofissuance/lazySearch',

  //pd-25(Pass for removal of spirit)
  PD25getAll: 'PD25Dispatch/getAllPD25Dispatch',
  PD25Add: 'PD25Dispatch/addPD25Dispatch',
  PD25GetbyId: 'PD25Dispatch/getPD25DispatchById?id=',
  PD25Update: 'PD25Dispatch/updatePD25Dispatch',
  PD25lazySearch: 'PD25Dispatch/lazySearch',

  //pd-26(Advice to accompany pass in the case if issue under bond))
  PD26getAll: 'PD26Dispatch/getAllPD26Dispatch',
  PD26Add: 'PD26Dispatch/addPD26Dispatch',
  PD26GetbyId: 'PD26Dispatch/getPD26DispatchById?id=',
  PD26Update: 'PD26Dispatch/updatePD26Dispatch',
  PD26lazySearch: 'PD26Dispatch/lazySearch',

  //pd8a -wash details
  pd8awashdetailsAdd: 'PD8aWashdetails/addPD8aWashdetails',
  pd8acreate: 'productionPD8a/create',
  pd8agetById: 'productionPD8a/byid?id=',
  pd8aupdate: 'productionPD8a/update',
  pd8alazySearch: 'productionPD8a/lazySearch',
  pd8aapproval: 'productionPD8a/approval',

  //pd9b-productionSummary
  PD9bProductionSumgetAll: "production-pd9b/pd9b-search",
  PD9bProductionSumAdd: "production-pd9b/create",
  PD9bProductionSumGetbyId: "production-pd9b/getby?id=",
  PD9bProductionSumUpdate: "production-pd9b/update",
  PD9bProductionSumlazySearch: 'PD9bProductionSum/lazySearch',
  getpd9breferenceno: 'production-pd9b/get/approved-pd9a',
  pd9bapprovel: 'production-pd9b/approval',

  // pd24 partwiseIssuance
  pd24IssuanceAdd: 'PD24PartwiseRegisterissurance/addPD24PartwiseRegister',
  pd24IssuanceGetAll: 'PD24PartwiseRegisterissurance/getAllPD24PartwiseRegister',
  pd24IssuanceGetbyId: 'PD24PartwiseRegisterissurance/getPD24PartwiseRegisterById?id=',
  pd24IssuanceUpdate: 'PD24PartwiseRegisterissurance/updatePD24PartwiseRegister',
  pd24lazySearch: 'PD24PartwiseRegisterissurance/lazySearch',

  //pd9a Rawmaterial
  pd9aRwamaterialAdd: 'production-pd9a/create',
  pd9aRwamaterialGetAll: 'production-pd9a/pd9a-search',
  pd9aRwamaterialGetbyId: 'production-pd9a/getby?id=',
  pd9aRwamaterialUpdate: 'production-pd9a/update',
  pd9aRawmateriallazySearch: 'PD9aRawMaterial/lazySearch',
  pd9aReferenceno: 'production-pd9a/get/approved-pd9',
  approvedpd9a: 'production-pd9a/approval',

  // pd9a section I
  lazysearchpd9a: 'pd9a/lazySearch',
  sectionIcreate: 'pd9a/createS1',
  sectionIupdate: 'pd9a/updateS1',
  sectionIgetbyid: 'pd9a/getByIdS1?id=',
  pd9asectionIref: 'pd9a/get/approvedPd9',

  //pd9a sectionII 
  sectionIIcreate: 'pd9a/creates2',
  // pd9a sectionIII
  sectionIIIcreate: 'pd9a/creates3',
  //pd9a sectionIV
  sectionIVcreate: 'pd9a/creates4',
  // pd9a sectionV
  sectionVcreate: 'pd9a/creates5',

  //pd9c Efficiency
  pd9cEfficiencyAdd: 'ProductionPD9c/create',
  pd9cEfficiencyGetAll: 'ProductionPD9c/lazySearch',
  pd9cEfficiencyGetbyId: 'ProductionPD9c/getById?id=',
  pd9cEfficiencyUpdate: 'ProductionPD9c/update',
  pd9cEfficiencylazySearch: 'PD9cEfficiencySum/lazySearch',
  pd9capprovel: 'ProductionPD9c/approval',
  pd9capprovelapi: 'ProductionPD9c/get/approved-pd9b',

  // pd10 form
  mf4gatepass: 'PD10/get/byMF4GatePass',
  mf4autopopulatedata: 'PD10/getAll',
  addPD10: 'PD10/addPD10',
  pd10lazySearch: 'PD10/lazySearch',
  pd10Byid: 'PD10/getById?id=',

  // ot production plan ///
  otProdlazySearch: 'otproductionplan/lazySearch',
  otProdgetById: 'otproductionplan/getById?id=',
  otProdcreate: 'otproductionplan/create',
  otProdupdate: 'otproductionplan/update',
  disttank: 'tankRegistration/getAllTankReg',
  vesseltanks: 'tankRegistration/vesseltanks',

  // yeatprocess //
  yeastcreate: 'OtYeastProcess/create',
  yeastupdate: 'OtYeastProcess/update',
  otnumber: 'OtYeastProcess/getOtNumbers',
  yeastnumber: 'OtYeastProcess/getVesselCount',
  yeastprocesslist: 'OtYeastProcess/lazySearch',
  viewyeastprocess: 'OtYeastProcess/getById',
  otplanbyyeastvesal: 'tankRegistration/yeastvessels?otplanid=',
  getYeastByyeastrefId: 'OtYeastProcess/getYeastById?id=',
  vessalstock: 'otproduction/currentstock/vessel?vesselid=',

  //prefermentorprocess ///
  prefermentationlazySearch: 'otprefermentationprocess/lazySearch',
  prefermentationupdate: 'otprefermentationprocess/update',
  prefermentationcreate: 'otprefermentationprocess/create',
  prefermentationgetbyid: 'otprefermentationprocess/getById?id=',
  prefermenterGetotnum: 'otprefermentationprocess/getOtNumbers',
  otdetails: 'otproductionplan/getByOtNumber?otNumber=',
  prefermentorvessalbyotid: 'tankRegistration/prefermentationvessels?otplanid=',
  yeastrefNobyotid: 'OtYeastProcess/yeastProcessNumForPreFerm?otNumer=',

  // fermentetion //
  fermentationcreate: 'otfermentationprocess/create',
  getlist: 'otfermentationprocess/lazySearch',
  getview: 'otfermentationprocess/getById',
  getotnumber: 'otfermentationprocess/getFerOtNumber',
  getfermetornumber: 'otprefermentationprocess/prefermentorRefNum',
  otfermenterdetails: 'otfermentationprocess/getById',
  fermentationvessels: 'tankRegistration/fermentationvessels',
  vesselcapacity: 'otproduction/currentstock/vessel',
  getvessaldata: 'otprefermentationprocess/getPrefermentorById',

  //indent purchase permit
  indentPurchaseAdd: 'indentpurchasepermitrequest/addIndent',
  indentPurchaseGetAll: 'indentpurchasepermitrequest/getAllIndent',
  indentPurchaseGetbyId: 'indentpurchasepermitrequest/getIndentById?id=',
  indentPurchaseUpdate: 'indentpurchasepermitrequest/updateIndent',

  //indent purchase request ////
  purchaserequestgetAllIndent: 'indentpurchaserequest/getAllIndent',
  purchaserequestaddIndent: 'indentpurchaserequest/addIndent',
  purchaserequestupdateIndent: 'indentpurchaserequest/updateIndent',
  purchaserequestgetIndentById: 'indentpurchaserequest/getIndentById?id=',
  purchaseexceldownload: 'indentpurchaserequest/exportExcel',
  searchpurchase: 'indentpurchaserequest/lazySearch',

  //import request ///
  getAllIndentImport: 'IndentImportrequest/getAllIndentImport',
  addIndentImport: 'IndentImportrequest/addIndentImport',
  updateIndentImport: 'IndentImportrequest/updateIndentImport',
  getIndentImportById: 'IndentImportrequest/getIndentImportById?id=',
  importexceldownload: 'IndentImportrequest/exportExcel',
  Importsearch: 'IndentImportrequest/lazySearch',

  //export order //
  exportgetAllIndentImport: 'exportorder/getAllexportorder',
  exportaddorder: 'exportorder/addexportorder',
  exportupdateexportorder: 'exportorder/updateexportorder',
  exportorderbyid: 'exportorder/getexportorderById?id=',
  indentexceldownload: 'exportorder/exportExcel',
  exportLazySearch: 'exportorder/lazySearch',

  // export permit request //
  exportaddpermit: 'permitrequest/addexportPermitRequest',
  exportpermitlist: 'permitrequest/getAllexportPermitRequest',
  exportpermitview: 'permitrequest/getexportPermitRequestById?id=',
  exportpermitedit: 'permitrequest/updateexportPermitRequest',
  excelpermtdownload: 'permitrequest/exportExcel',
  exportsearchapi: 'permitrequest/lazySearch',

  // mf-4 ///
  getgatepass: 'mf4acknowlegement/getAcknowlegementByGatePassNo',
  getmf4acklist: 'mf4acknowlegement/getAcknowlegements',
  updateMf4ack: 'mf4acknowlegement/acknowlegementApprove',

  /// mf-10 //// 
  getAllmf10MolassesEntry: 'mf10molassesentry/getAllmf10MolassesEntry',
  getmf10MolassesEntryById: 'mf10molassesentry/getmf10MolassesEntryById?id=',
  mf10add: 'mf10molassesentry/add',
  mf10update: 'mf10molassesentry/update',
  mf10LazySearch: 'mf10molassesentry/LazySearch',

  ///pd-11 ////
  getAllPD11RegisterOfIssuespirit: 'PD11RegisterOfIssuespirit/getAllPD11RegisterOfIssuespirit',
  getPD11RegisterOfIssuespiritById: 'PD11RegisterOfIssuespirit/getPD11RegisterOfIssuespiritById?id=',
  addPD11RegisterOfIssuespirit: 'PD11RegisterOfIssuespirit/addPD11RegisterOfIssuespirit',
  updatePD11RegisterOfIssuespirit: 'PD11RegisterOfIssuespirit/updatePD11RegisterOfIssuespirit',

  // Distillery - tank registration 
  getdistAllTankReg: 'tankRegistration/getAllTankReg',
  getAllTankRegistration: 'tankRegistration/getTankList',
  getTankListByRawMaterialId: 'tankRegistration/getTankList?rawMaterialId=',
  getRawMaterialByTankUsageGroupId: 'tankRawMaterial/getByTankUsageGroupId?groupCode=',

  getfromtanks: 'tankRegistration/getTankList',
  getTankRegById: 'tankRegistration/findTankApplication?id=',
  updateTankReg: 'tankRegistration/update',
  tankRegLazySearch: 'tankRegistration/tankRegLazySearch',
  vesseltype: 'vesseltypes/active',
  gettankregapplicationnum: 'tankRegistration/generateApplicationNumber?registrationType=',
  gettankviewlist: 'tankRegistration/searchTankApplications?listType=',
  addTankReg: 'tankRegsitrationDetials/createUpdateTankRequest',
  getlabledata: 'tankRegistration/tankCount',

  /// Distillery --- Stock in //////
  getAllStock: 'stockin/getAllStock',
  distilleryaddStock: 'stockin/addStock',
  distilleryavailableStockTank: 'stockin/availableStockTank',
  distilleryupdateStock: 'stockin/updateStock',
  distillerygetStockById: 'stockin/getStockById',
  distillerystockInLazySearch: 'stockin/stockInLazySearch',

  //Distillery--Pd8 /////
  pd8lazySearch: 'productionPD8/lazySearch',
  getproductionPD8ById: 'productionPD8/getproductionPD8ById?id=',
  addproductionPD8: 'productionPD8/addproductionPD8',
  updateProductionPD8: 'productionPD8/updateProductionPD8',
  approved8Mollases: 'productionPD8/approvedMollases',
  approvalProductionPD8: 'productionPD8/approval',

  // distillery --pd9 ////
  pd9create: 'production-pd9/create',
  updatepd9: 'production-pd9/update',
  getreferenceno: 'production-pd9/get/processed-pd8',
  getbyiddata: 'production-pd9/getby',
  listdata: 'production-pd9/pd9-search',
  approved: 'production-pd9/approval',

  // dropdown integraiton :: ss
  molasistype: 'molassesType/getAllMolassesType',
  tanktype: 'tankType/getAllTankType',
  getbalancedbytankid: 'inspectionreport/getByTankNumber',
  verificationType: 'verificationType/getAllVerificationType',
  supplytype: 'supplyType/getAllSupplyType',
  searchOrderRequest: 'indentrequest/lazySearch',
  orderRequestGetById: 'indentrequest/getIndentById?id=',
  indentApprove: 'indentrequest/indentRequestApprove',
  getAllLiquor: 'liquorCategory/getAllLiquorCategory',
  getAllLocation: 'location/getAllLocation',
  addLocation: 'location/addLocation',
  getLocationById: 'location/getLocationById?id=',
  updateLocation: 'location/updateLocation',
  getAllTankMaterial: 'tankMaterialType/getAllTankMaterial',
  getAllTransferMode: 'transferMode/getAllTransferMode',
  getAllDomainTrans: 'domain/getAllDomain',
  getAllRouteTrans: 'routeMaster/getAllRouteMaster',
  getAllPassbook: 'passbook/getAllPassBook',
  getPassbookById: 'passbook/getPassBookById?id=',
  getTankDetails: 'transportgeneration/getTransportGenTankDetailById',
  getTankTypeById: 'tankType/getTankTypeById?id=',
  getGradeById: 'molassesType/getMolassesTypeById',
  getTankMaterialById: 'tankMaterialType/getTankMaterialById?id=',
  downloadExcel: 'download/excel',
  downloadPdf: 'download/pdf',
  searchTankCon: 'tankConversion/tankConLazySearch',
  searchTankReg: 'tankRegistration/tankRegLazySearch',
  mf7Search: 'mf7register/mf7RegisterLazySearch',
  molassesFundSearch: 'molassesstoragefundreg/molassesStorageFundRegLazySearch',
  stockinSearch: 'stockin/stockInLazySearch',
  molassesFormatSearch: 'molassesFormat/molassesFormatLazySearch',
  mf5Part1Search: 'mF5Part1register/mF5Part1LazySearch',
  mf9Search: 'mf9productionforecast/mf9ProductionForecastLazySearch',
  transportGenPrint: 'transportgeneration/generatePrintViewById?id=403&code=MF4',
  searchLocation: 'location/locationSearch',
  trankRegApprove: 'tankRegistration/approveTankRegistration',

  // Gender
  postgender: 'gender/addGender',
  getallgender: 'gender/getAllGender',
  getgenderbyid: 'gender/getGenderById',
  updategender: 'gender/updateGender',
  searchGender: 'gender/genderSearch',

  // Applicationtype
  postapplicanttype: 'applicantType/addApplicantType',
  getallapplicanttype: 'applicantType/getAllApplicantTypes',
  getapplicanttypebyid: 'applicantType/getApplicantTypeById?id=',
  updateapplicanttype: 'applicantType/updateApplicantType',
  searchApplicantType: 'applicantType/applicantTypeSearch',

  // ApplicantStatus
  postapplicantstatus: 'applicantStatus/addApplicantStatus',
  getallapplicantstatus: 'applicantStatus/getAllApplicantStatus',
  getapplicantstatusbyid: 'applicantStatus/getApplicantStatusById?id=',
  updateapplicantstatus: 'applicantStatus/updateApplicantStatus',
  searchApplicantStatus: 'applicantStatus/applicationStatusLazySearch',

  // Penalty
  postpenalty: 'penalty/addPenalty',
  getallpenalty: 'penalty/getAllPenaltys',
  getpenaltybyid: 'penalty/getPenaltyById',
  updatepenalty: 'penalty/updatePenalty',

  // ModeofPayment
  postpayment: 'payment/addPayment',
  getallpayment: 'payment/getAllPayments',
  getpaymentbyid: 'payment/getPaymentById',
  updatepayment: 'payment/updatePayment',
  paymentSearch: 'payment/paymentSearch',

  // Measurement
  postmeasurement: 'measurement/addMeasurement',
  getallmeasurement: 'measurement/getAllMeasurement',
  getmeasurementbyid: 'measurement/getMeasurementId',
  updatemeasurement: 'measurement/updateMeasurement',
  measurementSearch: 'measurement/measurementSearch',
  mf9print: 'transportgeneration/generatePrintViewById',
  transportSearch: 'MF4transportPass/transportGenSearch',
  molassesReceiptSearch: 'molassesReciept/molassesReciptLazySearch',
  molassesAdminSearch: 'molassesAdminCharge/molassesAdminChargeLazySearch',
  inspectionReportSearch: 'inspectionreport/inspectionReportLazySearch',
  updateInspectionReport: 'inspectionreport/update',
  createInspectionReport: 'inspectionreport/create',
  inspectionReportGetById: 'inspectionreport/getInspectionReportById?id=',
  getAllInspectionReport: 'inspectionreport/getAllInspectionReport',
  updateMf9: 'mf9productionforecast/updateProductionForecast',
  addMf9: 'mf9productionforecast/createOrUpdateProductionForecast',
  addMf9FortNight: 'mf9fortnight/createOrUpdateFortnight',
  mf9GetById: 'mf9productionforecast/getProductionForecastById?id=',
  mf9FortnightById: 'mf9fortnight/getFortnightById?id=',
  molassesRegGetById: 'molassesstoragefundreg/getMolassesStorageFundRegById?id=',
  molassesRegAdd: 'molassesstoragefundreg/create',
  molassesRegUpdate: 'molassesstoragefundreg/update',
  molassesRegGetAll: 'molassesstoragefundreg/getAllMolassesStorageFundReg',

  // stage apis
  addStage: 'stage/addStage',
  getAllstages: 'stage/getAllStages',
  getStageByid: 'stage/getStageById?id=',
  updateStage: 'stage/updateStage',
  searchStage: 'stage/stageSearch',

  // Uom apis
  getAllUom: 'uom/getAllUOM',
  addUom: 'uom/addUOM',
  getUOmById: 'uom/getUOMById?id=',
  updateUom: 'uom/updateUOM',
  searchUom: 'uom/uomLazySearch',

  //fee apis
  getAllFee: 'fee/getAllFee',
  addFee: 'fee/addFee',
  getFeeByid: 'fee/getFeeById?id=',
  updateFee: 'fee/updateFee',
  searchFee: 'fee/feeSearch',

  // cartoon apis
  getAllcart: 'Cartons/getAllCartons',
  addcartoon: 'Cartons/addCartons',
  getcartoonByid: 'Cartons/getCartonsById',
  updatecartoon: 'Cartons/updateCartons',
  searchCartons: 'Cartons/cartonTypeSearch',

  // documentapis
  getAlldoc: 'documentType/getAllDocumentTypes',
  addDoc: 'documentType/addDocumentType',
  getDocbyid: 'documentType/getDocumentTypeById',
  updatedoc: 'documentType/updateDocumentTypeType',
  searchDocumentType: 'documentType/documentTypeSearch',


  // raw material ///
  getAllRawMaterial: 'rawMaterial/getAllRawMaterial',
  addRawMaterial: 'rawMaterial/addRawMaterial',
  getRawMaterialById: 'rawMaterial/getRawMaterialById',
  updateRawMaterial: 'rawMaterial/updateRawMaterial',
  getRawMaterialByCode: 'rawMaterial/getRawMaterialByCode',

  // Liquor Type
  getAllLiquorType: 'liquorType/getAllLiquorType',
  addLiquorType: 'liquorType/addLiquorType',
  updateLiquorType: 'liquorType/updateLiquorType',
  getLiquorTypeById: 'liquorType/getLiquorTypeById?id=',
  searchLiquorType: 'liquorType/getLiquorTypeLazySearch',

  // ingrediant master //
  getAllIngredients: 'ingredient/getAllIngredients',
  addIngredient: 'ingredient/addIngredient',
  updateIngredient: 'ingredient/updateIngredient',
  getIngredientById: 'ingredient/getIngredientById',
  searchIngredient: 'ingredient/ingredientSearch',

  // lable master ///
  getAllLabels: 'label/getAllLabels',
  addLable: 'label/addLabel',
  searchlabel: 'label/gstSearch',

  updateLable: 'label/updateLabel',
  getLabelById: 'label/getLabelById',

  // revenue master //
  getAllRevenues: 'revenue/getAllRevenues',
  addRevenue: 'revenue/addRevenue',
  updateRevenue: 'revenue/updateRevenue',
  getRevenueById: 'revenue/getRevenueById',

  // dip apis
  getAllDips: 'dipMaster/getAllDips',
  adddip: 'dipMaster/addDip',
  getDipById: 'dipMaster/getDipById?id=',
  updateDip: 'dipMaster/updateDip',
  searchDip: 'dipMaster/dipSearch',

  // department apis
  getAllDepartments: 'department/getAllDepartment',
  addDepartment: 'department/addDepartment',
  getDepartmentByid: 'department/getDepartmentId?id=',
  updateDepartment: 'department/updateDepartment',
  searchDepartment: 'department/departmentLazySearch',

  //tank shape
  getAllTankShapes: 'TankShape/getAllTankShapes',
  addTankshape: 'TankShape/addTankShape',
  getTankShapeByid: 'TankShape/getTankShapeById?id=',
  updateTankShape: 'TankShape/updateTankShape',
  searchTankShape: 'TankShape/tankShapeSearch',

  // licence category ////
  getLicenseCategoryes: 'licenseCategoryRequestDto/getLicenseCategoryes',
  addLicenseCategory: 'licenseCategoryRequestDto/addLicenseCategory',
  updateLicenseCategory: 'licenseCategoryRequestDto/updateLicenseCategory',
  getLicenseCategoryById: 'licenseCategoryRequestDto/getLicenseCategoryById',
  searchLincenseCategory: 'licenseCategoryRequestDto/licenseTypeSearch',


  //lincence
  getAllLincences: 'licence/getAllLicence',
  addLincence: 'licence/addLicenceType',
  getLincenceByid: 'licence/getLicenceById?id=',
  updateLincence: 'licence/updateLicence',
  findLicenseDetailsByLicenseCategory: 'license/findLicenseDetailsByLicenseCategory',

  // Census Data Api
  getAllCensus: 'censusData/getAllCensusData',
  addCensus: 'censusData/addCensusData',
  getCensusByid: 'censusData/getCensusById?id=',
  updateCensus: 'censusData/updateCensusData',
  searchCencus: 'censusData/censusDataSearch',

  // tank material apis
  getalltankmaterial: 'tankMaterialType/getAllTankMaterial',
  addtankmaterial: 'tankMaterialType/addTankMaterial',
  getTankmaterialById: 'tankMaterialType/getTankMaterialById?id=',
  updateTankMaterial: 'tankMaterialType/updateTankMaterial',
  searchTankMaterial: 'tankMaterialType/tankMaterialLazy',

  // Licensee
  postLicensee: 'licensee/addLicenseType',
  getLicenseeByid: 'licensee/getLicenseeById?id=',
  getAllLicensee: 'licensee/getAllLicensee',
  updateLicensee: 'licensee/updateLicensee',
  searchLicensee: 'licensee/licenseeSearch',

  // YearMaster
  postYear: 'year/addYear',
  getAllYear: 'year/getAllYear',
  getYearByid: 'year/getYearId?id=',
  updateYear: 'year/updateYear',
  searchYear: 'year/yearSearch',

  //License
  postLicence: 'licence/addLicenceType',
  getAllLicence: 'licence/getAllLicence',
  getLicenceByid: 'licence/getLicenceById?id=',
  updateLicence: 'licence/updateLicence',
  searchLicence: 'licence/licenceSearch',

  // Tank Cover Type api
  getAllTankCoverType: 'tankCoverType/getAllTankCoverTypes',

  addTankCoverType: 'tankCoverType/addTankCoverType',
  getTankCoverTypeByid: 'tankCoverType/getTankCoverTypeById',
  updateTankCoverType: 'tankCoverType/updateTankCoverType',
  searchTankCoverType: 'tankCoverType/tankCoverTypeSearch',

  // liquor category Apis

  liquorCategorySearch: 'liquorCategory/getLiquorCategorySearch',
  getAllLiquorCategory: 'liquorCategory/getAllLiquorCategory',
  getLiquorcatgByid: 'liquorCategory/getLiquorCategoryById',
  addLiquorCategory: 'liquorCategory/addLiquorCategory',
  updateLiquorCategory: 'liquorCategory/updateLiquorCategory',

  // Entity Apis
  getAllEntityType: 'entityType/getAllEntityType',
  getActiveEntityType: 'entityType/getActiveEntityType',

  //ticket status apis

  getTicketStatusCode: 'ticketstatus/code',
  addTicketStatus: 'ticketstatus/add',
  getTicketStatusList: 'ticketstatus/getlist',
  getTicketStatusById: 'ticketstatus/getById/',
  editTicketStatus: 'ticketstatus/update',
  searchTicketStatus: 'ticketstatus/search',
  getAllActiveTicketStatus: 'ticketstatus/allactive',


  // license type
  searchLicenseType: 'licenseType/licenseTypeSearch',
  getAllLicenseType: 'licenseType/getAllLicenseType',
  addLicenseType: 'licenseType/addLicenseType',
  updateLicenseType: 'licenseType/updateLicenseType',
  getLicenceTypeById: 'licenseType/getLicenseTypeById',

  // taulk apis
  getAllTaulk: 'talukMaster/getAllActiveTaluk',
  getTaulkById: 'talukMaster/getTalukById',
  addTaulk: 'talukMaster/addTaluk',
  searchTaulk: 'talukMaster/talukLazySearch',
  getTaulkByDistId: 'talukMaster/getTalukByDistrictId',

  // Category
  getAllCategory: 'category/getAllCategory',
  getCategoryById: 'category/getCategoryById?id=',
  addCategory: 'category/addCategory',
  updateCategory: 'category/updateCategory',
  searchCategory: 'category/cateorySearch',

  // SubCategory
  getAllSubCategory: 'subCategory/getAllSubCategory',
  getSubCategoryById: 'subCategory/getSubCategoryById?id=',
  addSubCategory: 'subCategory/addSubCategory',
  updateSubCategory: 'subCategory/updateSubCategory',
  searchSubCategory: 'subCategory/gstSearch',

  //helpdesk user management
  getemploymentstatus: 'employment-status',
  getupdatereason: 'update-reason',
  getrolemaster: 'role-master',
  getuserbyrole: 'user/backupUsers/byRole?roleId=',
  getuserbyroleedit: 'user/backupUsers/byRole?roleId=',
  getuserbyroleedituser: '&userId=',
  getuseremployeeid: 'user/employeeId',
  adduser: 'user',
  gethelpdeskuserbyid: 'user/',
  getusersearch: 'user/search',
  edituser: 'user',
  userloginhistory: 'user/login-history',
  usergenerateotp: 'authentication/email/generate-otp?emailId=',
  userverifyotp: 'authentication/verify/otp',
  getUserState: 'commonmaster/country',
  getUserDistrict: 'commonmaster/district',
  getuserdistrict: 'location/findDistrictByStateCode?stateCode=',
  salutationsActive: 'api/masterValues/findDropDownMasterOnMaster?dropDownKey=SALUTATION',
  designationActive: 'api/masterValues/findDropDownMasterOnMaster?dropDownKey=DESIGNATION',
  entitynameActive: 'api/masterValues/findDropDownMasterOnMaster?dropDownKey=ENTITY_TYPE',
  departmentActive: 'api/masterValues/findDropDownMasterOnMaster?dropDownKey=DEPARTMENT',
  entitytypedropdown: 'commonmaster/entitytype',
  getUserTaluk: 'commonmaster/taluk',
  getEntityType: 'entity/activelist',
  // GST Master
  getAllGst: 'gst/getAllGst',
  getGstById: 'gst/getGstById?id=',
  addGst: 'gst/addGst',
  updateGst: 'gst/updateGst',
  searchGst: 'gst/gstSearch',
  update: 'talukMaster/updateTaluk',
  getTaulkByDistrictId: 'talukMaster/getTalukByDistrictId',

  // Village apis
  getAllActiveVillages: 'villageMaster/getAllActiveVillage',
  getVillageById: 'villageMaster/getVillageById',
  addVillage: 'villageMaster/addVillage',
  updateVillage: 'villageMaster/updateVillage',
  searchVillage: 'villageMaster/villageLazySearch',
  getVillageTalukId: 'villageMaster/getVillageByTalukId',

  // Block apis
  getAllBlocks: 'blockMaster/getAllActiveBlock',
  addBlock: 'blockMaster/addBlock',
  getBlockById: 'blockMaster/getBlockById',
  updateBlock: 'blockMaster/updateBlock',
  searchBlock: 'blockMaster/blockLazySearch',

  // municipality apis
  getAllMunicipality: 'municipalityMaster/getAllActiveMunicipality',
  addMunicipality: 'municipalityMaster/addMunicipality',
  getMunicipalityById: 'municipalityMaster/getMunicipalityById',
  updateMunicipality: 'municipalityMaster/updateMunicipality',
  searchMunicipality: 'municipalityMaster/municipalityLazySearch',

  // corporation apis
  getAllCorporation: 'corporationMaster/getAllActiveCorporation',
  addCorporation: 'corporationMaster/addCorporation',
  getCorporationByid: 'corporationMaster/getCorporationById',
  updateCorporation: 'corporationMaster/updateCorporation',
  searchCorporation: 'corporationMaster/corporationLazySearch',

  // item apis
  getAllItems: 'item/getAllItem',
  addItem: 'item/addItem',
  getItemById: 'item/getItemById',
  updateItem: 'item/updateItem',
  searchItem: 'item/itemSearch',

  // store Master apis
  addStore: 'store/addStore',
  getAllStores: 'store/getAllStores',
  getStoreByid: 'store/getStoreById',
  updateStore: 'store/updateStore',
  searchStore: 'store/storeSearch',
  //pass cancelation url,
  wholesaletransportcancel: 'transportPassCancellation/transportCancellationLazySearch',
  gettransportcancelpass: 'transportPassGeneration/cancellation?transportNo=',
  createtransportpasscancellation: 'transportPassCancellation/addtransportPassCancellation',
  passViewGetByid: 'transportPassCancellation/getById?id=',

  //stock in hand url
  stockInhandlazySearch: 'stockInHand/stockInHandLazySearch',
  stockInHandDropDown: 'stockIn/stockInHandDropDown',
  // Licence Management Url,
  newlicencewholesale: 'wholesale/createUpdateWholeSaleLicense',
  newlicenceSugarMillINdustriesInsideUP: 'industriesRegistration/addIndustriesRegistration',
  b1reg: 'brewery/b1/addBreweryB1Form',
  mb1reg: 'microbrewery/mb1/addMicroBreweryMB1Form',
  mb4reg: 'microbrewery/mb4/addMicroBreweryMB4Form',
  mb3reg: 'microbrewery/mb3/addMicroBreweryMB3Form',
  mb6reg: 'microbrewery/mb6/addMicroBreweryMB6Form',
  mb2reg: 'microbrewery/mb2/addMicroBreweryMB2Form',
  mb5reg: 'microbrewery/mb5/addMicroBreweryMB5Form',
  v1reg: 'brewery/v1/addBreweryVForm',
  v2reg: 'brewery/v1/addBreweryVForm',
  mb7reg: 'microbrewery/mb7/addMicroBreweryMB7Form',
  fl9reg: 'retailRegistration/addretailRegistrationForms',
  fl9Areg: 'retailRegistration/addretailRegistrationForms',


  // license Distillery

  b19reg: 'brewery/b19/addBreweryB19Form',
  Distillery_fl1: '/DistilleryFL/addDistilleryFL',
  //Licence Modification
  // User
  licenceModificationUserAdd: 'licencemodificationlist',
  licenceModificationUserEdit: 'licencemodificationlist/',
  licenceModificationUserGetAll: 'licencemodificationlist',
  // Deo Assigned List
  licenceModificationDEOassignedAdd: 'licencemodificationlist',
  licenceModificationDEOassignedEdit: 'licencemodificationlist/',
  licenceModificationDEOassignedGetAll: 'licencemodificationlist',
  // Excise office List
  licenceModificationExciseAssignedAdd: 'licencemodificationlist',
  licenceModificationExciseAssignedEdit: 'licencemodificationlist/',
  licenceModificationExciseAssignedGetAll: 'licencemodificationlist',

  // Excise office List
  licenceModificationExciseCommissionerAssignedAdd: 'licencemodificationlist',
  licenceModificationExciseCommissionerAssignedEdit: 'licencemodificationlist/',
  licenceModificationExciseCommissionerAssignedGetAll: 'licencemodificationlist',
  //stockin 
  getdetailsbytransportno: "stockIn/getAcknowlegementByGatePassNo",
  addstockinn: "stockIn/addStockIn",
  getallstock: "stockIn/getAllStockIn",
  //Warehouse Registration

  addWarehouseRegistration: 'wareHouseRegistration/addWareHouseRegistration',
  getAllWarehouseList: 'warehouseRegistrationList',
  warehouseListgetbyid: 'warehouseRegistrationList/',

  //Hotel Bar Registration
  addHotelBarRegistration: 'hotelRegistration/addHotelRegistration',
  //RegistrationforBonds
  postbondsregistrations: 'registrationBond/addRegistrationBond',
  //CustomBonds
  addcustombondcompany: 'customBondWareHouseCompany/addCustomBondWareHouseCompany',
  addcustombondindividual: 'customBondWareHouseindividual/addCustomBondWareHouseIndividual',
  addcustombond: 'customBandWareHouse/addCustomBondWareHouse',
  // District Wholesale registration

  addDistrictWholesaleRegistration: 'districtWholesaleRegistration/addDistrictWholesaleRegistration',

  //wholesale Registration
  addWholeSaleRegistration: 'wholeSaleRegistration/addWholeSaleRegistration',
  addWholeSaleRegistrationdist: 'districtwholesale/addDistrictWholeSale',
  addfl7c: 'fl7c',
  addfl36: 'fl36',
  addfl23: 'fl23',
  addreturnworklist: 'addreturnworklist',
  stockAdjustment: 'StockAdjustment',
  // License Api's

  getApplicationNo: 'license/generateApplicationNumber',
  findFinancialYear: 'license/findFinancialYear',
  findCheckList: 'license/findCheckList',
  createLicense: 'license/createUpdateLicenseDetails',
  saveUpdateSiteDetails: 'license/saveUpdateSiteDetails',
  saveSecurityAmount: 'license/saveSecurityAmount',
  isGroupCodeExist: 'license/masters/isGroupCodeExist',
  saveUpdateGroupMaster: 'license/masters/saveUpdateGroupMaster',
  findGroupMasterList: 'license/masters/findGroupMasterList',
  isRetailShopExist: 'license/masters/isRetailShopExist',
  saveUpdateRetailShops: 'license/masters/saveUpdateRetailShops',
  findRetailShopList: 'license/masters/findRetailShopList',
  findByRetailShopId: 'license/masters/findByRetailShopId',
  createSugarmillLicense: 'sugarmill/createUpdateSugarmillLicense',
  bondWareHouseLicense: 'bondWareHouse/createUpdateBondWareHouseLicense',
  retailLicense: 'retail/createUpdateRetailLicense',
  distilleryLicense: 'distillery/createUpdateDistilleryLicense',
  hbrLicense: 'hbr/createUpdateHBRLicense',
  loginUser: 'authentication/login',
  createCustomer: 'authentication/saveCustomer',
  mailCheck: 'authentication/checkEmail',
  mobileCheck: 'authentication/checkMobileNumber',
  aadharCheck: 'authentication/checkAadharNumber',
  panNoCheck: 'authentication/checkPanNumber',
  userNameCheck: 'authentication/checkUserName',
  passwordReset: 'authentication/passwordReset',
  generateOTP: 'authentication/forgotPassword/generate-otp',
  verifyHelpdeskOtp: 'authentication/verify/otp',
  getCustomerById: 'user/getUserById',
  updateCustomer: 'user/saveUpdateUser',
  getUserByRole: 'user/getUserByRole',
  getRoleByuser: 'user/getUserByRole',
  getdesignationbyuser: 'user/getUserByRole',
  getDistrictBYState1: 'user/getUserByRole',
  searchLicenseApps: 'license/searchLicenseApplications',
  findLicenseApplication: 'license/findLicenseApplication',
  saveUpdatePaymentDetails: 'license/saveUpdatePaymentDetails',
  saveUpdateCheckList: 'license/saveUpdateCheckList',
  saveSiteVisitOfficer: 'license/saveSiteVisitOfficer',
  findWorkFlowDetailsByLoginUserDesignation: 'api/master/findWorkFlowDetailsByLoginUserDesignation',
  findWorkFlowByModuleAndSubModule: 'api/master/findWorkFlowByModuleAndSubModule',
  findPaymentDetails: 'license/findPaymentDetails',
  findApplicationDistrict: 'license/findApplicationDistrict',
  initiateApplicationWorkFlow: 'license/initiateApplicationWorkFlow',
  processSiteVisitWorkflow: 'license/processSiteVisitWorkflow',
  isCustomerBWFLParentExist: 'license/isCustomerBWFLParentExist',
  searchAuthorizePerson: 'license/searchAuthorizePerson',
  saveUpdateBWFLAuthorizePerson: 'license/saveUpdateBWFLAuthorizePerson',
  findAuthorizedPersonDetails: 'license/findAuthorizedPersonDetails',
  isCustomerBondLicenseEligible: 'license/isCustomerBondLicenseEligible',
  findLicenseFee: 'applicationConfiguration/findLicenseFee',

  // Notification api's
  registerToken: 'api/notification/register',
  sendNotification: 'api/notification/sendNotification',
  findTop5Notification: 'api/notification/findTop5Notification',
  unsubscribeTopics: 'api/notification/unsubscribeTopics',
  updateIsReadNotification: 'api/notification/updateIsReadNotification',


  //BondeLicence
  addBondLicense: 'registrationBond/addRegistrationBond',
  getBondLicense: 'registrationBond/getRegistrationBondById?id=',

  //masterWareHouselicense
  masterWareHouseLicense: 'masterWareHouse/createUpdateMasterWareHouseLicense',

  //masterWareHouselicense
  createUpdateBhangLicense: 'bhang/createUpdateBhangLicense',

  //BWFL Parent
  createUpdateBWFLLicense: 'bwfl/createUpdateBWFLLicense',

  //licencelist
  getlicencelist: 'licenceapplicationlist',
  getrenewallist: 'renweallicenselist',
  addlicencelist: 'renweallicenselist',
  getmodeofpay: 'modeofpay/',
  getByid1: 'licenceapplicationlist/',
  getByid2: 'renweallicenselist/',
  getlicencdetails: 'applylicence/',
  getByid: 'companyapplicationlicencedetails/',
  getBranch: 'licencebranch',
  getType: 'licencetype',
  getDistrict: 'districtlist/',
  getState: 'statelist/',

  //applylicence
  getBranchs: 'licencebranch',
  addLicenceType: 'applylicence',
  getTypes: 'licencetype',

  // designation apis
  getAllActiveDesignation: 'designation/getAllActiveDesignation',
  saveUpdateDesignation: 'designation/saveUpdateDesignation',
  getAllDesignation: 'designation/getAllDesignation',
  getByDesignationId: 'designation/getDesignationById',
  getAllActiveEntity: 'entityType/getActiveEntityType',
  getDesignationByEntyTypeId: 'designation/getDesignationByEntityTypeId',
  getDesignations: 'designation/getAllActiveDesignation',
  validateDesignationCode: 'designation/validateDesignationCode',

  // For notification service
  findAllNotification: 'api/notification/findAllNotification',

  // Product
  getAllProduct: 'product/getAllProduct',
  searchProduct: 'product/productSearch',
  addProduct: 'product/addProduct',
  getProductById: 'product/getProductById?id=',
  updateProduct: 'product/updateProduct',

  // SubProduct
  getAllSubProduct: 'subProduct/getAllSubProduct',
  addSubProduct: 'subProduct/addSubProduct',
  getSubProductById: 'subProduct/getSubProductById?id=',
  searchSubProduct: 'subProduct/subProductSearch',
  updateSubProduct: 'subProduct/updateSubProduct',

  //Exports
  ExportsOfNarcoticDrugs: 'exportsOfNarcoticDrugs/addExportsOfNarcoticDrugs',
  ImportsOfNarcoticDrugs: 'importsOfNarcoticDrugs/addImportsOfNarcoticDrugs',

  // strength
  getAllStrengths: 'strength/getAllStrengths',
  addStrength: 'strength/addStrength',
  getByStrengthId: 'strength/getStrengthById',
  updateStrength: 'strength/updateStrength',
  searchStrength: 'strength/strengthSearch',

  //Elottery
  //User registration
  addUserRegistrationElottery: 'eLotteryUserReg/addELotteryUserReg',

  //distillery Registration,
  addDistilleryRegistration: 'distilleryRegistration/addDistilleryRegistration',

  //distillery Registration,
  addDistilleryRegistrationOutsideUP: 'RegOfUnitsOutSideUp/addUnitsOutsideUPForCSDSupply',

  // Registration of units
  AddRegistrationofunits: 'registrationOfUnits/addRegistrationOfUnits',

  // ocassionalbar
  Ocassionalbaradd: 'ocassionalBarLicence/addOcassionalBarLicence',

  //Import of liqour from other country
  addImportsOfLiqour: 'importForeignLiquor/addImportForeignLiquor',

  //INstitute For purchase of spirit
  addInstituteforpurchase: 'spiritPurchase/savePurchaseSpirit',

  // brewery registration
  addBreweryRegistration: 'breweryRegistration/addRegistrationBond',
  getBreweryRegistration: 'breweryRegistration/getAllBreweryRegistration/',

  //Tanktransfer
  addtanktransfer: 'tankTransfer/addTankTransfer',
  getalltankransfer: 'tankTransfer/getAllTankTransfer',

  // UserManagement apis
  saveUpdateUser: 'user/saveUpdateUser',
  getAllUsers: 'user/getAllUser',
  getUserById: 'user/getUserById',
  updateUser: 'user/updateUser',

  // entityMaster apis
  getAllEntitys: 'entityType/getActiveEntityType',
  getEntityByTypeId: 'entity/getEntityByTypeId',
  getworkflowbyentityid: 'entityType/getWorkFlowScreensByEntityTypeId',

  // authentication
  checkUserName: 'authentication/checkUserName',
  checkEmail: 'authentication/checkEmail',
  checkMobileNumber: 'authentication/checkMobileNumber',


  //Tank Conversion
  getstockdetails: 'tankRegistration/getStockDetailsByTank',
  addtankconvesion: 'tankConversion/addTankConversion',

  //sugarmill
  addsugarmill: 'sugarMillRegistration/addSugarMillRegistration',

  //helpdesk url
  getbyidAssetTypeBrand: 'asset-type-brand/',
  getActiveAssettype: 'asset-type/active',
  getActiveAssetbrand: 'assetbrand/active',
  assetTypegetAll: 'asset-type',
  searchapi: 'asset-type/search',
  getUniquecode: 'asset-type/code',
  getassettypebrandUniquecode: 'asset-type-brand/code',
  addasset: 'asset-type',
  getbyidAsset: 'asset-type/',
  Getassettypebrand: 'asset-type-brand',
  searchMapAsset: 'asset-type-brand/search',
  AddMapAsset: 'asset-type-brand',
  updateMapAsset: 'asset-type-brand',
  issueFromGetall: 'issuefrom/getAll',
  siteActionTakenList: 'site-action-taken/filterstatussearch',
  issueFromAdd: 'issuefrom/addIssueFrom',
  issueFromUpdate: 'issuefrom/update',
  issueFromUniqueCode: 'issuefrom/code',
  issueFromActive: 'issuefrom/active',
  issueFromgetById: 'issuefrom/getById/',
  Getalldeviceaccessoriesstatus: 'device-accessories-status',
  getCodedevice: 'device-accessories-status/code',
  getAdd: 'device-accessories-status',
  getactive: 'device-accessories-status/active',
  getdevicesearch: 'device-accessories-status/search',
  getbyIdDevice: 'device-accessories-status/',
  getFAQ: 'helpdeskfaq/getAllfaq',
  getActiveFaq: 'helpdeskfaq/active',
  getsubcatogry: 'ticketsubcategory/getSubCategoryByCategoryId',
  getcatogry: 'ticketcategory/active',
  searchFAQ: 'helpdeskfaq/search',
  faqcode: 'helpdeskfaq/code',
  addfaq: 'helpdeskfaq/addFaq',
  faqGetbyid: 'helpdeskfaq/getFaqById',
  editfaq: 'helpdeskfaq/editFaq',
  //dashboard
  getdashboardlists: 'dashboard/getDashboardCount',

  //main dashboard
  mainDashboardList: 'ticket/maindasboard',
  districtWiseList: 'ticket/districtwiseticket',
  districtCategoryWiseList: 'ticket/districtcategorytwiseticket?fromDate=',
  // createticket
  createticket: 'ticket/addTicket',
  getallticket: 'ticket/getAllTicket',
  createCallDisconnectedTicket: 'ticket/createCallDisconnectedTicket',
  searchticket: 'ticket/searchUser?search=',
  serachbylicno: 'ticket/searchByLicenceNumber?applicationNumber=',
  getmemberbasedgroupid: 'helpdeskgroup/getUserByDesignationCode?code=HDFA',
  updateticketstatus: 'ticket/updateTicketStatus',

  //view and search list ticket filter
  getallsearchticket: 'ticket/searchTicket',

  //SLA RULE
  addSla: 'sla/addSlaConfiguration',
  addSlatemplate: 'sla/createSlaTemplate',
  getalltemplate: 'sla/getAllSlaTemplate',
  getalltemplatebyid: 'sla/getSlaTemplateById?id=',
  getallsms: 'sla/getAllslaSmstemplate',
  getallemail: 'sla/getAllslaemailtemplate',
  filterslatemplate: 'sla/slaTemplateSearch',

  //Actualprobelms
  getAllActualProbelmList: 'actualproblem/getAllActualProblem',
  actualprobelmlistgetbyId: 'actualproblem/getActualProblemById?id=',
  addproblem: 'actualproblem/addActualProblem',
  filteractualproblem: 'actualproblem/searchActualProblem',

  //ActionTaken
  getAllActionTakenList: 'actiontaken/getAllActionTaken',
  actiontakenlistgetbyId: 'actiontaken/getActionTakenById?id=',
  createaction: 'actiontaken/addActionTaken',
  updateaction: 'actiontaken/editActionTaken',
  getActiveActionTakenList: 'actiontaken/active',
  searchActionTaken: 'actiontaken/searchActionTaken',
  getUniqueCodeActionTaken: 'actiontaken/code',


  //assetbrand:
  getAllAssetBrand: 'asset-brand',
  searchAssetBrand: 'assetbrand/search',
  addAssetBrand: 'assetbrand/addbrand',
  getAssetUniqueCode: 'asset-brand/code',
  getByIdAssetBrand: 'assetbrand/getById/',
  updateAssetBrand: 'assetbrand/update',



  //tickets
  ViewTicketsbyId: 'ticket/getTicketById?id=',
  ticketstatus: 'ticketstatus/getAllStatus',
  deleteticket: 'ticket/deleteTicketById?id=',

  //probelmreported
  getAllProbelmReportedList: 'problemreported/getAllProblemReported',
  ProbelmReportedlistgetbyId: 'problemreported/getById/',
  problemreportadd: 'problemreported/addProblemReported',
  problemreportUpdate: 'problemreported/editProblemReported',
  filterproblems: 'problemreported/searchProblemReported',
  getUniqueCodeProblemReported: 'problemreported/code',
  problemsReportedActive: 'problemreported/allactive',
  //groups
  getallusergroup: 'helpdeskgroup/getUserByDesignationCode?code=',
  addhelpdeskgroup: 'helpdeskgroup/addgroup',

  //ticket categorgy
  getcategorycode: 'ticketcategory/code',
  addcategory: 'ticketcategory/addCategory',
  getallCategorybyid: 'ticketcategory/getCategoryById?id=',
  getallcategory: 'ticketcategory/getAllCategory',
  getallactivecategory: 'ticketcategory/active',
  editcategory: 'ticketcategory/editCategory',
  ticketsearchCategory: 'ticketcategory/searchCategory',

  //asset-list
  getAssetList: 'assetlist/search',
  getAssetNameBrandById: 'assetlist/getByassetbrandname/',
  getAssetSubtypeById: 'assetlist/getByassetsubtype/',
  getAssetListById: 'assetlist/getById/',
  addAsset: 'assetlist/addassetlist',
  updateAsset: 'assetlist/assetlistupdate',
  getSerialNo: 'assetlist/activelist',
  //asset-mapping
  assetMappingList: 'assetmap/search',
  assetMappingGetById: 'assetmap/getById/',
  addAssetMapping: 'assetmap/addassetmap',
  updateAssetMapping: 'assetmap/assetmapupdate',
  //asset accessories
  addassetaccessories: 'AssetAccessories/add',
  editassetaccessories: 'AssetAccessories/updateAssetAccessories',
  getassetaccessoriescode: 'AssetAccessories/code',
  getassetaccessoriessearch: 'AssetAccessories/search',
  getassetaccessorieslist: 'AssetAccessories/getlist',
  getdropdownassetaccessorieslist: 'AssetAccessories/getlist',
  getassetaccessoriesbyId: 'AssetAccessories/getById/',

  //shiftconfiguration
  getAllShiftConfigurartion: 'shift-config/getAll',
  getShiftConfigurationById: 'shift-config/',
  getShiftConfigurationUniqueCode: 'shift-config/code',
  addShiftConfiguration: 'shift-config/addShiftConfiguration',
  updateShiftConfiguration: 'shift-config/updateShiftConfig',
  searchShiftConfiguration: 'shift-config/Search',
  getShiftConfiguration: 'shift-config/active',

  //site-issue-report
  getIssueReportList: 'siteissuetype/search',
  getIssueReportById: 'siteissuetype/getById/',
  addSiteIssueType: 'siteissuetype/add',
  updateSiteIssueType: 'siteissuetype/update',

  //shiftworkingdays
  getAllShiftWorkingDays: 'shift-working-days/getAll',
  getShiftWorkingDays: 'shift-working-days/active',
  searchShiftWorkingDays: 'shift-working-days/Search',
  getShiftWorkingById: 'shift-working-days/',
  getShiftWorkingUniqueCode: 'shift-working-days/code',
  addShiftWorkingDays: 'shift-working-days/addShiftworkingdays',
  updateShiftWorkingDays: 'shift-working-days/updateShiftWorkingDays',
  //sla
  getAllSLA: 'sla/getAll',
  getSlaById: 'sla/getById/',
  getSlaUniqueCode: 'sla/code',
  addSLA: 'sla/add',
  updateSla: 'sla/update',
  searchSla: 'sla/search',

  //priority
  getAllPriority: 'priority/getAll',
  searchPriority: 'priority/search',
  getPriorityActive: 'priority/active',
  getPriorityById: 'priority/getById/',
  getPriorityUniqueCode: 'priority/code',
  addPriority: 'priority/add',
  updatePriority: 'priority/update',

  //grievance priority
  getAllGrievancePriority: 'GrievancePriority/getAll',
  getAllGrievanceCategory: 'grievanceCategory/getAllCategory',
  getGrievancePrioritySearch: 'GrievancePriority/Search',
  getGrievancePriorityActive: 'GrievancePriority/active',
  getGrievancePriorityById: 'GrievancePriority/',
  getGrievancePrioritybyId: 'Grievanceknowledge/getknowledgebyid/',
  getGrievancePriorityCode: 'GrievancePriority/code',
  addGrievancePriority: 'GrievancePriority/addPriority',
  updateGrievancePriority: 'GrievancePriority/updateGrievancePriority',

  //grievance priority
  getAllGrievanceWorkflow: 'grievanceWorkflow/getAll',
  //grievance sla
  getAllGrievanceSla: 'grievanceSla/getAll',
  getGrievanceSlaById: 'grievanceSla/',
  getGrievanceSlaCode: 'grievanceSla/code',
  getGrievanceSlaActive: 'grievanceSla/active',
  addGrievanceSla: 'grievanceSla/addSla',
  updateGrievanceSla: 'grievanceSla/updateGrievanceSla',
  getGrievanceSlaSearch: 'grievanceSla/Search',

  //workflow
  getAllWorkflow: 'workflow/getAll',
  searchworkflow: 'workflow/search',
  getWorkflowCode: 'workflow/code',
  addWorkflow: 'workflow/add',
  updateWorkflow: 'workflow/update',
  getWorkflowById: 'workflow/getById/',
  // template apis
  getTemplateAddress: 'template/address',
  getAllTemplateTypes: 'template/getAllTemplateTypes',
  getAllTemplateslist: 'template/getAllTemplates',
  getTemplateById: 'template/getTemplateById?id=',
  searchTemplate: 'template/searchTemplateByNameAndTypeAndStatus',
  addTemplate: 'template/addTemplate',
  editTemplate: 'template/updateTemplate',

  //accessories
  accessoriesActive: 'AssetAccessories/allactive',

  //subcategorgy
  subcategorycode: 'ticketsubcategory/code',
  addsubcategory: 'ticketsubcategory/addSubCategory',
  editsubcategory: 'ticketsubcategory/editSubCategory',
  getAllSubcategoryList: 'ticketsubcategory/getAllSubCategory',
  SubcategorylistgetbyId: 'ticketsubcategory/getSubCategoryById?id=',
  subcategorybycategoryid: 'ticketsubcategory/getSubCategoryByCategoryId?categoryid=',
  // getallcategory: 'ticketcategory/getAllCategory',
  // getallCategorybyid: 'ticketcategory/getCategoryById?id=',
  filtergetsubcategory: 'ticketsubcategory/searchSubCategory',

  //issues
  getallissues: 'issuedetails/getAllIssueDetails',
  getallissuesbyid: 'issuedetails/getIssueDetailsById?id=',
  addissuedetails: 'issuedetails/addIssue',
  updateissuedetails: 'issuedetails/updateIssue',
  getActiveIssueDetails: 'issuedetails/allactive',
  //knowledge
  getallknowlegeva: 'helpdeskknowledge/getallknowledgebase',
  getknowlegebyId: 'helpdeskknowledge/getknowledgebyid?id=',
  getKnowledgeByIssueId: 'helpdeskknowledge/getKnowledgeByIssueId?issueid=',
  addknowledge: 'helpdeskknowledge/addKnowledge',
  updateknowledge: 'helpdeskknowledge/updateKnowledge',
  getKnowledgeCode: 'helpdeskknowledge/getknowlegebaseid',
  getKnowledgeCount: 'helpdeskknowledge/getknowledgebasecountbystatus',
  getKnowledgeSolutionOrCount: 'helpdeskknowledge/getsolutionbyissuedetailsid?issueDetailsId=',
  getGrievanceknowledgebasecountbystatus:'Grievanceknowledge/getGrievanceknowledgebasecountbystatus',

  //fieldengineer
  // getFieldEngineerList: 'ticket/getAll',
  getFieldEngineerList: 'ticket/getByassignlist',
  getFieldEngById: 'ticket/getById?id=',
  updatFieldEng: 'ticket/updatefileder',
  searchTicket: 'ticket/search',
  ticketCount: 'ticket/count?date=',

  //deviceList
  addDevice: 'device/add',
  getAllDevice: 'device/getAll',
  getDeviceById: 'device/getById/',
  updateDevice: 'device',
  searchDevice: 'device/search',

  //device lost
  deviceLostList: 'devicelost/getlist',
  deviceLostGetById: 'devicelost/getById/',
  addDeviceLost: 'devicelost/add',

  //device Mapping
  deviceMapping: 'device-registration/manualdevicemapping',
  validateDevice: 'device/getdeviceidverify?deviceNumber=',
  getShopDetails: 'device/getShopCodelist?shopCode=',
  //changePassword
  changePassword: 'user/changePassword',
  getShopCode: 'device/getShopCode?deviceNumber=',

  //view profile
  viewProfile: 'user/',

  //notification
  flagList: 'ticket/flaglist',
  flagUpdate: 'ticket/flagupdate',

  //knowldegbase grievance
  grievanceKnowledgeBase: 'Grievanceknowledge/getallknowledgebase',
  addKnowledgeBase: 'Grievanceknowledge/addKnowledge',
  updateKnowledgeBase: 'Grievanceknowledge/updateKnowledge',
  getCode: 'Grievanceknowledge/getknowlegebaseCode',
  getKBById: 'Grievanceknowledge/getknowledgebyid?id=',
  searchKnowledgeBase: 'Grievanceknowledge/Search',
  getSolutionCount: 'Grievanceknowledge/getsolutionbyissuedetailsid?issueDetailsId=',


  //excise officer
  exciseOfficerList: 'GrievanceExciseOfficer/getList',
  inspectOfficerList: 'grievanceInspectionOfficer/getList',
  inspectOfficerAssignToList: 'grievancereg/getisthandlingoff',
  //group
  getAllgroupList: 'helpdeskgroup/getAllgroup',
  getByIdgroupList: 'helpdeskgroup/getGroupById?id=',
  filtergetgname: 'helpdeskgroup/searchgroupByName',

  //faq
  getAllfaqList: 'helpdeskfaq/getAllfaq',
  getByIdfaqList: 'helpdeskfaq/getFaqById?id=',

  //sla
  getAllslaList: 'sla/getAllSlaConfiguration',
  slalistgetbyId: 'sla/getSlaConfigurationById?id=',
  filtergetrulename: 'sla/searchSlaByRuleName?rulename=',
  getallsmsList: 'sla/getAllslaemailtemplate',
  slatemplistgetbyId: 'sla/getSlaSmsTemplateById?id=',
  getSLAActive: 'sla/active',

  //Email Request
  getemailrequestList: 'emailrequest/getAllEmailRequest',
  getemailrequestListbyid: 'emailrequest/getEmailRequestById?id=',
  serachemailreq: 'emailrequest/searchEmailRequest',

  // role Apis
  getAllRoles: 'roleMaster/getAllRoleMaster',
  getAllActiveRoles: 'roleMaster/getAllActiveRoles',
  // getRoleByuser:'roleMaster/getAllActiveRolesByUserType',
  // getdesignationbyuser:'designation/getAllActiveDesignationByUserType',
  getDistrictBYState: 'location/findDistrictByStateCode?stateCode=UP',
  getroleById: 'roleMaster/getRoleMasterById',
  addRole: 'roleMaster/addRoleMaster',
  updateRole: 'roleMaster/updateRoleMaster',
  validateRoleCode: 'roleMaster/validateRoleCode',

  // activity apis
  getRoleMenuList: 'activity/getRoleMenuList',
  getMenuByUserId: 'activity/getMenuByUserId',
  getMenuForCustomer: 'activity/getLicenseMenus?moduleCode=licencemgnt',


  //priority
  getpriority: 'ticketpriority/getAllPriority',

  // reset password apis
  resetPassword: 'changePassword/resetPassword',
  verifyOtp: 'changePassword/verifyOtp',
  chanagePassword: 'changePassword/changePassword',

  //warehouse apis
  newbrandBondDetails: 'brandRegistration/getbondlicenceDetails',
  newbrandGetAll: 'brandRegistration/getAllbrandReg',
  getBrandById: 'brandRegistration/getbrandRegById?id=',
  newbrandAdd: 'brandRegistration/addbrandReg',
  newbrandUpdate: 'brandRegistration/updatebrandReg',
  approvalbrand: 'labelpayment/LabelPaymentApprove',
  getunitlicencename: 'brandRegistration/getbondlicenceDetails',
  getuserbyid: 'usermanager/getUserById',
  getworkflowbydesign: 'api/master/findWorkFlowDetailsByDesignation',
  searchreNewBrand: 'brandRegistration/searchRenewBrand',
  searchBrandReg: 'brandRegistration/brandRegLazySearch',

  // retails indent apis
  retailIndent: 'indentRequest/getAllIndentReq',
  addIndentretail: 'indentRequest/AddIndentReq',
  searchIndent: 'indentRequest/SearchindentRequest',

  //warehouse-TransportPassGeneration Apis
  addWarehouseTransportPassGen: 'warehouseTransportPassGen/addWarehouseTransportPassGen',
  getAllWarehouseTransportPassGen: 'warehouseTransportPassGen/getAllWarehouseTransportPassGen',
  getWarehouseTransportPassGenById: 'warehouseTransportPassGen/getWarehouseTransportPassGenById?id=',
  updateWarehouseTransportPassGen: 'warehouseTransportPassGen/updateWarehouseTransportPassGen',
  searchWarehouseTransportPassGen: 'warehouseTransportPassGen/searchWarehouseTransportPassGen',
  addTransportPassGen: 'transportPassGeneration/addTransportPassGen',
  getTransportPassGenById: 'transportPassGeneration/getTransportPassGenById',
  getAllWarehousetransportPassLazySearch: 'transportPassGeneration/transportPassLazySearch',
  getTransportPassGenByTransportNo: 'transportPassGeneration/getTransportPassGenByTransportNo',
  getDispatchedProductDetailByIndentNo: 'transportPassGeneration/getDispatchedProductDetailByIndentNo',

  //warehouse-Dispatch Apis
  getAllWarehouseDispatchLazySearch: 'transportPassGeneration/transportPassLazySearch',
  addWarehouseDispatch: 'dispatch/addDispatch',
  getAllWarehouseDispatch: 'dispatch/getDispatch',

  // bottlingplan
  getallbotlingplan: 'bottlingPlan/getbottlingPlanReg',
  addbottlingplan: 'bottlingPlan/addbottlingPlanReg',
  updatebottlingplan: 'bottlingPlan/updatebottlingPlanReg',
  getpalnbyid: 'bottlingPlan/getbottlingPlanById?id=',
  searchBottling: 'bottlingPlan/searchBottlingPlan',
  qrCodeMapping: 'qrcode/getAllQrCodeMapping',

  //warehouse-bwfl4 Apis
  AddBwfl4: 'bwfl4controller/addBwfl4',
  UpdateBwfl4: 'bwfl4controller/updateBwfl4',
  ListBwfl4: 'bwfl4controller/getAllBwfl4',
  GetByIdBwfl4: 'bwfl4controller/getBwfl4ById?id=',
  searchBwfl4: 'bwfl4controller/searchbwfl4',

  //warehouse-bwfl5 Apis
  addbwfl5: 'bwfl5controller/addbwfl5',
  updatebwfl5: 'bwfl5controller/updateBwfl5',
  listbwlf5: 'bwfl5controller/getAllBwfl5',
  getbyidbwfl5: 'bwfl5controller/getBwfl5ById?id=',
  searchBwfl5: 'bwfl5controller/searchbwfl5',

  //warehouse-Import Permits Apis
  addimport: 'importPermit/addimportPermit',
  createimportspermits: 'importPermit/getAllimportPermit',
  getimportpermitstatus: 'ImportPermitStatusList/getAllImportPermitStatusList',
  unitdetails: 'importPermit/parentunitDetails',
  warehousedetails: 'importPermit/getwarehouseDetails',
  getImportById: 'importPermit/getImportPermitById?id=',
  getimportstatusbyid: 'ImportPermitStatusList/getImportPermitStautsByID?id=',
  importstatus: 'ImportPermitStatusList/getAllImportPermitStatusList',
  getcosignment: 'ConsignementReceiptList/getAllConsignementReceiptList',
  updateImportById: 'importpermit/',
  searchpermit: 'importPermit/importPermitLazySearch',
  updatesatus: 'ImportPermitStatusList/addImportPermitAcceptance',

  //rollover
  getallrollover: 'rollOverStackEntry/getAllrolloverStack',
  addrollover: 'rollOverStackEntry/addAllrolloverStack',

  // ready for sale apis
  readyForSale: 'readyForSale',

  // retails reports apis
  retailReports: 'retailReports',
  liquorCategoryReport: 'liquorCategoryReports',
  salesReport: 'salesReport',
  stockreport: 'stockReport',

  // retails return apis
  retruns: 'return',

  //retails stockin apis
  stockIn: 'retailStockIn',
  searchStockIn: '/StockIn/SearchStockIn',
  addStockIn: '/StockIn/AddStockIn',

  //retails stock availabilty apis
  stockAvailability: 'stockAvailbility',
  productType: 'productType/',
  stockAvailabilityView: 'stockAvailbilityWholesale',

  //retails stock in hand apis
  retailStockInHand: 'stockInHand',

  //retails transaction list apis\
  retailTransaction: 'transaction',

  //retail form FL 13
  retailFormFL13: 'retailFormFL13Add',
  retailFormFL13Add: 'retailFormFL13Add',

  //retail form FL 24
  retailFormFL24: 'retailFormFL24Add',
  retailFormFL24Add: 'retailFormFL24Add',

  //retail form FL 42
  retailFormFL42: 'retailFormFL42',
  retailFormFL42Add: 'retailFormFL42Add',

  //retail Daily Abstract
  addDailyAbstract: 'retailDailyAbstractAdd',

  //retail Sales Ledger
  addSalesLedger: 'retailSalesLedgerAdd',

  //retail Wine Distribution
  addWineDistribution: 'retailWineDistributionAdd',

  // retail Form 25A
  formFL25Apart1: 'retailForm25APart1',
  formFL25Apart2: 'retailForm25APart2',
  formFL25Apart3: 'retailForm25APart3',
  formFL25Apart4: 'retailForm25APart4',

  // retail account purchaser
  accountPurchaser: 'retailacountPurrchaser',

  //Wholesale indent request
  getwholesaleindentbyid: 'indentrequest/getIndentById',
  approvewholesaleindent: 'indentrequest/approveIndent',
  gettarnsportpassbyid: 'stockIn/getAcknowlegementByGatePassNo',
  getallstockin: 'stockIn/getAllStockIn',
  getallstockinbysearch: 'stockIn/stockInLazySearch',
  getallstockinbyID: 'stockIn/getStockIn?id=',
  getallindentbysearch: 'indentRequest/indentRequestLazySearch',
  getindentacceptancebyid: 'indentRequest/getIndentRequest?id=',
  addindentacceptance: 'indentAcceptance/addIndentAcceptance',
  acceptanceStatusList: 'indentAcceptance/reports',

  //order pickup
  getallDraftorderpickup: 'orderPickUp/orderPickUpLazySearch',
  getSubmittedrecords: 'orderPickUp/orderPickUpLazySearch',
  getIndentByTransportNo: 'orderPickUp/getIndentDetailsByTransportNo?transportPassNo=',
  getOrderPickUpLog: 'orderPickUp/getOrderPickUpLogs?transportPassNo=',
  addOrderPickup: 'orderPickUp/addOrderpickUp',
  getIndentProductDetails: 'transportPassGeneration/getIndentDetailsByTransportNo?indentNo=',
  scanBarCode: 'stockInHand/getProductByBarCode?barCode=',

  getbyorderId: "orderPickUp/getOderPickUp?id=",
  addorderpickupp: "orderPickUp/addOrderpickUp",
  getorderpickupllogs: 'orderPickUp/getOrderPickUpLogs',
  getorderpickupAlllists: 'orderPickUp/addOrderpickUpByIndentNo',//new getbyid for all screens

  acceptedIndent: "indentAcceptance/acceptedIndents",
  orderpickupreset: "orderPickUp/resetOderPickUp",
  getindentbyindentNumm: "indentRequest/getIndentRequestByIndentNo?indentNo=", //previous one for pending getbyid
  getindentbyindentNum: "orderPickUp/getOrderPickUpByIndentNo?indentNo=",//new previos api
  getinprogressRecordsbyIndentNo: "orderPickUp/getIndentDetailsByIndentNo",
  //warehouse acceptance
  getallacceptance: 'indentAcceptance/getAllIndentAcceptanceStatusList',
  getindentbyid: 'indentRequest/getIndentRequest',
  indentacceptance: 'indentAcceptance/getIndentAcceptanceStatus',
  indentacceptbyid: 'indentAcceptance/addIndentAcceptance',
  getsearchindent: 'indentAcceptance/indentAcceptanceLazySearch',

  // accident 
  getallaccident: 'accidentalDetailscontroller/getAllAccidentalDetails',
  addaccident: 'accidentalDetailscontroller/addaccidentalDetails',
  getaccidentbyid: 'accidentalDetailscontroller/getAccidentalDetailsById?id=',
  upDateAccident: 'accidentalDetailscontroller/updateaccidentalDetails',

  // wholesaleindent in retail indent
  wholesaleIndent: 'wholeSaleIndent',
  liquorType: 'liquorType',
  getBrandSizeByProductId: 'brandsize',
  getoriginbydomainid: 'domain/getDomainByCode?domainCode=',

  //labelrequest
  liquortypeforlabel: 'LabelRegistration/getLiquorType',
  getunitdetails: 'LabelRegistration/getUnitDetails',
  getalllabelrequest: 'LabelRegistration/getAllLabelReg',
  addlabelregester: 'LabelRegistration/addLabelReg',
  getlabelbyid: 'LabelRegistration/getLabelRegById?id=',
  addlabledata: 'LabelImageReg/addLabelImageReg',
  getallpaymentreq: 'labelpayment/getAllLabelpayment',
  makepayment: 'labelpayment/addLabelPayment',

  //bondwarehouse orderpickup

  getallorderpickup: 'indentAcceptance/acceptedIndents',
  getwharehouseindentbyid: 'orderPickUp/addOrderpickUpByIndentNo?indentNo=',
  updateOrderPickup: 'orderPickUp/addOrderpickUp',
  getOrderPickUpLogs: 'orderPickUp/getOrderPickUpLogs',
  // getallorderpickup:'indentAcceptance/acceptedIndents',
  // getwharehouseindentbyid:'orderPickUp/addOrderpickUpByIndentNo?indentNo=',
  getOrderPickLogs: 'orderPickUp/getOrderPickUpLogs',
  resetOrderPickUp: 'orderPickUp/resetOderPickUp',

  // Retail Return from Customer
  getAllRetunFromCustomer: 'returnFromCustomer',

  // payment master apis
  getAllPayments: 'paymentMaster/getAllPaymentMasters',

  //newlicese-outside-up
  addindustrialoutsideup: '/industriesRegistration/addIndustriesRegistration',

  // molassesTraders
  addMolassesTraders: 'registrationMolassesTraders/addRegMolassesTraders',
  putMolassesTraders: 'registrationMolassesTraders/updateRegMolassesTraders',
  getAllMolassTraders: 'registrationMolassesTraders/getAllRegMolassesTraders',
  getMolassesTradersById: 'registrationMolassesTraders/getRegMolassesTradersById?id',
  searchMolassesTraders: '',

  //  Occasional Bar License/ EventBar Licence
  // addEventBarLicense: 'eventBar/createUpdateEventBarLicense',
  putEventBarLicense: 'ocassionalBarLicence/updateOcassionalBarLicence',
  getAllEventBarLicense: 'ocassionalBarLicence/getAllOcassionalBarLicence',
  getEventBarLicenseById: 'ocassionalBarLicence/getOcassionalBarLicenceId?id',

  //Belo Grade licence
  addBelowGrade: '/belowGradeRegistration/addBelowGradeRegistration',
  putBelowGrade: 'registrationBelowGrade/updateRegBelowGrade',
  getAllBelowGrade: 'registrationBelowGrade/getAllRegBelowGrade',
  getBelowGradeById: 'registrationBelowGrade/getRegBelowGradeById?id',
  //  licenseManagement/registrationBelowGrade/getRegBelowGradeById?id

  //workflow cofiguration
  getallentity: 'entityType/getActiveEntityType',

  addworkflowmanagement: 'api/master/createWorkFlowMaster',
  getallworkflow: 'api/master/findWorkFlowList',
  checkworkflowexist: 'api/master/isWorkFlowExist',
  getworkflowbysubmodulw: 'api/master/findWorkFlowByModuleAndSubModule',
  getworkflowbydesignation: 'api/master/findWorkFlowDetailsByLoginUserDesignation',


  // division
  postdivision: 'division/addDivision',
  getalldivision: 'division/getAllActiveDivision',
  getdivisionbyid: 'division/getDivisionById',
  updatedivision: 'division/updateDivision',
  searchDivision: 'division/divisionLazySearch',

  // feetype
  postfeetype: 'feetype/addFeeType',
  getallfeetype: 'feetype/getAllFeeType',
  getfeetypebyid: 'feetype/getFeeTypeById',
  updatefeetype: 'feetype/updateFeeType',
  searchFeetype: 'feetype/feeTypeSearch',

  // headcode
  addHeadcode: 'headcode/addHeadCode',
  getAllHeadcodes: 'headcode/getAllHeadCode',
  getallHeadcodebyid: 'headcode/getAllHeadCodeByFeeId',
  getByHeadcodeId: 'headcode/getHeadCodeById',
  updateHeadcode: 'headcode/updateHeadCode',
  searchHeadcode: 'headcode/searchHeadCode',

  // treasury
  addTreasury: 'treasury/addTreasury',
  getAllTreasury: 'treasury/getAllTreasury',
  getTreasuryById: 'treasury/getTreasuryById',
  updateTreasury: 'treasury/updateTreasury',
  searchTreasury: 'treasury/searchTreasury',

  // Description master
  addDescription: 'description/addDescription',
  getAllDescription: 'description/getAllDescription',
  getDescriptionById: 'description/getDescriptionById',
  updateDescription: 'description/updateDescription',
  searchDescription: 'description/searchDescription',

  //newlicense-bhang-cl8
  addBhangForms: 'bhangLicense/addBhangForms',

  //newlicense-bhang-cl7
  addNewLicenceBhangCLForm: 'bhangLicense/addBhangForms',

  //newlicense-bhang-cl10

  addcl9BhangForms: 'bhangLicense/addBhangForms',

  // form fl28
  getfl28: 'formfl28',
  // addcl11BhangForms: 'bhangLicense/addBhangForms',
  // addcl12BhangForms: 'bhangLicense/addBhangForms',

  // form fl35
  getFl35: 'fl35',
  // addst3BhangForms: 'bhangLicense/addBhangForms',

  // form fl25b
  getFl25B: 'fl25b',
  // retail fl30 apis

  getfl30: 'fl30',

  //Bhang ID14A  API
  // createDataBhangForm: 'bhangLicense/add14aBhang',
  getfl21: 'fl21',

  // formfl25 part1
  getFormfl25Part1: 'fl25Part1',

  // formfl25 part1
  getFormfl25Part2: 'fl25Part2',

  // formfl25 part3
  getFormfl25Part3: 'fl25Part3',

  // formfl25 part3
  getFormfl25Part4: 'fl25Part4',

  // addid16BhangForms: 'bhangLicense/addBhang16',
  // WareHouse bwfl6
  addBwfl6: 'bwfl6controller/addbwfl6',
  updateBwfl6: 'bwfl6controller/updateBwfl6',
  listBwfl6: 'bwfl6controller/getAllBwfl6',
  getByIdfl6: 'bwfl6controller/getBwfl6ById?id=',
  searchBwfl6: 'bwfl6controller/searchbwfl6',

  //wareHouse Bwfl7

  addBwfl7: 'bwfl7controller/addbwfl7',
  updateBwfl7: 'bwfl7controller/updateBwfl7',
  listBwfl7: 'bwfl7controller/getAllBwfl7',
  getByIdfl7: 'bwfl7controller/getBwfl7ById?id=',
  searchBwfl7: 'bwfl7controller/searchbwfl7',

  //wareHouse Bwfl8
  addBwfl8: 'bwfl8controller/addbwfl8',
  updateBwfl8: 'bwfl8controller/updateBwfl8',
  listBwfl8: 'bwfl8controller/getAllBwfl8',
  getByIdfl8: 'bwfl8controller/getBwfl8ById?id=',
  searchBwfl8: 'bwfl8controller/searchbwfl8',

  // WareHouse bwfl9
  addBwfl9: 'bwfl9controller/addbwfl9',
  updateBwfl9: 'bwfl9controller/updateBwfl9',
  listBwfl9: 'bwfl9controller/getAllBwfl9Requests',
  getByIdfl9: 'bwfl9controller/getBwfl9ById?id=',
  searchBwfl9: 'bwfl9controller/searchbwfl9',

  // WareHouse bwfl10
  addBwfl10: 'bwfl10controller/addbwfl10',
  updateBwfl10: 'bwfl10controller/updateBwfl10',
  listBwfl10: 'bwfl10controller/getAllBwfl10Requests',
  getByIdfl10: 'bwfl10controller/getBwfl10ById?id=',
  searchBwfl10: 'bwfl10controller/searchbwfl10',
  // addbwfl5: 'bwfl5_controller/addbwfl5',

  //  Financial Challana Deposit 
  challanaDepAdd: 'financialchellan/createFinancialChellan',
  //  updateChallanaDep: 'bwfl10controller/updateBwfl10',
  listChallanaDep: 'financialchellan/getAllFinancialChallan',
  getByIdChallanaDep: 'financialchellan/getFinancialChallanById?id=',
  searchChallana: 'financialchellan/searchFinancialChallan',

  //  devision url data
  listDevisionData: "division/getAllActiveDivision",
  // feetype api
  listfeetype: 'feetype/getAllFeeType',
  // hashcode
  getHeadcodeByfeeId: 'headcode/getAllHeadCodeByFeeId',
  getAllTrasuryById: 'treasury/getAllTreasuryByDivisionId',
  getTypeCodeDescriptionByid: 'description/getAllDescriptionByFeeIdandHeadId',
  getAlltreasure: 'treasury/getAllTreasury',
  // updatebwfl5: 'bwfl5_controller/updateBwfl5',
  // listbwlf5: 'bwfl5_controller/getAllStockIn',
  // getbyidbwfl5: 'bwfl5_controller/getBwfl5ById?id=',

  //newlicense-bhang
  addid15BhangForms: 'bhangLicense/addBhang15',
  // boxing warehouse

  getallboxing: 'boxingPlan/getboxingPlanReg',
  addboxing: 'boxingPlan/addboxingPlanReg',
  getallplans: 'boxingPlan/getPlanBYEntityID',
  getboxingplaneById: 'boxingPlan/getboxingPlanById?id=',
  searchBoxing: 'boxingPlan/searchBoxingPlan',
  updateBoxing: 'boxingPlan/updateboxingPlanReg',
  measurement: 'measurement/getAllMeasurement',



  // distillery recevier api's  :: ss

  // distillery recevier api's  :: ss
  receivercreate: 'otreceiver/create',
  receivergetotnumber: 'otreceiver/otnumber',
  recvgetrefno: 'otreceiver/fermentor/refnumber',
  recvtank: 'tankRegistration/receivervessels',
  recvcreate: 'otreceiver/create',
  recvupdate: 'otreceiver/update',
  getrecvrautopopulate: 'otfermentationprocess/getFermentorById',
  getsprint: 'spirit/getAllSpirit',

  //  sent to still 

  senttostilllazySearch: 'senttostill/lazySearch',
  getsenttostillbyId: 'senttostill/getById?id=',
  createsenttostill: 'senttostill/create',
  updatesenttostill: 'senttostill/update',
  senttostillgetotnumber: 'senttostill/otnumber',
  senttostillfermentrefno: 'senttostill/fermentor/refnumber',
  // senttostillfermentrefno:'tankRegistration/fermentationvessels',





  searchrecever: 'otreceiver/lazySearch',
  getviewdata: 'otreceiver/getById',


  //Brand regestration outsideup
  fincilayearforbrand: 'year/getAllFinancialYear',
  getallsubliquortype: 'subliquorType/getAllSubLiquorType',

  //Label regestration outsideup

  getapplicationnum: 'brandRegistration/getAllBrandApplicationNo',
  getbyapplicationnum: 'brandRegistration/getBrandDetailsByAppNumber?applicationno=',
  addlabel: 'LabelRegistration/addLabelReg',
  getalllabel: 'LabelRegistration/getAlllabelReg',
  getLabelRegbyId: 'LabelRegistration/getAlllabelRegById?id=',
  searchLabelReg: 'LabelRegistration/LabelRegLazySearch',

  //  warehouse Stock in
  getAllStockInDetails: 'stockIn/getAllStockIn',
  searchStockIndetails: 'stockIn/searchStockIn',
  addStockinDetails: 'stockIn/addStockIn',
  getWStockById: 'stockIn/getStockInById?id=',
  updateStockDetails: 'stockIn/updateStockIn',
  getAllstockInLazySearch: 'stockIn/stockInLazySearch',
  addStockin: 'warehouse/stockIn',




  // sub liquortype apis
  getAllSubLiquorType: 'subliquorType/getAllSubLiquorType',
  addSubLiquorType: 'subliquorType/addSubLiquorType',
  updateSubLiquorType: 'subliquorType/updateSubLiquorType',
  getSubLiquorTypeById: 'subliquorType/getSubLiquorTypeById',
  searchSubLiquorType: 'subliquorType/getSubLiquorTypeLazySearch',
  getSubLiquorsByLiquorId: 'subliquorType/getSubLiquorTypeByLiquorTypeId',
  // doument upload routes
  uploadDocuments: 'api/document/uploaddocumentbyversion',
  uploadDocumentsNoToken: 'api/document/uploadDocumentByVersionNoToken',
  downloadDocument: 'api/document/downloadfile?uuid=',


  //tank conversion brewery 




  //

  //tank transfer brewery 




  //


  listTankConversion: 'listTankConversion',
  searchTankConversion: 'tankConversion/searchTankConversion',
  addTankConversion: 'tankConversion/createUpdateTankConversion',
  getallTanks: 'tankCatagory/getall',
  getByTankConversionId: 'tankConversion/findTankConversion?id=',
  approveTankCon: 'tankConversion/approveTankConversion',
  putTankConversion: 'tankConversion/updateTankConversion',

  listTankRepair: 'listTankRepair',
  listTankMaintainances: 'listTankMaintainances',
  tankUpdate: 'tankMaintanence/updateTankMaintenance',
  addTank: 'tankMaintanence/createUpdateTankMaintanence',
  searchTank: 'tankMaintanence/searchTankMaintanence',
  tankGetById: 'tankMaintanence/findTankMaintanence?id=',
  stockGetById: 'commonStockController/currentstock/bytank?takeRegId=',
  approveTankMaintain: 'tankMaintanence/updateWorkFlowDetails',
  // uploadDocuments: 'api/document/uploaddocument?files%5B0%5D.name=test-image&moduleName=licence-mangement&screenName=wholesale-add&applicationNumber=L11618553939709',

  // tanks transfer apis :: 

  tanktransfercreate: 'tankTransfer/createUpdateTankTransfer',
  tankgetalldata: 'tankTransfer/lazySearch',
  tankgetbyiddata: 'tankTransfer/findTankTransfer?id=',
  searchTankTransfer: 'tankTransfer/searchTankTransfer',
  approveTankTransfer: 'tankTransfer/createUpdateTankTransfer',
  updateTankTransfer: 'tankTransfer/updateTankTransfer',

  //tank grade master data
  getAllTankRawMaterial: 'tankRawMaterial/getall',
  getTankGrade: 'commonStockController/currentstock/bytank?takeRegId=',

  //tank id getby Tank raw material id
  getByRawMaterialId: 'tankRegistration/getByRawMaterialId?id=',

  getbyrawmetiraldata: 'tankRegistration/getTankList?rawMaterialId=',

  addLicenseRenewal: 'wholesalelicenserenewal',
  addTransportPassCancel: 'wholesaleTransportPassCancel',
  getbyidd: 'transportPassCancellation/getById?id=',

  // trank registration 

  tankusage: 'tankUsageGroup/getByTankCatagoryId?catagoryId=',
  tankrawmetireal: 'tankRawMaterial/getByTankUsageGroupId?groupId=',
  newtankreg: 'tankCatagory/getall',
  getAllIndentRequest: 'WholesaleIndentList',
  gettankmetirecalMoc: 'tankMaterialType/getAllTankMaterial',

  // dropdown Configuration 
  createupdatedropdown: 'api/masterValues/createUpdateMasterValues',
  findDropdownList: 'api/masterValues/findDropDownList',
  findDropDownMaster: 'api/masterValues/findDropDownMaster',
  checkDropdownKey: 'api/masterValues/isDropDownKeyExist',
  getDropDownBykey: 'api/masterValues/findDropDownMaster',
  findDropDownMasterOnMaster: 'api/masterValues/findDropDownMasterOnMaster',
  // License configuration
  createUpdateApplicationConfiguration: 'applicationConfiguration/createUpdateApplicationConfiguration',
  findConfigurationList: 'applicationConfiguration/findConfigurationList',
  findApplicationConfigurationByKey: 'applicationConfiguration/findApplicationConfigurationByKey',
  isConfigurationExist: 'applicationConfiguration/isConfigurationExist',
  // getDropDownBykey: 'api/masterValues/findDropDownMaster',

  // catagory
  getallCatagory: 'category/getAllCategory',

  ///Dipbook ////
  createUpdateDipBook: 'DipBook/createUpdateDipBook',
  searchDipBook: 'DipBook/searchDipBook',
  findDipBookById: 'DipBook/findDipBook?id=',
  searchTankInspec: 'DipBook/searchTankInspection',
  getOpeningBalance: 'DipBook/findOpeningBal?tankId=',

  // Indent for Blend
  createIndent: 'indentForBlend/createUpdateIndent',
  getAppNumber: 'generateApplicationNumber?registrationType=',
  getTempLicense: 'indentForBlend/tempLicense',
  getBottlingPlan: 'indentForBlend/findBottlingPlan',
  searchIndentBlend: 'indentForBlend/searchIndentForBlend',
  findIndentById: 'indentForBlend/findIndentForBlend?id=',



  ////BPP/////
  createUpdateBottlingProductionPlan: 'bottlingProductionPlan/createUpdateBottlingProductionPlan',
  searchBottlingProductionPlan: 'bottlingProductionPlan/searchBottlingProductionPlan',
  findBottlingProductionPlan: 'bottlingProductionPlan/findBottlingProductionPlan?id=',
  findBrandDetails: 'findBrandDetails',
  findPackageSizeByBrandDetailId: 'findPackageSizeByBrandDetailId?brandDetailId=',
  findPackageTypeByBrandDetailId: 'findPackageTypeByBrandDetailId',
  findtankDetails: 'tankRegistration/findTankApplication',
  findBrandDropdown: 'findBrandDetails/dropDown',
  postBrandDetails: 'findBrandDetails',
  findLabelDetails: 'findLabelDetails/dropDown',
  producationplan: 'masterValues/findDropDownMaster?dropDownKey=PRODUCTION_LINE',


  // warehouse importpermit request
  addimportpermit: 'importPermit/addImportPermit',
  getimportpermitById: 'importPermit/getImportPermitById',

  ///Tank usage category master ///
  tankusagegeAll: 'tankUsageGroup/getall',
  getbrandlabeldetails: 'importPermit/getBrandDetailsByCode',


  //qrcode
  searchQrCOde: 'qrcodeBarcodePrint/searchQrcodeBarcodePrint',
  findQrCode: 'qrcodeBarcodePrint/findBottlingPlanPrintDetails?bottlingPlanId=',
  addQr: 'qrcodeBarcodePrint/generateQrcodeBarcodePrint',
  addprintStatus: 'qrcodeBarcodePrint/printStatus?qrcodeBarcodePrintId=',
  getBrandDetailsByparentetin: 'brandRegistration/getBrandDetailsByParentEtin',
  searchManualScan: 'qrcodeBarcodeScan/searchQrcodeBarcodeScan',
  addScanQrcodeBarcode: 'qrcodeBarcodeScan/addScanQrcodeBarcode',
  scanQrcodeBarcodeMapping: 'qrcodeBarcodeScan/scanQrcodeBarcodeMapping',
  findPrintedDetails: 'qrcodeBarcodeScan/findPrintedDetails?id=',

  // indentRequest Lazy Search
  indReqSearch: 'indentRequest/indentRequestConsignorLazySearch',
  // indReqSearch: 'indentRequest/indentRequestLazySearch',
  // indentAcceptance/indentAcceptanceLazySearch




  // boxing process
  searchBoxinglist: 'boxingProcess/searchBoxingProcess',
  getBoxingProcess: 'boxingProcess/findBottlingPlanDetails?bottlingPlanId=',
  updateWastage: 'boxingProcess/updateWastageQuantity',
  transferWarehouse: 'boxingProcess/transferToWarehouse',


  //bottling process//
  findProductionPlan: 'bottlingProcess/findProductionPlan',
  addBottlingProcess: 'bottlingProcess/createUpdateBottlingProcess',
  findBottlingProcess: 'bottlingProcess/findBottlingProcess?id=',
  searchBottlingProcess: 'bottlingProcess/searchBottlingProcess',

  //stockinhand //
  getstockinhandlist: 'bottledStockInHand/searchBottledStockInHand',

  // WareHouse Transport Cancell req
  transportPassCancell: 'transportPassCancellation/transportCancellationLazySearch',
  getTransCancelationByid: 'transportPassCancellation/getById?id=',
  addTransportpassCancell: "transportPassCancellation/addtransportPassCancellation",
  getTpDetailsByTranspotNumber: 'transportPassGeneration/getTransportPassGenByTransportNo?transportNo=',

  getLicenseUniName: 'license/category',
  findLicenseMapping: 'applicationConfiguration/findLicenseMapping',

  // brandlabel
  search: 'brandLabel/brandLabelLazySearch',
  getallBrands: 'brand/getAllBrand',
  getDropDown: 'brandLabel/getDropDown',
  getBrandDetailsByEtin: 'brandLabel/approved/etin',
  //bottlingprod
  getallbottlingprod: 'DistilleryBottlingProdList',
  modifyProductionPlan: 'bottlingProductionPlan/modify',
  bottlingsearch: 'bottlingProductionPlan/search',
  bottlinggetbyid: 'bottlingProductionPlan/',
  addbottlingdata: 'bottlingProductionPlan',
  bottlingworkflow: 'bottlingProductionPlan/workflowCallBack',

  // Wholesale Transport Pass Generation
  getAllRouteType: 'api/masterValues/findDropDownMaster?dropDownKey=ROUTE_TYPE',
  getAllRouteRange: 'api/masterValues/findDropDownMaster?dropDownKey=ROUTE_RANGE',

  // wholesale dispatch
  getcompletedTransportPass: 'transportPassGeneration/transportPassLazySearch',
  getTransportDetailsById: 'transportPassGeneration/getTransportPassGenById?id=',
  getDispatchDetByTransId: 'transportPassGeneration/getDispatchDetailsByTransportPassGenId?id=',
  addDispatch: 'dispatch/addDispatch',

  // retail Stock in - used temporarly for wholesale stock in
  getStockinByTransportNo: 'transportPassGeneration/retailStockin',
  getCancellationByTransportNo: 'transportPassGeneration/cancellation',

  //PayU
  generateHash: 'payu/request',

  //department
  deptList: 'department/getlist',
  deptGetById: 'department/getById/',
  createDept: 'department/add',
  updateDept: 'department/update',
  getDeptCode: 'department/code',
  searchDept: 'department/search',

  //Actual Problem
  createActualProblem: 'actualproblem/addActualProblem',
  getActualPproblemCode: 'actualproblem/code',
  updateActualProblem: 'actualproblem/editActualProblem',
  getActualProblemById: 'actualproblem/getActualProblemById',
  getActualProblemList: 'actualproblem/getAllActualProblem',
  searchActualProblem: 'actualproblem/searchActualProblem',
  getActiveProblem: 'actualproblem/active',

  //Entity Type
  entityTypeList: 'entity/getlist',
  getEntityTypeById: 'entity/getById/',
  createEntityType: 'entity/add',
  updateEntityType: 'entity/update',
  getEntityTypeCode: 'entitytype/code',
  searchEntityType: 'entity/search',
  getEntityTypeStatus: 'entitytype/getAllStatus',
  getAllEntityTypeName: 'entitytype/getAllEntityNames',

  // issue details
  getIDlist: 'issuedetails/getAllIssueDetails',
  searchID: 'issuedetails/searchIssueDetails',
  getuniqueCode: 'issuedetails/code',
  addissueDetail: 'issuedetails/addIssue',
  editIssuedetails: 'issuedetails/updateIssue',
  getbyIdIssuedetails: 'issuedetails/getIssueDetailsById/',

  // grievance issue details
  getGrievanceIssueDetailsList: 'GrievanceIssueDetails/getAllIssueDetails',
  getSearchGrievanceIssueDetails: 'GrievanceIssueDetails/searchCategory',
  getGrievanceIssueDetailsCode: 'GrievanceIssueDetails/code',
  addGrievanceIssueDetails: 'GrievanceIssueDetails/addGrievanceIssue',
  editGrievanceIssueDetails: 'GrievanceIssueDetails/updateGrievanceIssue',
  getGrievanceIssueDetailsById: 'GrievanceIssueDetails/getIssueDetailsById/',
  getgrievanceAllCategory: 'grievanceCategory/getAllCategory',
  getIssueDetailsById: 'GrievanceIssueDetails/',

  //grievance categorgy
  getGrievanceCategoryCode: 'grievanceCategory/code',
  addGrievanceCategory: 'grievanceCategory/addCategory',
  getGrievanceCategoryById: 'grievanceCategory/getCategoryById?id=',
  getGrievanceAllCategory: 'grievanceCategory/getAllCategory',
  getAllActiveGrievanceCategory: 'grievanceCategory/active',
  editGrievanceCategory: 'grievanceCategory/editCategory',
  searchGrievanceCategory: 'grievanceCategory/searchCategory',
  getActivetypeofuserGrievanceCategory: 'grievanceCategory/activetypeofuser',
  //District
  getDistrictList: 'districthelp/getlist',
  getDistrictById: 'districthelp/getById/',
  editDistrict: 'districthelp/update',
  createDistrict: 'districthelp/add',
  districtSearch: 'districthelp/search',
  getDistrictCode: 'districthelp/code',


  getAllDesignations: 'designation/getAll',
  getDesignationById: 'designation/getById/',
  getActiveDesignations: 'designation/active',
  addDesignation: 'designation/add',
  updateDesignation: 'designation/update',
  searchDesignation: 'designation/search',
  getDesignationUniqueCode: 'designation/code',

  // Salutation
  searchSalutation: 'salutation/search',
  getUniqueSalutationCode: 'salutation/code',
  getSalutationById: 'salutation/',
  updateSalutation: 'salutation/updateSalutation',
  createSalutation: 'salutation/addSalutation',
  getAllSalutations: 'salutation/getAll',
  getAllActiveSalutations: 'salutation/active',

  devicegetall: 'DeviceHardwareName/getAll',
  deviceActive: 'DeviceHardwareName/active',
  getDeviceHardwareByAsset: 'DeviceHardwareName?assetTypeId=',
  deviceSearch: 'DeviceHardwareName/search',
  deviceUNqiuecode: 'DeviceHardwareName/uniquecode',
  adddevice: 'DeviceHardwareName/add',
  assetSubTypeList: 'accessories/search',
  assetSubTypeActive: 'accessories/active',
  assetSubTypeAdd: 'accessories/addaccessories',
  assetSubTypeUpdate: 'accessories/update',
  assetSubTypeGet: 'accessories/getById/',


  findLicenseDetails: '',
  findactiveentity: '',
  // in-app-support
  entitytype: 'api/masterValues/findActiveDropDownChildList',
  getAllEntityTypes: 'entitytype/getAllEntityTypes',
  helpdesklicensesearch: 'license/findLicenseApplication',
  licenseapi: 'commonmaster/licencemanagement',
  createTicketViaPhone: 'ticket/add',
  getActivePriority: 'priority/get',
  getActiveSla: 'sla/getSla',
  getActiveTicketStatus: 'ticketstatus/allactive',
  getAllinappsupport: 'ticket/getAll/All',
  searchinappsupport: 'ticket/search',
  searchReports: 'ticket/viewReport',
  Reportquery: 'ticket/viewReportquery',
  userLoginReport: 'user/fieldloginstatus',
  Reportincident: 'ticket/viewReportincident',
  getByidInappsupport: 'ticket/getById',
  gettilescount: 'ticket/count',
  getall: 'ticket/search',
  assigngroup: 'role-master/getAll',
  assignto: 'user/byRole',
  searchinappsupportKB: 'helpdeskknowledge/Search',
  viewKB: 'helpdeskknowledge/',
  viewGrievanceKB: 'Grievanceknowledge/',
  helpdesktracker: 'ticket/tracker/',
  knowledgeSolutionAdd: 'helpdeskknowledgeSolution/addKnowledge',
  getUnqiueKSID: 'helpdeskknowledgeSolution/solutionId',
  masterentitytype: 'commonmaster/entitytype',
  getID: 'issuedetails/getIssueDetails/',
  // email request
  getemailrequst: 'emailrequest/getAllEmailRequest',
  getemailTicket: 'ticket/getAll/email',
  getappTicket: 'ticket/getAll/app',
  getSearch: 'emailrequest/search',
  emailcount: 'emailrequest/count?date=',
  //Sub Solution APIs
  subSolGetAll: 'subsoln/getlist',
  subSolGetById: 'subsoln/getById/',
  subSolAdd: 'subsoln/add',
  subSolUpdate: 'subsoln/update',
  subSolGetAllActive: 'subsoln/allactive',
  subSolGetUniqueCode: 'subsoln/code',

  //Helpdesk Dashboard
  getPiechart: 'ticket/dashboardcount',
  getDashboardCount: 'ticket/dashboardcountftdate',
  getGrievancecount:'grievancereg/grievancedashboardcountftdate',
  grievancedashboardbymonth:'grievancereg/grievancedashboardbymonth',

  getBarChart: 'ticket/ticketdashboardbymonth',
  getPiechartDept: 'ticket/dashboardcountincident',
  getBarChartDept: 'ticket/dashboardbymonthincident',
  // Common Search APi uRl
  getApi: 'customdata/getdata',
  getTicketDetails: 'ticket/getByTicketNumber',
  // sms Request
  getSmsTicket: 'ticket/getAll/sms',

  //Grievance
  getAllGrievanceFAQ: 'grievanceFaq/getAll',
  grievanceFAQSearch: 'grievanceFaq/Search',
  getGrievanceFAQById: 'grievanceFaq/',
  getGrievanceFAQCode: 'grievanceFaq/code',
  addGrievanceFAQ: 'grievanceFaq/addFaq',
  updateGrievanceFAQ: 'grievanceFaq/updateGrievanceFaq',
  grievanceRegList: 'grievancereg/getlist',
  grievanceRegSearch: 'grievancereg/search',
  grievanceRegGetById: 'grievancereg/getById/',
  grievanceCode: 'grievancereg/code',
  grievanceToggleList: 'grievancereg/toglelist',
  grievanceRegCount: 'grievancereg/count',
  grievanceUpdate: 'grievancereg/update',
  grievanceRegAdd: 'grievancereg/add',
  issueDetails: 'GrievanceIssueDetails/grivanceissuedetails',
  getPieChartForGrievance: 'grievancereg/dashboardcount',
  getBarChartForGrievance: 'grievancereg/dashboardbymonth',
  getPieChartForInspect: 'grievancereg/dashboardcountinspect',
  getBarChartForInspect: 'grievancereg/dashboardbymonthinspect',
  getStatusDropDownForReg: 'grievancereg/allactive',
  getRefTicketNo: 'grievancereg/code',
  getRegTicketNo: 'grievancereg/codetypeofuser',
  regListByUser: 'grievancereg/toglelist',
  regIssueFrom: 'issuefrom/active',
  grievanceIssueDetails: 'GrievanceIssueDetails/allactive',
  grievanceFAQIssueDetails: 'grievanceFaq?issueDetailsId',

  //Category
  getAllActiveCategoryForGrievance: 'grievanceCategory/active',

  // Grievance Master - Type of User
  getAllGrievanceTypeOfUsers: 'typeOfUser/getAll',
  getGrievanceTypeOfUsersUniqueCode: 'typeOfUser/code',
  getAllGrievanceActiveTypeOfUsers: 'typeOfUser/active',
  getGrievanceTypeOfUserByType: 'typeOfUser/getByTypeOfUser',
  getGrievanceTypeOfUserById: 'typeOfUser/',
  searchGrievanceTypeOfUser: 'typeOfUser/Search',
  addGrievanceTypeOfUser: 'typeOfUser/addTypeOfUser',
  updateGrievanceTypeOfUser: 'typeOfUser/updateTypeOfUser',

  //POS Asset
  getAllActiveDistrict: 'districthelp/allactive',
  deviceRegistrationList: 'device-registration/search',
  approveOrRejectDeviceRegistration: 'device-registration',
  getDeviceRegistrationById: 'device-registration/getById?id=',
  checkDeviceStatus: 'device/is-associated?deviceNumber=',
  getDeviceStatusDropdown: 'devicelog/getdevicestatus',
  deAssociate: 'device-registration/de-associate',

  // Helpdesk - Workflow
  getAllHDWorkflow: 'workflow/getAll',
  getHDWorkflowById: 'workflow/getById/',
  getAllHDActiveWorkflow: 'workflow/active',
  addHDWorkflow: 'workflow/add',
  updateHDWorkflow: 'workflow/update',
  searchHDWorkflow: 'workflow/search',
  getHDWorkflowUniqueCode: 'workflow/code',
  // commonsearchapi
  getuserid: 'grievancereg/getlist',
  getValue: 'grievancereg/commonsearch',
  getlicenseType: 'api/masterValues/',
  grievanceGetRole: 'role-master/getAll',
  addworkflow: 'grievanceWorkflow/addWorkflow',
  editworkflow: 'grievanceWorkflow/updateWorkflow',
  getissuedetials: 'GrievanceIssueDetails/',
  getUniqueCodeWF: 'grievanceWorkflow/code',
  getallgrievanceworkflow: 'grievanceWorkflow/getAll',
  searchGWF: 'grievanceWorkflow/Search',
  viewGWF: 'grievanceWorkflow/',


  //DEO ASSET APPROVAL
  assetApprovalList: '/pos-asset-approval-type',
  approveAsset: 'pos-asset-request/approve',

  //Inspecting officer
  getCountForExcise: 'GrievanceExciseOfficer/count',
  getCountForInspect: 'grievanceInspectionOfficer/count',
  getByIdForInspectOfficer: 'grievanceInspectionOfficer/getById?id=',
  getAssignGroupForInspect: 'role-master/getAll?helpDeskRoleRequired=false',
  getAssignToForInspect: 'user/byRole?roleId=',
  updateInspect: 'grievancereg/updateinspectex',
  getbyID: 'GrievanceExciseOfficer/getById',
  getWFSla: 'grievanceSla/get/',
  searchForInspect: 'grievanceInspectionOfficer/search',

  // POS Asset Request APIs
  searchPOSAssetRequest: 'pos-asset-request/search',
  getDeviceHardwareName: 'DeviceHardwareName', // DeviceHardwareName?assetTypeId=9&assetBrandId=3
  approvePOSAssetRequest: 'pos-asset-request/approve',
  addPOSAssetRequest: 'pos-asset-request',
  getPOSAssetRequestStatus: 'pos-asset-request/status',
  updatePOSAssetApprovalType: 'pos-asset-approval-type',
  getPOSAssetApprovalType: 'pos-asset-approval-type',
  forgotpassword: 'authentication/forgotPassword',
  searchDevicehistory: 'devicelog/search',

  // sms Request
  getSmSRequest: 'usersms/incomingsms',
  ReplyEmail: 'emailrequest/replyemail',
  getLogs: 'ticket/activity-logs',

  // fieldEngg

  "ActualProblemBasedONcat": 'actualproblem/getById/',
  "ActionTakenBasedONcat": 'actiontaken/getById/',
  "ProblemReportedBasedONcat": 'problemreported/getById/',
  updatCreate: 'ticket/update',
  Uploaddoc: 'commonmaster/uploaddocument',
  downloadDoc: 'commonmaster/downloaddocument',
  grievancKB: 'Grievanceknowledge/getknowledgebyid',
  LicenseRegister: 'commonmaster/commonmasterlogin',
  getLicenseNo: 'commonmaster/search',
  getProduct: 'commonmaster/brandlabel',
  generateOtp: 'grievancereg/generate-otp',
  verifyOTP: 'grievancereg/verify/otp',
  registerRole: 'commonmaster/getByRole/',
  inappList: 'ticket/getByStatusViaApp',
  logoutapi: 'user/logout',
  LicenseSearch: 'commonmaster/serachliceneapp',
  handlingofficer: 'user/associated-users',
  AssignToOfficer: 'user/assign',
  searchPOSAssetReports: 'device-registration/filterstatussearch',
  getPOSAssetCount: 'device-registration/deviceregistrationcount',
  commonmasterAlluser: 'commonmaster/alluser',
  CommonmasteruserRole: 'commonmaster/getrolebyusertype',
  CommonmasterGetuserbyrole: 'commonmaster/getuserbyrole',
  gethandlingofficerdropdown: 'user/gethandlingofficerdropdown',
  associatedusersdropdown: 'user/associatedusersdropdown?userId=',
  getentgetentitycodebylicensenumberitycode: 'retailshop/getentitycodebylicensenumber',
  getTransaction: 'paymentoverview/getByLicenseNo?licenseNo=',
  viewstatusupdate: 'ticket/viewstatusupdate',
  USERresetPassword: 'user/resetPassword',
  shopcodemasterList: 'shopcodemaster/search',
  shopcodemasteradd: 'shopcodemaster/add',
  shopcodemasterupdate: 'shopcodemaster/update',
  shopcodemasterGetBY: 'shopcodemaster/getById/',
  FieldEngglist: 'user/byRoleblockengineer',
  shopcodemappingupdate: 'shopcodemaster/mappingupdate',
  assignToShopCodeWise: 'shopcodemaster/shopcodebaseduser',
  assigntoiduser: 'user/assigntoiduserinfo',
  activitylogs: 'user/activity-logs',
  getAllQuestions: 'surveyform/getAllQuestions',
  addSurveyForm: 'surveyform/addSurveyForm',
  getSurveyData: 'surveyform/getDatabytcNo/',

  //eal
  ealsearch: 'ealrequest/search',
  ealgetByid: 'ealrequest/getById/',
  tpgetByid: 'tprequest/getById/',
  getByealrequest: 'ealrequest/getByealrequest/',
  logeal: 'ealrequest/getLogsByApplicationNo/',
  Ealavailability: 'ealrequest/ealavailability',
  ealApproved: 'ealrequest/getAllByapproved',
  ealSearch: 'ealrequest/prequementsearch',
  getEal:'ealrequest/filtersearch',
  getLevel: 'workflownotification/getlist',
  ADDNotifyWorkflow: 'workflownotification/add',
  searchNotifyWorkflow: 'workflownotification/search',
  updateNotifyWorkflow: 'workflownotification/update',
  suplierList: 'supplier/search',
  supplierActive: 'supplier/activelist',
  suplierAdd: 'supplier/add',
  suplierupdate: 'supplier/update',
  suplierGetBYid: 'supplier/getById/',
  DeviceHardwareNameList: 'DeviceHardwareName/search',
  DeviceHardwareNameadd: 'DeviceHardwareName/addasset',
  DeviceHardwareNameUpdate: 'DeviceHardwareName/update',
  DeviceHardwareNameGetBYid: 'DeviceHardwareName/getByid/',
  DashboardTicketCountApi: 'ticket/searchdistrictlist',
  DashboardDownloadApi: 'ticket/allticketdownload',
  deviceTicketCountApi: 'device-registration/search',
  entitysummarycount: 'device-registration/entitysummarycount',
  Addsiteobservation: 'siteobservation/add',
  updatesiteobservation: 'siteobservation/update',
  getByIdsiteobservation: 'siteobservation/getById/',
  searchsiteobservation: 'siteobservation/search',
  getsiteobservation: 'siteobservation/getlist',
  addSiteActionTaken: 'site-action-taken/addSiteActionTaken',
  getByIdSiteActionTaken: 'site-action-taken/getById/',
  updateSiteActionTaken: 'site-action-taken/update',
  getSiteVisitReport: 'sitevisit/getlist',
  searchSiteVisitReport: 'sitevisit/search',
  getAllSiteActionTaken: 'site-action-taken/getAllSiteActionTaken',
  assetmapgetById: 'assetmap/getById/',

  siteissuetypeActive: 'siteissuetype/activelist',
  siteactiontaken: 'site-action-taken/getSiteActionTakenByObservationId?observationid=',
  siteobservationBasedOnIssueType: 'siteobservation/getSiteObservationByIssueTypeId?issueTypeId=',
  allSiteVisitStatus: 'data/allSiteVisitStatus',
  getswfielduser: 'shopcodemaster/swfielduser',
  addrolemaster: 'role-master/addrolemaster',
  getByIdrole: 'role-master/getById/',
  updateRoleMaster: 'role-master/updateRoleMaster',
  searchRoles: 'role-master/search',
  getentityname: 'commonmaster/getentityname',
  getAssetStatus: 'assetstatus',
  assetDashboardlist: "assetmap/assetsummarycount",
  assetDashboardcount: "assetmap/assettypebasedcount?code=",
  getsalutation: 'salutation/getAll',
  getdesignation: 'designation/getAll',
  getdepartment: 'department/getlist',
  entityactivelist: 'entity/activelist',
  getlincensetypename: 'getAll',
  vendorstatusupdate: 'ealrequest/vendorstatusupdate',
  tpcode: 'tprequest/code',
  dispatchAdd: 'tprequest/add',
  dispatchSearch: 'tprequest/search',
  Ealsummarycount:'ealrequest/summarycount?fromDate=',
  assetreport:'assetlist/assetreport',
  assetDashboard: "assetmap/entitywisesummarycount",
  //sla monitoring dashboard
  resolutionSla12hrs: 'ticket/resolutionposdevicesla12hrs',
  resolutionSla24hrs: 'ticket/resolutionposdevicesla24hrs',
  inboundCallsDashboard: 'inboundcalls/TotalcallsSummarycount',
  tollFreeDashboard: 'ticket/dashboardtollfree',
  securityManagementDashboard: 'ticket/securitymanagementdevices',
  recoveryTimeObjective: 'ticket/recoverytimeobjective',
  recoveryPointObjective: 'ticket/recoverypointobjective',
  addinboundcalls: 'inboundcalls/add',
  Listinboundcalls: 'inboundcalls/search',
  getbyinboundcalls: 'inboundcalls/getById/',
  Updateinboundcalls: 'inboundcalls/update',
  entitywisesummarycount:'assetmap/entitywisesummarycount?assetType=',
  zabbixMasterServer:'zabbixmasterserver',
  getUpExciseAllServer: 'sladashboard/upexserverdetails',
  changerequestSearch:'changerequest/search',
  changerequestGetBYid:'changerequest/getById',
  changereqstatusupdate:'changerequest/changereqstatusupdate',
  changereqcount: 'changerequest/summarycount',
  ticketUpdate: 'ticket/updatedescription',
  softwareAssignTo: 'shopcodemaster/swmoduleuser',
  pdfGen: 'pdfgen/ealtpfile/',
  tprequestBalance:'tprequest/balance/',
  vendorNameGet:'ealrequest/getVendorRollCode',
  vendorNameGetbyid:'ealrequest/getVendorUserId?code=',
  assignEaltoVendor:'ealrequest/update-vendor-id',

//Driver Details
driverDetailsList:'DriverDetails/getAll',
driverDetailsAdd:'DriverDetails/add',
driverDetailsGetById:'DriverDetails/getById/',
driverDetailsUpdate:'DriverDetails/update',
driverDetailsActive:'DriverDetails/active',
driverDetailsSearch:'DriverDetails/search'
}
