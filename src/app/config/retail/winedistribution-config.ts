export class WineDistributionConfig {

    public static titleSection = {
      list: {
          title: 'Wine Distribution Ledger',
          button: {
              text: 'Add Wine Distribution Ledger',
              url: '/supplychainmanagement/retail/winedistribution/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/winedistribution/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/winedistribution/list',
        hasHref: true
      },
      {
        text: 'Wine Distribution Ledger',
        url: '/supplychainmanagement/retail/winedistribution/list',
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
        name: 'receivedDate',
        displayName: 'Received Date',
        type: 'string'
      },
      {
        name: 'transportPassNumber',
        displayName: 'Transport Pass Number',
        type: 'string'
      },
      {
        name: 'nameOfRetailShop',
        displayName: 'Name of Retail Shop',
        type: 'string'
      },
      {
        name: 'nameOfBrand',
        displayName: 'Name of Brand',
        type: 'string'
      },
      {
        name: 'intensity',
        displayName: 'Intensity',
        type: 'string',
      },
      {
        name: 'size',
        displayName: 'Size',
        type: 'string'
      },
      {
        name: 'wineCount',
        displayName: 'Wine Count',
        type: 'string'
      }
    ];
  }