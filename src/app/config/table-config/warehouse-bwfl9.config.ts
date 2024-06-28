export class WareHousebwfl9Config {

    public static titleSection = {
      list: {
          title: 'warehouse.bwfl9.bwfl9',
          button: {
              text: 'warehouse.bwfl9.addbwfl9',
              url: '/warehouse/bwfl9/add'
          }
      },
      add: {
          title: 'warehouse.bwfl9.bwfl9'
      },
      edit: {
          title: 'warehouse.bwfl9.bwfl9'
      },
      view: {
          title: 'warehouse.bwfl9.bwfl9'
      }
    };
    public static breadcrumbs = [
      {
        text: 'warehouse.common.warehouses',
        url: 'warehouse/bwfl9/List',
        hasHref: true
      },
      {
        text: 'warehouse.bwfl9.bwfl9',
        url: 'warehouse/bwfl9/List',
        hasHref: true
      }
    ];
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'liquorDescription',
        displayName: 'warehouse.bwfl9.liquorDescription' ,
        type: 'string'
      },
      {
        name: 'brandRegistrationId',
        displayName: 'warehouse.bwfl9.brandRegistrationId',
        type: 'string'
      },
      {
        name: 'beer',
        displayName: 'warehouse.bwfl9.beer' ,
        type: 'string'
      },
      {
        name: 'alcohol',
        displayName: 'warehouse.bwfl9.alcohol',
        type: 'string'
      },
      {
        name: 'total',
        displayName: 'warehouse.bwfl9.total',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'warehouse.bwfl9.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }