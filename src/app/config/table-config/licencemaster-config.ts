export class LicenceMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.licence.licencelist',
          button: {
              text: 'master.licence.addlicence',
              url: '/master/licencemaster/add'
          }
      },
      add: {
          title: 'master.licencemaster.list'
      },
      edit: {
          title: 'master.licencemaster.list'
      },
      view: {
          title: 'master.licencemaster.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/licencemaster/list',
        hasHref: true
      },
      {
        text: 'master.licence.licencemaster',
        url: '/master/licencemaster/list',
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
        displayName: 'master.licence.licencecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.licence.licencename',
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