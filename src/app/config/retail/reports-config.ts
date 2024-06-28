export class ReportsConfig {

    public static titleSection = {
    //   list: {
    //       title: 'master.state.list',
    //       button: {
    //           text: 'master.state.add',
    //           url: '/location/state/add'
    //       }
    //   },
    //   add: {
    //       title: 'master.state.list'
    //   },
    //   edit: {
    //       title: 'master.state.list'
    //   },
    //   view: {
    //       title: 'master.state.list'
    //   }
    };
    public static breadcrumbs = [
    //   {
    //     text: 'master.common.masters',
    //     url: '/location/state/list',
    //     hasHref: true
    //   },
    //   {
    //     text: 'master.common.location',
    //     url: '/location/state/list',
    //     hasHref: true
    //   },
    //   {
    //       text: 'master.common.state',
    //       url: '/location/state/list',
    //       hasHref: true
    //     },
    //   {
    //     text: 'master.common.list',
    //     hasHref: false
    //   }
    ]
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'purchasedDate',
        displayName: 'Purchased Date & Time',
        type: 'string'
      },
      {
        name: 'productName',
        displayName: 'Product(S) Name',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'Size',
        type: 'string'
      },
      {
        name: 'amount',
        displayName: 'Amount',
        type: 'string'
      }
    ];
  }