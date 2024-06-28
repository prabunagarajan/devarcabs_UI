export class StateConfig {

    public static titleSection = {
      list: {
          title: 'master.state.list',
          button: {
              text: 'master.state.add',
              url: '/location/state/add'
          }
      },
      add: {
          title: 'master.state.list'
      },
      edit: {
          title: 'master.state.list'
      },
      view: {
          title: 'master.state.list'
      }
    };

    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/location/state/list',
        hasHref: true
      },
      {
        text: 'master.common.location',
        url: '/location/state/list',
        hasHref: true
      },
      {
          text: 'master.common.state',
          url: '/location/state/list',
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
        name: 'stateCode',
        displayName: 'master.state.statecode',
        type: 'string'
      },
      {
        name: 'stateName',
        displayName: 'master.state.statename',
        type: 'string'
      },
      {
        name: 'countryName',
        displayName: 'master.common.country',
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