export class StockInHandConfig {

    public static titleSection = {
      list: {
          title: 'retail.stockinhand.stockinhand',
    //       button: {
    //           text: 'master.applicationstatus.addapplicantstatus',
    //           url: '/master/applicationstatus/add'
    //       }
    //   },
    //   add: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   edit: {
    //       title: 'master.applicationstatus.applicationstatus'
    //   },
    //   view: {
    //       title: 'master.applicationstatus.applicationstatus'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/stockinhand',
        hasHref: true
      },
      {
          text: 'retail.common.retail',
          url: '/supplychainmanagement/retail/stockinhand',
          hasHref: true
        },
      {
        text: 'retail.stockinhand.stockinhand',
        url: '/supplychainmanagement/retail/stockinhand',
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
        name: 'brandName',
        displayName: 'retail.stockinhand.brandname',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'retail.common.size',
        type: 'string'
      },
      {
        name: 'availableCases',
        displayName: 'retail.common.availablecases',
        type: 'string'
      },
      {
        name: 'noOfBottolPerCase',
        displayName: 'retail.stockinhand.noofbottles',
        type: 'string'
      },
    ];
  }