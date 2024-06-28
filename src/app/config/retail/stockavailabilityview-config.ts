export class StockAvailabilityViewConfig {

    public static titleSection = {
      list: {
          title: 'Stock Availability',
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
      },
      {
        text: 'Stock Availability',
        url: '/supplychainmanagement/retail/stockavailabilitywholesale/stockavailability',
        hasHref: false
      }
    ];

    public static columns = [
        {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'productName',
        displayName: 'retail.stockavailability.productname',
        type: 'string',
      },
      {
        name: 'size',
        displayName: 'retail.common.size',
        type: 'string'
      },
      {
        name: 'packageType',
        displayName: 'retail.stockavailability.packagetype',
        type: 'string'
      },
      {
        name: 'availableCases',
        displayName: 'retail.common.availablecases',
        type: 'string'
      },
      {
        name: 'availableBottles',
        displayName: 'retail.stockavailability.availablebottles',
        type: 'string'
      },
    ];
  }