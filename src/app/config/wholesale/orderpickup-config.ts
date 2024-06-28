export class orderpickconfig {


    public static pendings = [
        {
            name: 'id',
            displayName:'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        // here we need to change the display name  once api i sredy
        {
            name: 'applicationDate',
            displayName: 'wholesale.orderpickupdetails.trasportpadddate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },
        // here we need to change the display name once api i sredy
        {
            name: 'transportNo',
            displayName: 'wholesale.orderpickupdetails.transportPassNo',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },

        {
            name: 'retailerName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
           displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'objstring'
        },
    ];
    public static Inprogress = [
        {
            name: 'id',
            displayName:'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        // here we need to change the display name  once api i sredy
        {
            name: 'applicationDate',
            displayName: 'wholesale.orderpickupdetails.trasportpadddate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },
        // here we need to change the display name once api i sredy
        {
            name: 'transportNo',
            displayName: 'wholesale.orderpickupdetails.transportPassNo',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },

        {
            name: 'retailerName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
           displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'objstring'
        },
    ];
    public static completetd = [
        {
            name: 'id',
            displayName:'wholesale.orderpickupdetails.sno',
            type: 'number'
        },
        // here we need to change the display name  once api i sredy
        {
            name: 'applicationDate',
            displayName: 'wholesale.orderpickupdetails.trasportpadddate',
            displayFcn: (item: any) => item.transportDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },
        // here we need to change the display name once api i sredy
        {
            name: 'transportNo',
            displayName: 'wholesale.orderpickupdetails.transportPassNo',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },

        {
            name: 'retailerName',
            displayName: 'wholesale.orderpickupdetails.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedcases',
           displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'objstring'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.orderpickupdetails.requestedbottles',
            displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'objstring'
        },
    ];
}