export class ProductionPlanConfig {
    

    public static columns = [
        {
            name: 'id',
            displayName: '#',
            type: 'number'
        },
        {
            name: 'requestDate',
            displayName: 'Request Date',
            type: 'date',
           dateFormat: "dd-MMM-yyyy"
        },
        {
            name: 'applicationNumber',
            displayName: 'Plan Id',
            type: 'string'
        },
        {
            name: 'brandName',
            displayName: 'Brand Name',
            type: 'string'
        },   
        {
            name:'productionLineValue',
            displayName: 'Production Line',
            type: 'string'
        },
        {
            name:'noOfCases',
            displayName: 'No.Of.Cases',
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
