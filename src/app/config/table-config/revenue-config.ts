export class RevenueConfig {

    public static titleSection = {
      list: {
          title: 'master.revenue.revenue',
          button: {
              text: 'master.revenue.addrevenue',
              url: '/master/revenue/add'
          }
      },
      add: {
          title: 'master.revenue.revenue'
      },
      edit: {
          title: 'master.revenue.revenue'
      },
      view: {
          title: 'master.revenue.revenue'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/revenue/list',
        hasHref: true
      },
      {
        text: 'master.revenue.revenue',
        url: '/master/revenue/list',
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
        displayName: 'master.revenue.code',
        type: 'string'
      },
      {
        name: 'stages',
        displayName: 'master.revenue.stages',
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