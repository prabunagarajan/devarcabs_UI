export class CorporationConfig {

    public static titleSection = {
      list: {
          title: 'master.corporation.list',
          button: {
              text: 'master.corporation.add',
              url: '/location/corporation/add'
          }
      },
      add: {
          title: 'master.corporation.list'
      },
      edit: {
          title: 'master.corporation.list'
      },
      view: {
          title: 'master.corporation.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/corporation/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/corporation/list',
        hasHref: true
      },
      {
          text: 'master.common.corporation',
          url: '/location/corporation/list',
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
        displayName: 'master.common.corporation',
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