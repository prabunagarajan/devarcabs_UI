export class WareHouseBWFL8Config {

    public static titleSection = {
      list: {
          title: 'warehouse.BWFL8.BWFL8',
          button: {
              text: 'warehouse.BWFL8.addBWFL8',
              url: '/warehouse/BWFL8/add'
          }
      },
      add: {
          title: 'warehouse.BWFL8.BWFL8'
      },
      edit: {
          title: 'warehouse.BWFL8.BWFL8'
      },
      view: {
          title: 'warehouse.BWFL8.BWFL8'
      }
    };
    public static breadcrumbs = [
      {
        text: 'warehouse.common.warehouses',
        url: 'warehouse/BWFL8/List',
        hasHref: true
      },
      {
        text: 'warehouse.BWFL8.BWFL8',
        url: 'warehouse/BWFL8/List',
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
        name: 'employeeName',
        displayName: 'warehouse.BWFL8.issuedPassNumber' ,
        type: 'string'
      },
      {
        name: 'date',
        displayName: 'warehouse.BWFL8.issuedPassDate',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'warehouse.BWFL8.addressOfConsigner' ,
        type: 'string'
      },
      {
        name: 'date',
        displayName: 'warehouse.BWFL8.numberOfCases',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'warehouse.BWFL8.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }