export class ItemConfig {

    public static titleSection = {
      list: {
          title: 'master.item.itemmasterlist',
          button: {
              text: 'master.item.additem',
              url: '/inventory/itemmaster/add'
          }
      },
      add: {
          title: 'master.item.itemmasterlist'
      },
      edit: {
          title: 'master.item.itemmasterlist'
      },
      view: {
          title: 'master.item.itemmasterlist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: '/inventory/itemmaster/list',
        hasHref: true
      },
      {
          text: 'master.item.itemmaster',
          url: '/inventory/itemmaster/list',
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