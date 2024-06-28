export class LicenseeConfig {

    public static titleSection = {
      list: {
          title: 'master.licensee.licensee',
          button: {
              text: 'master.licensee.addlicensee',
              url: '/master/licensee/add'
          }
      },
      add: {
          title: 'master.licensee.list'
      },
      edit: {
          title: 'master.licensee.list'
      },
      view: {
          title: 'master.licensee.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/licensee/list',
        hasHref: true
      },
      {
        text: 'master.licensee.licensee',
        url: '/master/licensee/list',
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
        name: 'code',
        displayName: 'master.licensee.licenseecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.licensee.licenseename',
        type: 'string'
      },
      {
        name: 'licenseName',
        displayName: 'master.licensee.licensename',
        type: 'string'
      },
      {
        name: 'type',
        displayName: 'master.licence.licensetype',
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
  