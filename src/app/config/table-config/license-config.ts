export class LicenseConfig {

    public static titleSection = {
        list: {
            title: 'License Configuration',
            button: {
                text: 'Add',
                url: '/master/dropdownconfiguration/list'
            }
        },
        add: {
            title: 'Add License Configuration'
        },
        edit: {
            title: 'Edit License Configuration'
        },
        view: {
            title: 'View License Configuration'
        }
    };

    public static breadcrumbs = [
        {
            text: 'Master',
            url: '/licencemgnt/configuration/list',
            hasHref: true
        },
        {
            text: 'License Configuration',
            url: '/licencemgnt/configuration/list',
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
            name: 'entityDesc',
            displayName: 'master.licenseconfiguration.entitytype',
            type: 'string'
        },
        {
            name: 'licenseTypeDesc',
            displayName: 'master.licenseconfiguration.licensetype',
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'master.licenseconfiguration.status',
            type: 'boolean',
            optionVal: ['Active', 'In-Active']
        }
    ];
}