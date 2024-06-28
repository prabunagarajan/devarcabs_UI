export class RouteConfig {

    public static titleSection = {
      list: {
          title: 'master.routemaster.routemasterlist',
          button: {
              text: 'master.routemaster.addroutemaster',
              url: '/master/routemaster/add'
          }
      },
      add: {
          title: 'master.routemaster.routemasterlist'
      },
      edit: {
          title: 'master.routemaster.routemasterlist'
      },
      view: {
          title: 'master.routemaster.routemasterlist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/routemaster/list',
        hasHref: true
      },
      {
          text: 'master.routemaster.routemaster',
          url: '/master/routemaster/list',
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
        name: 'routeCode',
        displayName: 'master.routemaster.routecode',
        type: 'string'
      },
      {
        name: 'routeName',
        displayName: 'master.routemaster.routename',
        type: 'string'
      },
      {
        name: 'routeFrom',
        displayName: 'master.routemaster.fromlocation',
        type: 'string'
      },
      {
        name: 'routeTo',
        displayName: 'master.routemaster.tolocation',
        type: 'string'
      },
      {
        name: 'distance',
        displayName: 'master.routemaster.distance',
        type: 'string'
      },
      {
        name: 'duration',
        displayName: 'master.routemaster.duration',
        type: 'string'
      },
      {
        name: 'wastage',
        displayName: 'master.routemaster.wastageallowed',
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