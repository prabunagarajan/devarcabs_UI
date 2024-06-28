export class WareHouseBWFL7Config {

    public static titleSection = {
      list: {
          title: 'warehouse.bwfl7.bwfl7',
          button: {
              text: 'warehouse.bwfl7.addbwfl7',
              url: '/warehouse/bwfl7/add'
          }
      },
      add: {
          title: 'warehouse.bwfl7.bwfl7'
      },
      edit: {
          title: 'warehouse.bwfl7.bwfl7'
      },
      view: {
          title: 'warehouse.bwfl7.bwfl7'
      }
    };
    public static breadcrumbs = [
      {
        text: 'warehouse.common.warehouses',
        url: 'warehouse/bwfl7/List',
        hasHref: true
      },
      {
        text: 'warehouse.bwfl7.bwfl7',
        url: 'warehouse/bwfl7/List',
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
        name: 'bwfl7Date',
        displayName: 'warehouse.bwfl7.bwfl7Date' ,
        type: 'date'
      },
      {
        name: 'descriptionOfFL',
        displayName: 'warehouse.bwfl7.descriptionOfFL',
        type: 'string'
      },
      {
        name: 'brandRegistrationId',
        displayName: 'warehouse.bwfl7.brandRegistrationId' ,
        type: 'string'
      },
      {
        name: 'batchNumber',
        displayName: 'warehouse.bwfl7.batchNumber',
        type: 'number'
      },
      {
        name: 'active',
        displayName: 'warehouse.bwfl7.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }