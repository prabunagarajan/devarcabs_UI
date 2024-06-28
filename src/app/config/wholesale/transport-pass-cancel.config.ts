export class transPortPassCancel {


    public static pendings = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationNumber',
            displayName: 'wholesale.transportpasscancel.applicationid',
            displayFcn: (item: any) => item.applicationNumber,
            type: 'objstring'
        },
        // {
        //     name: '',
        //     displayName: 'Transport PassType',
        //     // displayFcn: (item: any) => item.applicationNumber,
        //     type: 'string'
        // },
        {
            name: 'transportPassDetails?.transportNo',
            displayName: 'wholesale.transportpasscancel.transportpassnumber',
            displayFcn: (item: any) => item.transportPassDetails.transportNo,
            type: 'objstring'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpasscancel.applicationdate',
             displayFcn: (item: any) => item.applicationDate,
            type: 'date'
        },
        {
            name: 'premisesTypeValue',
            displayName: 'wholesale.transportpasscancel.premisestype',
            displayFcn: (item: any) => item.premisesTypeValue,
            type: 'objstring'
        },
        {
            name: 'requestType',
            displayName: 'wholesale.transportpasscancel.requesttype',
            displayFcn: (item: any) => item.requestType,
            type: 'objstring'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
            displayFcn: (item: any) => item.status,
            type: 'options',
            badgeColors: {
                IN_PROGRESS: 'badge-warning',
                DRAFT: 'badge-warning'
            }

        },
    ];
    public static Approved = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationNumber',
            displayName: 'wholesale.transportpasscancel.applicationid',
            displayFcn: (item: any) => item.applicationNumber,
            type: 'objstring'
        },
        // {
        //     name: '',
        //     displayName: 'Transport PassType',
        //     // displayFcn: (item: any) => item.applicationNumber,
        //     type: 'objstring'
        // },
        {
            name: 'transportPassDetails?.transportNo',
            displayName: 'wholesale.transportpasscancel.transportpassnumber',
            displayFcn: (item: any) => item.transportPassDetails.transportNo,
            type: 'objstring'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpasscancel.applicationdate',
             displayFcn: (item: any) => item.applicationDate,
            type: 'date'
        },
        {
            name: 'premisesTypeValue',
            displayName: 'wholesale.transportpasscancel.premisestype',
            displayFcn: (item: any) => item.premisesTypeValue,
            type: 'objstring'
        },
        {
            name: 'requestType',
            displayName: 'wholesale.transportpasscancel.requesttype',
            displayFcn: (item: any) => item.requestType,
            type: 'objstring'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
           // displayFcn: (item: any) => item.status,
            type: 'options',
            badgeColors: {
                APPROVED: 'badge-success',
                //DRAFT: 'badge-warning'
            }

        },
    ];
    public static sendback = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },
        {
            name: 'applicationNumber',
            displayName: 'wholesale.transportpasscancel.applicationid',
            displayFcn: (item: any) => item.applicationNumber,
            type: 'objstring'
        },
        // {
        //     name: '',
        //     displayName: 'Transport PassType',
        //     // displayFcn: (item: any) => item.applicationNumber,
        //     type: 'string'
        // },
        {
            name: 'transportPassDetails?.transportNo',
            displayName: 'wholesale.transportpasscancel.transportpassnumber',
            displayFcn: (item: any) => item.transportPassDetails.transportNo,
            type: 'objstring'
        },
        {
            name: 'applicationDate',
            displayName: 'wholesale.transportpasscancel.applicationdate',
            displayFcn: (item: any) => item.applicationDate,
            type: 'date'
        },
        {
            name: 'premisesTypeValue',
            displayName: 'wholesale.transportpasscancel.premisestype',
            displayFcn: (item: any) => item.premisesTypeValue,
            type: 'objstring'
        },
        {
            name: 'requestType',
            displayName: 'wholesale.transportpasscancel.requesttype',
            displayFcn: (item: any) => item.requestType,
            type: 'objstring'
        },
        {
            name: 'status',
            displayName: 'wholesale.common.status',
            displayFcn: (item: any) => item.status,
            type: 'options',
            badgeColors: {
                SENDBACK: 'badge-warning',
                DRAFT: 'badge-warning'
            }

        },
    ];
}
