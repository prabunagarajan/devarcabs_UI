export class stockAvailability {


    public static UnitName = [
        {
            name: 'id',
            displayName: 'S No',
            type: 'number'
        },
        {
            name: 'brandName',
            displayName: 'Brand name',
            displayFcn: (item: any) => item.brandName,
            type: 'objstring'
        },
        
        {
            name: 'packageSize',
            displayName: 'Package size',
            displayFcn: (item: any) => item.packageSize,
            type: 'number'
        },
        {
            name: 'packageType',
            displayName: 'Package type',
            displayFcn: (item: any) => item.packageType,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'No Of Cases req',
            displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottelsRequested',
            displayName: 'Total No Of Botteles Req',
            displayFcn: (item: any) => item.totNoOfBottelsRequested,
            type: 'number'
        },
       
    ];
   

    public static BrandName = [
        {
            name: 'id',
            displayName: 'S No',
            type: 'number'
        },
        {
            name: 'licenseType',
            displayName: 'License Type',
            displayFcn: (item: any) => item.licenseType,
            type: 'objstring'
        },
        
        {
            name: 'unitName',
            displayName: 'Unit Name',
            displayFcn: (item: any) => item.unitName,
            type: 'objstring'
        },
        {
            name: 'unitLocation',
            displayName: 'Unit Location',
            displayFcn: (item: any) => item.unitLocation,
            type: 'objstring'
        },
        {
            name: 'brandName',
            displayName: '>Brand Name',
            displayFcn: (item: any) => item.brandName,
            type: 'objstring'
        },
        {
            name: 'packageSize',
            displayName: 'Package size',
            displayFcn: (item: any) => item.packageSize,
            type: 'number'
        },
        {
            name: 'packageType',
            displayName: 'Package type',
            displayFcn: (item: any) => item.packageType,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottelsRequested',
            displayName: 'Total No Of Botteles Req',
            displayFcn: (item: any) => item.totNoOfBottelsRequested,
            type: 'number'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'No Of Cases req',
            displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
    ];
   
}
