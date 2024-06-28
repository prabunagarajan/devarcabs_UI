export class UserConfig {

    public static titleSection = {
      list: {
          title: 'usermanagement.usermanagement.userslist',
          button: {
              text: 'usermanagement.usermanagement.addusers',
              url: '/usermanagement/user/add'
          }
      },
      add: {
          title: 'usermanagement.usermanagement.userslist'
      },
      edit: {
          title: 'usermanagement.usermanagement.userslist'
      },
      view: {
          title: 'usermanagement.usermanagement.userslist'
      }
    };
    public static breadcrumbs = [
      {
        text: 'usermanagement.usermanagement.usermanagement',
        url: '/usermanagement/user/list',
        hasHref: true
      },
      {
        text: 'usermanagement.usermanagement.userprofile',
        url: '/usermanagement/user/list',
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
        name: 'firstName',
        displayName: 'usermanagement.common.name',
        type: 'string'
      },
      {
        name: 'lastName',
        displayName: 'usermanagement.usermanagement.lastname',
        type: 'string'
      },
      {
        name: 'username',
        displayName: 'usermanagement.usermanagement.username',
        type: 'string'
      },
      {
        name: 'mobileNumber',
        displayName: 'usermanagement.usermanagement.mobilenumber',
        type: 'string'
      },
      {
        name: 'email',
        displayName: 'usermanagement.usermanagement.emailaddress',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'usermanagement.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }