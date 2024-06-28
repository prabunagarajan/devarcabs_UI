export class SalesLedgerConfig {

    public static titleSection = {
      list: {
          title: 'Sales Ledger',
          button: {
              text: 'Add Sales Ledger',
              url: '/supplychainmanagement/retail/salesledger/add'
          }
      },
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/salesledger/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/salesledger/list',
        hasHref: true
      },
      {
        text: 'Sales Ledger',
        url: '/supplychainmanagement/retail/salesledger/list',
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
        name: 'closingBalance650',
        displayName: '650 ML',
        type: 'string'
      },
      {
        name: 'closingBalance500',
        displayName: '500 ML',
        type: 'string'
      },
      {
        name: 'closingBalance355',
        displayName: '355 ML',
        type: 'string'
      },
      {
        name: 'closingBalance330',
        displayName: '330 ML',
        type: 'string',
      },
      {
        name: 'closingBalance275',
        displayName: '275 ML',
        type: 'string'
      },
      {
        name: 'closingBalanceWine',
        displayName: 'Wine',
        type: 'string'
      }
    ];
  }