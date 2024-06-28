export class DepartmentConfig {

    public static titleSection = {
      list: {
          title: 'master.department.department',
          button: {
              text: 'master.department.adddepartment',
              url: '/master/department/add'
          }
      },
      add: {
          title: 'master.department.department'
      },
      edit: {
          title: 'master.department.department'
      },
      view: {
          title: 'master.department.department'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/department/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/master/department/list',
        hasHref: true
      },
      {
          text: 'master.department.department',
          url: '/master/department/list',
          hasHref: true
        },
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
        name: 'code',
        displayName: 'master.department.departmentcode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.department.departmentname',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }