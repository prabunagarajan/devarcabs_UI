export class QrCodeConfig {
    

    public static columns = [
        
        {
            name: 'id',
            displayName: '#',
            type: 'number'
        },
        {
            name: 'brandName',
            displayName: 'Brand Name',
            type:'string'
        },
       
        {
            name: 'numberOfBottles',
            displayName: 'No of Bottles',
            type: 'string'
        },
        {
            name: 'applicationNumber',
            displayName: 'Application Number',
            type: 'string'
        },
        
       
        {
            name: 'numberOfCases',
            displayName: 'No Of Cases',
            type: 'string'
        },

        {
            name: 'requestDate',
            displayName: 'Date',
            type: 'date',
            dateFormat: "dd-MMM-yyyy"
        },
       
        {
            name: 'licenseNumber',
            displayName: 'Licence Number',
            type: 'string'
        },
       
        {
            name: 'printStatus',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
                Success: 'badge-success',
                Drafted: 'badge-warning',
                APPROVED: "badge-primary",
                DRAFT: "badge-warning"
            }
        }
    ];
}
