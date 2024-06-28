export class StoreConfig {

    public static titleSection = {
      list: {
          title: 'master.store.storemasterlist',
          button: {
              text: 'master.store.addstoremaster',
              url: '/inventory/storemaster/add'
          }
      },
      add: {
          title: 'master.store.storemasterlist'
      },
      edit: {
          title: 'master.store.storemasterlist'
      },
      view: {
          title: 'master.store.storemasterlist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: '/inventory/storemaster/list',
        hasHref: true
      },
      {
          text: 'master.store.storemaster',
          url: '/inventory/storemaster/list',
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
        displayName: 'master.common.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',
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