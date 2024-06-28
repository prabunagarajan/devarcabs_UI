export class WareHouseBWFL6Config {

    public static titleSection = {
      list: {
          title: 'warehouse.bwfl6.bwfl6',
          button: {
              text: 'warehouse.bwfl6.addbwfl6',
              url: '/warehouse/bwfl6/add'
          }
      },
      add: {
          title: 'warehouse.bwfl6.bwfl6'
      },
      edit: {
          title: 'warehouse.bwfl6.bwfl6'
      },
      view: {
          title: 'warehouse.bwfl6.bwfl6'
      }
    };
    public static breadcrumbs = [
      {
        text: 'warehouse.common.warehouses',
        url: 'warehouse/bwfl6/List',
        hasHref: true
      },
      {
        text: 'warehouse.bwfl6.bwfl6',
        url: 'warehouse/bwfl6/List',
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
        name: 'number',
        displayName: 'warehouse.bwfl6.issuedPassNumber' ,
        type: 'string'
      },
      {
        name: 'date',
        displayName: 'warehouse.bwfl6.issuedPassDate',
        type: 'string'
      },
      {
        name: 'address',
        displayName: 'warehouse.bwfl6.addressOfConsigner' ,
        type: 'string'
      },
      {
        name: 'date',
        displayName: 'warehouse.bwfl6.numberOfCases',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'warehouse.bwfl6.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }