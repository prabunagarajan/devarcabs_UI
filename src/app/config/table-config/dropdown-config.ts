export class DropdownConfig {

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
        name: 'paramKey',
        displayName: 'master.dropdownmaster.independent.code',
        type: 'string'
      },
      {
        name: 'description',
        displayName: 'master.dropdownmaster.independent.description',
        type: 'string'
      }
    ];
  }