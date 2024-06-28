import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { LicenceManagementService } from '@app/services/license-managment.service';
// import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

// const {

//     STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
//     STATUS_SENDBACK_SITE_INFO, CUSTOMER, LOCALITY_URBAN, LOCALITY_RURAL, PREVIOUSYEAR_ITR, CURRENTYEAR_ITR
// } = LicenseConstants;

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    valiReqOnly = [ Validators.required ];
    valiForMob = [ Validators.required, Validators.minLength(10), Validators.maxLength(10) ];
    valiForPan = [ Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}') ];
    valiForEmail = [ Validators.required, Validators.email ];
    valiForName = [ Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z]*$') ];
    valiForPinCode = [ Validators.minLength(6), Validators.maxLength(6) ];
    valiForAadhar = [ Validators.required, Validators.minLength(12), Validators.maxLength(12) ];

    valiForGstin = [Validators.required, Validators.minLength(15), Validators.maxLength(15),
        Validators.pattern('^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$')];

    constructor( private fb: FormBuilder, private licenseSer: LicenceManagementService, ) { }

    buildBankDetFormGroup(data?: any) {
        const basicEle = {
            accountNumber: ['', this.valiReqOnly],
            ifscCode: ['', this.valiReqOnly],
            bankCode: ['', this.valiReqOnly],
            bankName: ['', this.valiReqOnly],
            cancel_cheque_file: ['', this.valiReqOnly],
            cancel_cheque_file_source: ['', this.valiReqOnly]
        };
        return this.fb.group(basicEle);
    }

    buildAddressFormGroup(identifier, data?: any) {
        const basicEle = {
            addressIdentifier: [identifier],
            copyIdentifier: [''],
            districtCode: ['', this.valiReqOnly],
            districtDesc: [''],
            country: [{ value: 'INDIA', disabled: true }, this.valiReqOnly],
            locality: ['', this.valiReqOnly],
            localityType: ['', this.valiReqOnly],
            municipalAreaCode: [''],
            municipalAreaDesc: [''],
            pinCode: ['', this.valiForPinCode],
            policeStationCode: [''],
            policeStationDesc: [''],
            policeStationName: [''],
            stateCode: ['', this.valiReqOnly],
            stateDesc: [''],
            street: ['', this.valiReqOnly],
            tahsilCode: ['', this.valiReqOnly],
            tahsilDesc: [''],
            village: [''],
            block: [''],
            ward: ['']
        };
        return this.fb.group(basicEle);
    }

    buildAppliDetFormGroup(data?: any) {
        const basicEle = {
            salutationCode: ['', this.valiReqOnly],
            salutationDesc: ['', this.valiReqOnly],
            firstName: ['', this.valiReqOnly],
            middleName: [''],
            lastName: ['', this.valiReqOnly],
            mobileNumber: ['', this.valiForMob],
            emailId: ['', this.valiForEmail],
            genderCode: ['', this.valiReqOnly],
            genderDesc: ['', this.valiReqOnly],
            fatherHusbandName: [''],
            dob: ['', this.valiReqOnly],
            aadharNumber: ['', this.valiReqOnly],
            panNumber: ['', this.valiForPan],
            itrAssesmentYearCode: ['', this.valiReqOnly],
            previousItrNotFiled: ['', this.valiReqOnly],

            appli_photo_file: ['', this.valiReqOnly],
            appli_photo_file_source: ['', this.valiReqOnly],

            appli_aadhar_file: ['', this.valiReqOnly],
            appli_aadhar_file_source: ['', this.valiReqOnly],

            appli_pan_file: ['', this.valiReqOnly],
            appli_pan_file_source: ['', this.valiReqOnly],

            appli_itr_file: ['', this.valiReqOnly],
            appli_itr_file_source: ['', this.valiReqOnly],
        };
        return this.fb.group(basicEle);
    }

    buildBusinessUnitDetFormGroup(data?: any) {
        const basicEle = {
            firmLicenseNumber: ['', this.valiReqOnly],
            firmCompanyPanNumber: ['', this.valiForPan],
            itrAssessmentYearCode: ['', this.valiReqOnly],
            itrAssessmentYearDesc: ['', this.valiReqOnly],
            previusItrUploadReason: ['', this.valiReqOnly],
            anuualTurnOver: ['', this.valiReqOnly],
            annualProductionCapacity: ['', this.valiReqOnly],
            stateSupplyCode: ['', this.valiReqOnly],
            stateSupplyDesc: ['', this.valiReqOnly],
            stateQuantitySupply: ['', this.valiReqOnly],

            unitLicense_file: ['', this.valiReqOnly],
            unitLicense_file_source: ['', this.valiReqOnly],

            bwflBondDoc_file: ['', this.valiReqOnly],
            bwflBondDoc_file_source: ['', this.valiReqOnly],

            powerOfAttorney_file: ['', this.valiReqOnly],
            powerOfAttorney_file_source: ['', this.valiReqOnly],

            unitAffadavait_file: ['', this.valiReqOnly],
            unitAffadavait_file_source: ['', this.valiReqOnly],

            compFirmPan_file: ['', this.valiReqOnly],
            compFirmPan_file_source: ['', this.valiReqOnly],

            lastYrITR_file: ['', this.valiReqOnly],
            lastYrITR_file_source: ['', this.valiReqOnly],

            uploadGstin_file: ['', this.valiReqOnly],
            uploadGstin_file_source: ['', this.valiReqOnly],

            annualTurnOverCert_file: ['', this.valiReqOnly],
            annualTurnOverCert_file_source: ['', this.valiReqOnly],

            stateExciseOfficialCert_file: ['', this.valiReqOnly],
            stateExciseOfficialCert_file_source: ['', this.valiReqOnly],

            declarationCert_file: ['', this.valiReqOnly],
            declarationCert_file_source: ['', this.valiReqOnly],
        };
        return this.fb.group(basicEle);
    }

    buildAdditionalDetFormGroup(data?: any) {
        const basciEle = {
            solvencyCerticateValidity: ['', this.valiReqOnly],

            solvencyCertByAuth_file: ['', this.valiReqOnly],
            solvencyCertByAuth_file_source: ['', this.valiReqOnly],

            affadavait_file: ['', this.valiReqOnly],
            affadavait_file_source: ['', this.valiReqOnly],

            boundries_file: [''],
            boundries_file_source: [''],
        };
        return this.fb.group(basciEle);
    }

    buildCommentFormGroup(data?: any) { return this.fb.group({ comments: ['', this.valiReqOnly] }); }
    buildSendbackFormGroup(data?: any) { return this.fb.group({ sendback: ['', this.valiReqOnly] }); }

    buildCheckListDetFormGroup(data?: any) {
        const basicEle = {
            documentCode: [data.documentCode ? data.documentCode : '', this.valiReqOnly],
            documentDesc: [data.documentDesc ? data.documentDesc : '', this.valiReqOnly],
            isVerified: [data.isVerified ? data.isVerified : false, this.valiReqOnly]
        };
        return this.fb.group(basicEle);
    }

    buildCheckListFormGroup(applicationNumber, data?: any) {
        const basicEle = {
            applicationNumber: [applicationNumber, this.valiReqOnly],
            checkListDocument: this.fb.array([]),
        };
        return this.fb.group(basicEle);
    }

    buildSiteDetFormGroup(data?: any) {
        const basicEle = {
            latitude: ['', this.valiReqOnly],
            longitude: ['', this.valiReqOnly],
            east: ['', this.valiReqOnly],
            north: ['', this.valiReqOnly],
            south: ['', this.valiReqOnly],
            west: ['', this.valiReqOnly],

            documentList: this.fb.array([
                this.buildSiteDocumentFormGroup()
            ]),
        };
        return this.fb.group(basicEle);
    }

    buildSiteDocumentFormGroup(data?: any) {
        const basicEle = {
            description: [data ? data.description : '', this.valiReqOnly],

            site_photo_file: data ? [''] : ['', this.valiReqOnly],
            site_photo_file_source: data ? [''] : ['', this.valiReqOnly],
        };
        return this.fb.group(basicEle);
    }

    buildAssignSiteFormGroup(data?: any) {
        const basicEle = {
            districtCode: ['', this.valiReqOnly],
            districtDesc: ['', this.valiReqOnly],
            roleCode: ['', this.valiReqOnly],
            roleDesc: ['', this.valiReqOnly],
            userEmail: ['', this.valiReqOnly],
            userName: ['', this.valiReqOnly],
            name: ['', this.valiReqOnly],
            designationCode: ['', this.valiReqOnly],
            designationDesc: ['', this.valiReqOnly],
        };
        return this.fb.group(basicEle);
    }

    async createLicense(payload, saveType, commentForm, sendbackForm, officerLevel, isFormEdit, licenseApplicationData) {

        console.log('before-payload::', payload);
        payload = await this.getFinalPayload(
            payload, saveType, commentForm, sendbackForm,
            officerLevel, isFormEdit, licenseApplicationData
        );
        if (!payload) {
            console.log('payload problem');
            return false;
        }
        console.log('final-payload::', payload);

        let status = false;
        let data = {};
        let msg;
        const licenseCreationRes: any = await this.licenseSer.createLicense(payload);
        const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
        console.log('respContent::', respContent);
        if (respCode === 200) {
            status = true;
            data = respContent;
            msg = respMsg;
        } else {
            msg = respMsg;
        }
        return { status, data, msg };
    }

    async getFinalPayload(payload, saveType, commentForm, sendbackForm, officerLevel, isFormEdit, licenseApplicationData) {

        const { comments } = commentForm.value;

        // switch (saveType) {
        //     // case STATUS_DRAFT:
        //     // case STATUS_SAVE:
        //     // case STATUS_SENDBACK:
        //         payload.event = '';
        //         payload.level = '';
        //         break;
        //     case STATUS_SUBMITTED:
        //         payload.event = 'INITIATE';
        //         payload.level = 'Level 1';
        //         break;
        //     default:
        //         payload.event = saveType;
        //         payload.level = officerLevel;
        //         break;
        // }

        if (comments) {
            payload.comments = comments;
        }

        if (isFormEdit) {
            payload.id = licenseApplicationData.id;
        }

        // if (saveType === STATUS_SENDBACK) {
        //     const { sendback } = sendbackForm.value;
        //     payload.sentBackLevels = sendback;
        // }

        return payload;
    }

    localityChangeValidatation(formContrl, localityType) {
        // if (localityType === LOCALITY_URBAN) {
        //     formContrl.get('municipalAreaCode').setValidators(this.valiReqOnly);
        //     formContrl.get('municipalAreaCode').updateValueAndValidity();
        //     formContrl.get('block').setValidators([]);
        //     formContrl.get('block').updateValueAndValidity();
        //     formContrl.get('village').setValidators([]);
        //     formContrl.get('village').updateValueAndValidity();
        // }
        // if (localityType === LOCALITY_RURAL) {
        //     formContrl.get('block').setValidators(this.valiReqOnly);
        //     formContrl.get('block').updateValueAndValidity();
        //     formContrl.get('village').setValidators(this.valiReqOnly);
        //     formContrl.get('village').updateValueAndValidity();
        //     formContrl.get('municipalAreaCode').setValidators([]);
        //     formContrl.get('municipalAreaCode').updateValueAndValidity();
        // }
        return true;
    }

    selectITRchangevalidation(formContrl, code) {
       console.log('formContrl', formContrl);
       console.log('code', code);
    //    if (code === PREVIOUSYEAR_ITR) {
    //     formContrl.get('previousItrNotFiled').setValidators(this.valiReqOnly);
    //     formContrl.get('previousItrNotFiled').updateValueAndValidity();
    //    } else {
    //     formContrl.get('previousItrNotFiled').setValidators([]);
    //     formContrl.get('previousItrNotFiled').updateValueAndValidity();
    //    }

       return true;

    }

}
