export class StockInConfig {

    public static titleSection = {
      list: {
          title: 'retail.stockin.stockin',
          button: {
              text: 'retail.stockin.add',
              url: '/supplychainmanagement/retail/stockin/qr-scan'
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
        url: '/supplychainmanagement/retail/stockin',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/stockin',
        hasHref: true
      },
      {
        text: 'retail.stockin.stockin',
        url: '/supplychainmanagement/retail/stockin',
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
        name: 'indentNo',
        displayName: 'retail.stockin.indentno',
        type: 'string'
      },
      {
        name: 'transportPassNo',
        displayName: 'retail.stockin.transportpass',
        type: 'string'
      },
      {
        name: 'totalBottlesReceived',
        displayName: 'retail.stockin.bottlesreceived',
        type: 'string'
      },
      {
        name: 'totalAmount',
        displayName: 'retail.stockin.totalamount',
        type: 'string'
      },
      {
        name: 'paymentStatus',
        displayName: 'retail.transaction.paymentstatus',
        type: 'options',
        badgeColors: {
          Success: 'badge-success',
          Drafted: 'badge-warning'
        }
      },
    ];
  }