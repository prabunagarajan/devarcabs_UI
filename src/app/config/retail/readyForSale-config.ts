export class ReadyForSaletConfig {

    public static titleSection = {
      list: {
          title: 'retail.readyforsale.readyforsale',
          // button: {
          //     text: 'master.state.add',
          //     url: '/location/state/add'
          // }
      },
      add: {
          title: 'retail.readyforsale.list'
      },
      edit: {
          title: 'retail.readyforsale.list'
      },
      view: {
          title: 'retail.readyforsale.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'retail.common.supplychainmanagement',
        url: '/supplychainmanagement/retail/readyforsale',
        hasHref: true
      },
      {
        text: 'retail.common.retail',
        url: '/supplychainmanagement/retail/readyforsale',
        hasHref: true
      },
      {
          text: 'retail.readyforsale.readyforsale',
          url: '/supplychainmanagement/retail/readyforsale',
          hasHref: true
        },
      // {
      //   text: 'retail.readyforsale.readyforsale',
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
        name: 'date',
        displayName: 'retail.common.datetime',
        type: 'string'
      },
      {
        name: 'productname',
        displayName: 'retail.common.productname',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'retail.common.size',
        type: 'string'
      },
      {
        name: 'quantity',
        displayName: 'retail.common.quantity',
        type: 'number'
      },
      {
        name: 'amount',
        displayName: 'retail.common.amount',
        type: 'string'
      }
    ];
  }