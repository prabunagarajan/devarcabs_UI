export class VillageConfig {

    public static titleSection = {
      list: {
          title: 'master.village.list',
          button: {
              text: 'master.village.add',
              url: '/location/village/add'
          }
      },
      add: {
          title: 'master.village.list'
      },
      edit: {
          title: 'master.village.list'
      },
      view: {
          title: 'master.village.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/village/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/village/list',
        hasHref: true
      },
      {
          text: 'master.common.village',
          url: '/location/village/list',
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
        displayName: 'master.common.village',
        type: 'string'
      },
      {
        name: 'districtName',
        displayName: 'master.common.district',
        type: 'string'
      },
      {
        name: 'talukName',
        displayName: 'master.common.taulk',
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