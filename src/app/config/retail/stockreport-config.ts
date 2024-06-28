export class StockReportsConfig {

    public static titleSection = {
      list: {
          title: 'Stock Report',
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
          text: 'Retail',
          url: '/supplychainmanagement/retail/reports/stockreport',
          hasHref: true
        },
      {
        text: 'Reports',
        url: '/supplychainmanagement/retail/reports/stockreport',
        hasHref: true
      },
      {
        text: 'Stock Report',
        url: '/supplychainmanagement/retail/reports/stockreport',
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
        name: 'transactionId',
        displayName: 'retail.stockeport.transactionid',
        type: 'string',
      },
      {
        name: 'stockInDate',
        displayName: 'retail.stockeport.stockindate',
        type: 'string'
      },
      {
        name: 'soldDate',
        displayName: 'retail.stockeport.solddate',
        type: 'string'
      },
      {
        name: 'productsName',
        displayName: 'retail.stockeport.products(s)name',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'retail.stockeport.size',
        type: 'string'
      },
      {
        name: 'amount',
        displayName: 'retail.stockeport.amount',
        type: 'string'
      }
    ];
  }