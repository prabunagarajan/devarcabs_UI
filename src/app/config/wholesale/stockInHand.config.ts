export class StockInHand {


    public static Completed = [
        {
            name: 'id',
            displayName: 'sugarmill.inspectionreport.sno',
            type: 'number'
        },
        
        {
            name: 'brandName',
            displayName: 'master.brand.brandname',
            displayFcn: (item: any) => item.brandName,
            type: 'objstring'
        },
        {
            name: 'liquorType',
            displayName: 'master.liquortype.liquortype',
             displayFcn: (item: any) => item.liquorType,
            type: 'objstring'
        },
        {
            name: 'liquorSubType',
            displayName: 'wholesale.stockinhand.subliquortype',
            displayFcn: (item: any) => item.liquorSubType,
            type: 'objstring'
        },
        {
            name: 'liquorSubTypeDesc',
            displayName: 'wholesale.stockinhand.liquordetaileddescription',
            displayFcn: (item: any) => item.liquorSubTypeDesc,
            type: 'objstring'
        },
        {
            name: 'packageSize',
            displayName: 'wholesale.stockinhand.packagesize',
            displayFcn: (item: any) => item.packageSize,
            type: 'objstring'
        },
        {
            name: 'packageType',
            displayName: 'wholesale.stockinhand.packagetype',
            displayFcn: (item: any) => item.packageType,
            type: 'objstring'
        },
        {
            name: 'availableCases',
            displayName: 'retail.common.availablecases',
            displayFcn: (item: any) => item.availableCases,
            type: 'objstring'
        },
        {
            name: 'noOfBottlesPerCase',
            displayName: 'wholesale.stockinhand.noofbottlespercase',
            displayFcn: (item: any) => item.noOfBottlesPerCase,
            type: 'objstring'
        },
        {
            name: 'availableBottles',
            displayName: 'retail.stockavailability.availablebottles',
            displayFcn: (item: any) => item.availableBottles,
            type: 'objstring'
        },
       
        
    ];
}