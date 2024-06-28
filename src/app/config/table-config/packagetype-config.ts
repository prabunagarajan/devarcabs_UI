export class PackageTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.package.packagetypelist',
          button: {
              text: 'master.package.addpackagetype',
              url: '/master/packagetype/add'
          }
      },
      add: {
          title: 'master.package.list'
      },
      edit: {
          title: 'master.package.list'
      },
      view: {
          title: 'master.package.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/package/list',
        hasHref: true
      },
      {
        text: 'master.package.packagetypelist',
        url: '/master/package/list',
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
        displayName: 'master.package.packagecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.package.packagename',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  }