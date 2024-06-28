export class DropdownConfigurationConfig {
    public static titleSection = {
      list: {
          title: 'Dropdown Configuration',
          button: {
              text: 'Add',
              url: '/master/dropdownconfiguration/add'
          }
      },
      add: {
          title: 'Dropdown Configuration'
      },
      edit: {
          title: 'Dropdown Configuration'
      },
      view: {
          title: 'Dropdown Configuration'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/dropdownconfiguration/list',
        hasHref: true
      },
      {
        text: 'Dropdown Configuration',
        url: '/master/dropdownconfiguration/list',
        hasHref: true
      },
      // {
      //     text: 'master.entity.list',
      //     url: '/location/entity/list',
      //     hasHref: true
      //   },
  
      // {
      //   text: 'master.common.list',
      //   hasHref: false
      // }
    ];
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'paramKey',
        displayName: 'Code',
        type: 'string'
      },
      {
        name: 'description',
        displayName: 'Description',
        type: 'string'
      },
    ];
  }