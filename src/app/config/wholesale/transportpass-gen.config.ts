export class transPortPassGenration {


    public static Inprogress = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpassgen.applicationdate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },

        // {
        //     name: 'transportDate',
        //     displayName: 'wholesale.transportpassgen.transportdate',
        //     displayFcn: (item: any) => item.transportDate,
        //     type: 'date'
        // },
        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'retailerName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            // displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.transportpassgen.totalnofbottlesreq',
            //  displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                'Draft': 'badge-primary',
                'In Progress': 'badge-secondary',
                'Clarification': 'badge-warning'
            }

        },
    ];
    public static Completed = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpassgen.applicationdate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },


        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'retailerName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.transportpassgen.totalnofbottlesreq',
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                'Approved': 'badge-success',
                'Completed': 'badge-info',
                'Rejected': 'badge-danger',
                'In Progress': 'badge-secondary',
            }

        },
    ];
    public static Canceled = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpassgen.applicationdate',
            displayFcn: (item: any) => item.issueDate,
            type: 'date',
            dateFormat: 'dd-MMM-yyyy',
        },

        // {
        //     name: 'transportDate',
        //     displayName: 'wholesale.transportpassgen.transportdate',
        //     displayFcn: (item: any) => item.transportDate,
        //     type: 'date'
        // },
        {
            name: 'transportNo',
            displayName: 'wholesale.transportpassgen.transportpassno',
            displayFcn: (item: any) => item.transportNo,
            type: 'objstring'
        },
        {
            name: 'retailerName',
            displayName: 'wholesale.transportpassgen.unitname',
            displayFcn: (item: any) => item.retailerName,
            type: 'objstring'
        },
        {
            name: 'totNoOfCasesRequested',
            displayName: 'wholesale.transportpassgen.totalnoofcasesreq',
            // displayFcn: (item: any) => item.totNoOfCasesRequested,
            type: 'string'
        },
        {
            name: 'totNoOfBottlesRequested',
            displayName: 'wholesale.transportpassgen.totalnofbottlesreq',
            //  displayFcn: (item: any) => item.totNoOfBottlesRequested,
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
            // displayFcn: (item: any) => item.transportPassStatus,
            type: 'options',
            badgeColors: {
                'CANCELLED': 'badge-warning',
                'MODIFIED': 'badge-warning'
            }

        },
    ];
}
