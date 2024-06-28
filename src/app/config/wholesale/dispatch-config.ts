export class DispatchConfig {
    public static columns = [
        {
            name: 'id',
            displayName: 'wholesale.dispatchdetails.sno',
            type: 'number'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.dispatchdetails.applicationDate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },
        {
            name: 'transportPassNo',
            displayName: 'wholesale.dispatchdetails.transportpassno',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'retailerName',
            displayName: 'wholesale.dispatchdetails.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.dispatchdetails.totalnoofcase',
            displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.dispatchdetails.totalnoofbottles',
            displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'objstring'
        },

    ];
    public static columnsReport = [
        {
            name: 'id',
            displayName: 'S No',
            type: 'number'
        },
        {
            name: 'dispatchDate',
            displayName: 'Disaptch Date',
            type: 'date'
        },
        {
            name: 'transportPassNo',
            displayName: 'Transport Pass No',
            type: 'string'
        },
        {
            name: 'unitName',
            displayName: 'Unit Name',
            type: 'string'
        },
        {
            name: 'totScannedCases',
            displayName: 'Cases Dispatched',
            type: 'string'
        },
        {
            name: 'totScannedBottles',
            displayName: 'Bottles Dispatched',
            type: 'string'
        },

    ];
}