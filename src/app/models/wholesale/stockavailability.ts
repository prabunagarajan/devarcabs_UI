export class UnitName {
    id: number;
    brandName:string;
    packageSize:number;
    packageType:string;
    totNoOfCasesRequested:number;
    totNoOfBottlesRequested:number;
   }
   export class BrandName {
    id: number;
    unitName:string;
    unitLocation:string;
    brandName:string;
    packageSize:string;
    packageType:string;
    totNoOfCasesRequested:number;
    totNoOfBottlesRequested:number;
   }