import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class LicenceManagementService {

    isLicenseFromPayment = false;
    baseURL = environment.licencemanagementIPURL;
    masterIpURL = environment.baseURLMasterIpAddr;
    worflowIPURL = environment.worflowIPURL;

    constructor(
        private http: HttpClient
    ) { }

    getApplicationNo(licenseCode): any {
        const url = this.baseURL + apiUrls.getApplicationNo + '?licenseCategory=' + licenseCode;
        return this.http.post( url, {} ).toPromise();
    }

    findFinancialYear(): any {
        const url = this.baseURL + apiUrls.findFinancialYear;
        return this.http.get(url);
    }
    findLicenseDetailsByEntityByUserId(licenseCategory): any {
        const url = this.baseURL + apiUrls.findLicenseDetails +'?licenseCategory='+ licenseCategory ;
        return this.http.get(url);
    }
    findApprovedEntityByUserId(): any {
        const url = this.baseURL + apiUrls.findactiveentity;
        return this.http.get(url);
    }
    findLicenseFee( moduleName, licCat, licSubCat, feeType ): any {
        const url = this.masterIpURL + apiUrls.findLicenseFee + '?moduleName=' + moduleName + '&licenseCategory=' + licCat + '&licenseSubCategory=' + licSubCat + '&feeType=' + feeType;
        return this.http.get(url);
    }

    findCheckList(applicationNumber, level): any {
        const url = this.baseURL + apiUrls.findCheckList + '?applicationNumber=' + applicationNumber +
            '&level=' + level;
        return this.http.get(url);
    }

    createLicense(payload) {
        const url = this.baseURL + apiUrls.createLicense;
        return this.http.post(url, payload).toPromise();
    }

    isGroupCodeExist(groupCode) {
      const url = this.baseURL + apiUrls.isGroupCodeExist + '?groupCode=' + groupCode;
      return this.http.get(url).toPromise();
    }

    saveUpdateGroupMaster(payload) {
        const url = this.baseURL + apiUrls.saveUpdateGroupMaster;
        return this.http.post(url, payload).toPromise();
    }

    findGroupMasterList(payload): Observable<any> {
        const url = this.baseURL + apiUrls.findGroupMasterList;
        return this.http.post(url, payload);
    }

    isRetailShopExist(retailShopId) {
      const url = this.baseURL + apiUrls.isRetailShopExist + '?retailShopId=' + retailShopId;
      return this.http.get(url).toPromise();
    }

    saveUpdateRetailShops(payload) {
        const url = this.baseURL + apiUrls.saveUpdateRetailShops;
        return this.http.post(url, payload);
    }

    findRetailShopList(payload): Observable<any> {
        const url = this.baseURL + apiUrls.findRetailShopList;
        return this.http.post(url, payload);
    }

    findByRetailShopId(retailShopId): Observable<any> {
        const url = this.baseURL + apiUrls.findByRetailShopId  + '?retailShopId=' + retailShopId;
        return this.http.get(url);
    }

    saveUpdateSiteDetails(payload) {
        const url = this.baseURL + apiUrls.saveUpdateSiteDetails;
        return this.http.post(url, payload).toPromise();
    }

    saveSecurityAmount(payload) {
        const url = this.baseURL + apiUrls.saveSecurityAmount;
        return this.http.post(url, payload).toPromise();
    }

    createSugarmillLicense(payload) {
        const url = this.baseURL + apiUrls.createSugarmillLicense;
        return this.http.post(url, payload).toPromise();
    }

    createBondWareHouseLicense(payload) {
        const url = this.baseURL + apiUrls.bondWareHouseLicense;
        return this.http.post(url, payload).toPromise();
    }

    createRetailLicense(payload) {
        const url = this.baseURL + apiUrls.retailLicense;
        return this.http.post(url, payload).toPromise();
    }

    createDistilleryLicense(payload) {
        const url = this.baseURL + apiUrls.distilleryLicense;
        return this.http.post(url, payload).toPromise();
    }

    createHBRLicense(payload) {
        const url = this.baseURL + apiUrls.hbrLicense;
        return this.http.post(url, payload).toPromise();
    }

    searchLicenseApplications(payload): Observable<any> {
        const url = this.baseURL + apiUrls.searchLicenseApps;
        return this.http.post(url, payload);
    }

    findLicenseApplication(applicationNumber): Observable<any> {
        const url = this.baseURL + apiUrls.findLicenseApplication + '?applicationNumber=' + applicationNumber;
        return this.http.post(url, {});
    }

    saveUpdatePaymentDetails(payload): Observable<any> {
        const url = this.baseURL + apiUrls.saveUpdatePaymentDetails;
        return this.http.post(url, payload);
    }

    saveUpdateCheckList(payload): Observable<any> {
        const url = this.baseURL + apiUrls.saveUpdateCheckList;
        return this.http.post(url, payload);
    }

    saveSiteVisitOfficer(payload): Observable<any> {
        const url = this.baseURL + apiUrls.saveSiteVisitOfficer;
        return this.http.post(url, payload);
    }

    findApplicationDistrict(applicationNumber): Observable<any> {
        const url = this.baseURL + apiUrls.findApplicationDistrict + '?applicationNumber=' + applicationNumber;
        return this.http.get(url);
    }

    findWorkFlowByModuleAndSubModule(moduleNameCode, subModuleCode): Observable<any> {
        const url = this.worflowIPURL + apiUrls.findWorkFlowByModuleAndSubModule +
            '?moduleNameCode=' + moduleNameCode + '&subModuleCode=' + subModuleCode;
        return this.http.get(url);
    }

    findPaymentDetails(applicationNumber, feeType): Observable<any> {
        const url = this.baseURL + apiUrls.findPaymentDetails +
            '?applicationNumber=' + applicationNumber + '&feeType=' + feeType;
        return this.http.get(url);
    }

    findWorkFlowDetailsByLoginUserDesignation(moduleNameCode, subModuleCode): Observable<any> {
        const url = this.worflowIPURL + apiUrls.findWorkFlowDetailsByLoginUserDesignation +
            '?moduleNameCode=' + moduleNameCode + '&subModuleCode=' + subModuleCode;
        return this.http.get(url);
    }

    getAllAllocatedEntity(licenseCategory, districtId): Observable<any> {
        const url = this.baseURL + apiUrls.findLicenseDetailsByLicenseCategory +
            '?licenseCategory=' + licenseCategory + '&districtId=' + districtId;
        return this.http.get(url);
    }

    initiateApplicationWorkFlow(payload): Observable<any> {
        const url = this.baseURL + apiUrls.initiateApplicationWorkFlow;
        return this.http.post(url, payload);
    }

    processSiteVisitWorkflow(payload): Observable<any> {
        const url = this.baseURL + apiUrls.processSiteVisitWorkflow;
        return this.http.post(url, payload);
    }

    isCustomerBWFLParentExist(): Observable<any> {
        const url = this.baseURL + apiUrls.isCustomerBWFLParentExist;
        return this.http.get(url);
    }

    searchAuthorizePerson(payload): Observable<any> {
        const url = this.baseURL + apiUrls.searchAuthorizePerson;
        return this.http.post(url, payload);
    }

    saveUpdateBWFLAuthorizePerson(payload) {
        const url = this.baseURL + apiUrls.saveUpdateBWFLAuthorizePerson;
        return this.http.post(url, payload).toPromise();
    }

    findAuthorizedPersonDetails(id): Observable<any> {
        const url = this.baseURL + apiUrls.findAuthorizedPersonDetails + '?id=' + id;
        return this.http.get(url);
    }

    isCustomerBondLicenseEligible(): Observable<any> {
        const url = this.baseURL + apiUrls.isCustomerBondLicenseEligible;
        return this.http.get(url);
    }

}
