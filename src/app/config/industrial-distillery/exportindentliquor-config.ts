export class ExportIndentLiquorConfig {
    public static titleSection = {
        list: {
            title: 'Export Indent (Liquor)',
            button: {
                text: 'Add Export Indent',
                url: '/supplychainmanagement/distillery/exportindentliquor/add'
            }
        },
    };

    public static breadcrumbs = [
        {
            text: 'Industrial Distillery',
            url: '/supplychainmanagement/distillery/exportindentliquor/list',
            hasHref: true
        },
        {
            text: 'Indent Request',
            url: '/supplychainmanagement/distillery/exportindentliquor/list',
            hasHref: true
        },
        {
            text: 'Export Indent (Liquor)',
            url: '/supplychainmanagement/distillery/exportindentliquor/list',
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
            name: 'exportTo',
            displayName: 'Export To (Outside State, Outside Country)',
            type: 'string'
        },
        {
            name: 'appDate',
            displayName: 'App Date',
            type: 'string'
        },
        {
            name: 'unit',
            displayName: 'Importing Unit	',
            type: 'string'
        },
        {
            name: 'brandName',
            displayName: 'Brand Name',
            type: 'string'
        },
        {
            name: 'size',
            displayName: 'Size of Bottle',
            type: 'string'
        },
        {
            name: 'packageType',
            displayName: 'Package Type',
            type: 'string'
        },
        {
            name: 'cases',
            displayName: 'No of Cases',
            type: 'number'
        },
        {
            name: 'bottles',
            displayName: 'No of Bottles',
            type: 'number'
        },
        {
            name: 'bl',
            displayName: 'B.L',
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
                Success: 'badge-success',
                Drafted: 'badge-warning'
            }
        }
    ];
}