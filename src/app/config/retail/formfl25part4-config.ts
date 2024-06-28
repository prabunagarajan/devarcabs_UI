export class FormFL25Part4Config {

    public static titleSection = {
      list: {
          title: 'FL 25 - Part4',
          button: {
              text: 'Add FL 25 - Part4',
              url: '/supplychainmanagement/retail/formfl25/part4/add'
          }
      },
    };
    public static breadcrumbs = [
      {
        text: 'Retail',
        url: 'supplychainmanagement/retail/formfl25/part4/list',
        hasHref: true
      },
      {
        text: 'FL 25 - Part4',
        url: 'supplychainmanagement/retail/formfl25/part4/list',
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
        name: 'date',
        displayName: 'Date',
        type: 'string'
      },
      {
        name: 'foreignManufactureSales',
        displayName: 'Whisky, Brandy.Gin and Rum of foreign manufacture sales',
        type: 'string'
      },
      {
        name: 'otherSpiritsnadLiquorsSales',
        displayName: 'Other spirit and liquors sales',
        type: 'string'
      },
      {
        name: 'otherSortsSales',
        displayName: 'Port sherry, elaret champagne and wine of other sorts sales',
        type: 'string'
      },
      {
        name: 'beerOfForeignManufactureSlaes',
        displayName: 'Beer of foreign manufacture (including Cider) sales',
        type: 'string'
      },
      {
        name: 'beerOfIndianManufactureSales',
        displayName: 'Beer of Indian manufacture sales',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'master.common.status',
        type: 'options',
        badgeColors: {
          Success: 'badge-success',
          Drafted: 'badge-warning'
        }
      }
    ];
  }