export class UomConfig {

    public static titleSection = {
      list: {
          title: 'UOM',
          button: {
              text: 'master.uom.adduom',
              url: '/inventory/uom/add'
          }
      },
      add: {
          title: 'master.common.list'
      },
      edit: {
          title: 'master.common.list'
      },
      view: {
          title: 'master.common.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: 'inventory/uom/list',
        hasHref: true
      },
      {
          text: 'UOM',
          url: '/inventory/uom/list',
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