export class ModeOfPayConfig {

    public static titleSection = {
      list: {
          title: 'master.modeofpay.modeofpay',
          button: {
              text: 'master.modeofpay.modeofpay',
              url: '/master/modeofpay/add'
          }
      },
      add: {
          title: 'master.modeofpay.modeofpay'
      },
      edit: {
          title: 'master.modeofpay.modeofpay'
      },
      view: {
          title: 'master.modeofpay.modeofpay'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/modeofpay/list',
        hasHref: true
      },
      {
        text: 'master.modeofpay.modeofpay',
        url: '/master/modeofpay/list',
        hasHref: true
      }
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
        name: 'code',
        displayName: 'master.modeofpay.paymentcode',
        type: 'string'
      },
      {
        name: 'stages',
        displayName: 'master.modeofpay.paymentname',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }