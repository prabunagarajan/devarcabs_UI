export class MunicipalityConfig {

    public static titleSection = {
      list: {
          title: 'master.municipality.list',
          button: {
              text: 'master.municipality.add',
              url: '/location/municipality/add'
          }
      },
      add: {
          title: 'master.municipality.list'
      },
      edit: {
          title: 'master.municipality.list'
      },
      view: {
          title: 'master.municipality.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/municipality/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/municipality/list',
        hasHref: true
      },
      {
          text: 'master.common.municipality',
          url: '/location/municipality/list',
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
        name: 'name',
        displayName: 'master.common.municipality',
        type: 'string'
      },
      {
        name: 'stateName',
        displayName: 'master.common.state',
        type: 'string'
      },
      {
        name: 'districtName',
        displayName: 'master.common.district',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }