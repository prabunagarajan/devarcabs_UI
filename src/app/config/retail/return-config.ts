export class ReturnConfig {

    public static titleSection = {
      list: {
          title: 'retail.returns.returns',
          button: {
              text: 'retail.returns.makereturn',
              url: '/supplychainmanagement/retail/return/qr-scan'
          }
      },
      add: {
          title: 'retail.returns.returns'
      },
      edit: {
          title: 'retail.returns.returns'
      },
      view: {
          title: 'retail.returns.returns'
      }
    };
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/location/state/list',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/location/state/list',
        hasHref: true
      },
      {
          text: 'retail.returns.returns',
          url: '/location/state/list',
          hasHref: true
        },
      // {
      //   text: 'master.common.list',
      //   hasHref: false
      // }
    ];
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'transactionDate',
        displayName: 'retail.returns.trasactiondate',
        type: 'string'
      },
      {
        name: 'transportPassNo',
        displayName: 'retail.returns.transportpassno',
        type: 'string'
      },
      {
        name: 'totalNoofItems',
        displayName: 'retail.returns.totalnoofitems',
        type: 'number'
      },
      {
        name: 'refundableAmount',
        displayName: 'retail.returns.refundableamount',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  }