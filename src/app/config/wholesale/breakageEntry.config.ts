export class BreakageEntry {


    public static Accepted = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        
        {
            name: 'indentDate',
            displayName: 'wholesale.transportpassgen.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'brandName',
            displayName: 'wholesale.breakageentry.brandname',
             displayFcn: (item: any) => item.Brand,
            type: 'objstring'
        },
        {
            name: 'liquorType',
            displayName: 'wholesale.breakageentry.liquortype',
            displayFcn: (item: any) => item.liquorType,
            type: 'objstring'
        },
        {
            name: 'packageSize',
            displayName: 'wholesale.breakageentry.packagesize',
            displayFcn: (item: any) => item.packageSize,
            type: 'number',
        },
        {
            name: 'totalNoOfCases',
            displayName: 'wholesale.breakageentry.noofdamagedcases',
            displayFcn: (item: any) => item.totalNoOfCases,
            type: 'objstring'
        },
        {
            name: 'totalNoOfBottles',
            displayName: 'wholesale.breakageentry.noofdamagedbottles',
            displayFcn: (item: any) => item.totalNoOfBottles,
            type: 'objstring'
        },
       
       
    ];
}