export class FormFL42Config {

    public static titleSection = {
      list: {
          title: 'FL 42',
          button: {
              text: 'retail.common.add',
              url: '/supplychainmanagement/retail/formfl42/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/formfl42/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/formfl42/list',
        hasHref: true
      },
      {
        text: 'FL 13',
        url: '/supplychainmanagement/retail/formfl42/list',
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
        displayName: 'retail.common.date',
        type: 'string'
      },
      {
        name: 'openingBalance',
        displayName: 'retail.formfl42.openingbalance',
        type: 'string'
      },
      {
        name: 'permitNo',
        displayName: 'retail.formfl24.permitno',
        type: 'string'
      },
      {
        name: 'quantity',
        displayName: 'retail.common.quantity',
        type: 'number'
      },
      {
        name: 'total',
        displayName: 'retail.common.total',
        type: 'string',
      },
      {
        name: 'closingBalance',
        displayName: 'retail.formfl42.closingbalance',
        type: 'string'
      },
    ];
  }