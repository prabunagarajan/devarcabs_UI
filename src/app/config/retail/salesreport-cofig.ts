export class SalesReportsConfig {

    public static titleSection = {
      list: {
          title: 'Sales Report',
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
          url: '/supplychainmanagement/retail/reports/salesreport',
          hasHref: true
        },
      {
        text: 'Reports',
        url: '/supplychainmanagement/retail/reports/salesreport',
        hasHref: true
      },
      {
        text: 'Liquor Category Report',
        url: '/supplychainmanagement/retail/reports/salesreport',
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
        displayName: 'retail.salesreport.transactionid',
        type: 'string',
      },
      {
        name: 'purchasedDate',
        displayName: 'retail.salesreport.purchaseddateandtime',
        type: 'string'
      },
      {
        name: 'quantity',
        displayName: 'retail.salesreport.quentity',
        type: 'string'
      },
      {
        name: 'amount',
        displayName: 'retail.salesreport.amount',
        type: 'string'
      },
      {
        name: 'saleStatus',
        displayName: 'retail.salesreport.salesstatus',
        type: 'string'
      },
    ];
  }