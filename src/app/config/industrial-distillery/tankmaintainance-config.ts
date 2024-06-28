export class TankMaintainancesConfig {
    

    public static columns = [
        {
            name: 'id',
            displayName: '#',
            type: 'number'
        },
        {
            name: 'applicationNumber',
            displayName: 'RequestId',
            type: 'string'
        },
        {
            name: 'toTankName',
            displayName: 'Tank Name',
            type: 'string'
        },
        {
            name: 'requestDate',
            displayName: 'Request Date',
            displayFcn: (item: any) => item.requestDate.join('-'),
            type: 'date',
            // type: "string",
            dateFormat: "dd-MMM-yyyy",
        },
        
        // {
        //     name:'reason',
        //     displayName: 'Reason for Maintenance',
        //     type: 'string'
        // },
        {
            name:'maintanenceType',
            displayName: 'Maintainance Type',
            type: 'string'
        },
        {
            name:'durationOfMaintenance',
            displayName:'Duration of Maintenance',
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
                SUMITTED: "badge-success",
                APPROVED: "badge-primary",
                REJECTED: "badge-danger",
                DRAFT: "badge-warning",
                INITIATE: "badge-success"
            }
        }
    ];
}

   

