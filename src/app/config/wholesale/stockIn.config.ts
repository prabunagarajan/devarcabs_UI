export class StockIn {


    public static Completed = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'stockInDate',
            displayName: 'wholesale.stockin.date',
            displayFcn: (item: any) => item.stockInDate,
            type: 'date'
        },
        {
            name: 'transportationPassNo',
            displayName: 'wholesale.stockin.transportpassnumber',
             displayFcn: (item: any) => item.transportationPassNo,
            type: 'objstring'
        },
        {
            name: 'totalNoOfIndents',
            displayName: 'wholesale.stockin.totalnoofindent',
            displayFcn: (item: any) => item.totalNoOfIndents,
            type: 'objstring'
        },
        {
            name: 'totalReceivedCases',
            displayName: 'wholesale.stockin.totalnoofcasesrecevied',
            displayFcn: (item: any) => item.totalReceivedCases,
            type: 'objstring'
        },
        {
            name: 'totalReceivedBottles',
            displayName: 'wholesale.stockin.totalnoofbottlesrecevied',
             displayFcn: (item: any) => item.totalReceivedBottles,
            type: 'objstring'
        },
        
    ];
}