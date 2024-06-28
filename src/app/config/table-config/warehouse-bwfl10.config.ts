export class WareHouseBWFL10Config {

    public static titleSection = {
      list: {
          title: 'warehouse.bwfl10.bwfl10',
          button: {
              text: 'warehouse.bwfl10.addbwfl10',
              url: '/warehouse/bwfl10/add'
          }
      },
      add: {
          title: 'warehouse.bwfl10.bwfl10'
      },
      edit: {
          title: 'warehouse.bwfl10.bwfl10'
      },
      view: {
          title: 'warehouse.bwfl10.bwfl10'
      }
    };
    public static breadcrumbs = [
      {
        text: 'warehouse.common.warehouses',
        url: 'warehouse/bwfl10/List',
        hasHref: true
      },
      {
        text: 'warehouse.bwfl10.bwfl10',
        url: 'warehouse/bwfl10/List',
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
        displayName: 'warehouse.bwfl10.liquorDescription' ,
        type: 'string'
      },
      {
        name: 'brandRegistrationId',
        displayName: 'warehouse.bwfl10.brandRegistrationId',
        type: 'string'
      },
      {
        name: 'bwfl10Date',
        displayName: 'warehouse.bwfl10.bwfl10Date' ,
        type: 'date'
      },
      {
        name: 'bwfl10Name',
        displayName: 'warehouse.bwfl10.bwfl10Name',
        type: 'string'
      },
      {
        name: 'consignerAddress',
        displayName: 'warehouse.bwfl10.consignerAddress',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'warehouse.bwfl10.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }