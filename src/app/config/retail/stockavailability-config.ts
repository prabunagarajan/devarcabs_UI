export class StockAvailabilityConfig {

    public static titleSection = {
      list: {
          title: 'Stock Availability Wholesale',
      },
    //   add: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   edit: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   view: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   }
    };
  
    public static breadcrumbs = [
      {
        text: 'Supply Chain Management',
        url: '/supplychainmanagement/retail/stockavailabilitywholesale',
        hasHref: true
      },
      {
          text: 'Retail',
          url: '/supplychainmanagement/retail/stockavailabilitywholesale',
          hasHref: true
        },
      {
        text: 'Stock Availability Wholesale',
        url: '/supplychainmanagement/retail/stockavailabilitywholesale',
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
        name: 'star',
        displayName: 'Star',
        type: 'string',
      },
      {
        name: 'wholesaleType',
        displayName: 'Wholesale Type',
        type: 'string'
      },
      {
        name: 'wholesaleName',
        displayName: 'Wholesale Name',
        type: 'string'
      },
    ];
  }