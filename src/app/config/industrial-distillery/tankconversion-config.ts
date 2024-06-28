export class TankConversionConfig {
    public static titleSection = {
        list: {
            title: 'Tank Conversion',
            button: {
                text: 'Add Tank Conversion',
                url: '/supplychainmanagement/distillery/tankconversion/add'
            }
        },
    };

    public static breadcrumbs = [
        {
            text: 'Industrial Distillery',
            url: '/supplychainmanagement/distillery/tankconversion/list',
            hasHref: true
        },
        {
            text: 'Tank',
            url: '/supplychainmanagement/distillery/tankconversion/list',
            hasHref: true
        },
        {
            text: 'Tank Conversion',
            url: '/supplychainmanagement/distillery/tankconversion/list',
            hasHref: true
        }
    ];

    public static columns = [
        {
            name: 'id',
            displayName: '#',
            type: 'number'
        },
        {
            name: 'applicationNumber',
            displayName: 'Request ID',
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
        {
            name: 'toTankName',
            displayName: 'Tank Name',
            type: 'string'
        },
        // {
        //     name: 'fromTankUsageGroupName',
        //     displayName: 'From Tank Usage',
        //     type: 'string'
        // },
        // {
        //     name: 'toTankUsageGroupName',
        //     displayName: 'To Tank Usage',
        //     type: 'string'
        // },
        // {
        //     name: 'fromTankRawMaterialName',
        //     displayName: 'From Raw Material',
        //     type: 'string'
        // },
        // {
        //     name: 'toTankRawMaterialName',
        //     displayName: 'To Raw Material',
        //     type: 'string'
        // },
        {
            name: 'status',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
                SUMITTED: "badge-success",
                APPROVED: "badge-primary",
                REJECTED: "badge-danger",
                DRAFT: "badge-warning",
                // INITIATE: "badge-success",
            }
        }
    ];
}