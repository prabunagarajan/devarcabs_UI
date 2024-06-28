export class ReturnFromCustomerConfig {

    public static titleSection = {
      list: {
          title: 'retail.returncustomer.returncustomer',
          button: {
              text: 'retail.returncustomer.returncustomer',
              url: '/supplychainmanagement/retail/returnfromcustomer/add'
          }
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
        url: '/supplychainmanagement/retail/returnfromcustomer',
        hasHref: true
      },
      {
          text: 'retail.common.retail',
          url: '/supplychainmanagement/retail/returnfromcustomer',
          hasHref: true
        },
      {
        text: 'retail.returncustomer.returncustomer',
        url: '/supplychainmanagement/retail/returnfromcustomer',
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
        displayName: 'retail.common.transactionid',
        type: 'string'
      },
      {
        name: 'transactionDate',
        displayName: 'retail.common.transactiondate',
        type: 'string'
      },
      {
        name: 'quantity',
        displayName: 'retail.common.quantity',
        type: 'string'
      },
      {
        name: 'amount',
        displayName: 'retail.common.amount',
        type: 'string'
      },
    ];
  }