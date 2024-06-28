export class RoleConfig {

    public static titleSection = {
      list: {
          title: 'usermanagement.roles.roleslist',
          button: {
              text: 'usermanagement.roles.addroles',
              url: '/usermanagement/role/add'
          }
      },
      add: {
          title: 'usermanagement.roles.roleslist'
      },
      edit: {
          title: 'usermanagement.roles.roleslist'
      },
      view: {
          title: 'usermanagement.roles.roleslist'
      }
    };
    public static breadcrumbs = [
      {
        text: 'usermanagement.usermanagement.usermanagement',
        url: '/usermanagement/role/list',
        hasHref: true
      },
      {
        text: 'usermanagement.common.role',
        url: '/usermanagement/role/list',
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
        name: 'roleCode',
        displayName: 'usermanagement.roles.rolecode',
        type: 'string'
      },
      {
        name: 'roleName',
        displayName: 'usermanagement.roles.rolename',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'usermanagement.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }