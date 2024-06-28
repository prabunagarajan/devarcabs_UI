export class DesignationConfig {

    public static titleSection = {
      list: {
        title: 'usermanagement.designationmanagement.designationmanagement',
        button: {
          text: 'usermanagement.designationmanagement.adddesignationmanagement',
          url: '/usermanagement/designation/add'
        }
      },
      add: {
          title: 'usermanagement.designationmanagement.designationmanagement'
      },
      edit: {
          title: 'usermanagement.designationmanagement.designationmanagement'
      },
      view: {
          title: 'usermanagement.designationmanagement.designationmanagement'
      }
    };

    public static breadcrumbs = [
      {
        text: 'usermanagement.usermanagement.usermanagement',
        url: '/usermanagement/designation/list',
        hasHref: true
      },
      {
        text: 'usermanagement.designationmanagement.designationmanagement',
        url: '/usermanagement/designation/list',
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
        name: 'code',
        displayName: 'usermanagement.designationmanagement.designationcode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'usermanagement.designationmanagement.designationname',
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