export class WorkflowConfig {

    public static titleSection = {
        list: {
            title: 'Dropdown Configuration',
            button: {
                text: 'Add',
                url: '/master/dropdownconfiguration/list'
            }
        },
        add: {
            title: 'Add Dropdown Configuration'
        },
        edit: {
            title: 'Edit Dropdown Configuration'
        },
        view: {
            title: 'View Dropdown Configuration'
        }
    };

    public static breadcrumbs = [
        {
            text: 'Master',
            url: '/master/dropdownconfiguration/list',
            hasHref: true
        },
        {
            text: 'Dropdown Configuration',
            url: '/master/dropdownconfiguration/list',
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
            name: 'moduleNameDesc',
            displayName: 'workflowconfig.allscreen.modulename',
            type: 'string'
        },
        {
            name: 'subModuleNameDesc',
            displayName: 'workflowconfig.allscreen.submodulename',
            type: 'string'
        },
        {
            name: 'workflowName',
            displayName: 'workflowconfig.allscreen.workflowname',
            type: 'string'
        }
    ];
}