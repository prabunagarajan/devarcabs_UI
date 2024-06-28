export class TransactionConfig {

    public static titleSection = {
      list: {
          title: 'retail.transaction.transaction',
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
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/transactionlist',
        hasHref: true
      },
      {
          text: 'retail.common.retail',
          url: '/supplychainmanagement/retail/transactionlist',
          hasHref: true
        },
      {
        text: 'retail.transaction.transaction',
        url: '/supplychainmanagement/retail/transactionlist',
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
        name: 'dateandTime',
        displayName: 'retail.transaction.datetime',
        type: 'string'
      },
      {
        name: 'productQTY',
        displayName: 'retail.transaction.product',
        type: 'string'
      },
      {
        name: 'Amount',
        displayName: 'retail.common.amount',
        type: 'string'
      },
    ];
  }