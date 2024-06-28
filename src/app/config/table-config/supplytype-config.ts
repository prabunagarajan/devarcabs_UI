export class SupplyTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.supplytype.supplytypelist',
          button: {
              text: 'master.supplytype.addsupplytype',
              url: '/master/supplytype/add'
          }
      },
      add: {
          title: 'master.supplytype.supplytypelist'
      },
      edit: {
          title: 'master.supplytype.supplytypelist'
      },
      view: {
          title: 'master.supplytype.supplytypelist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/supplytype/list',
        hasHref: true
      },
      {
          text: 'master.supplytype.supplytype',
          url: '/master/supplytype/list',
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
        name: 'supplyType',
        displayName: 'master.supplytype.supplytypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',
        type: 'string'
      },
      {
        name: 'percentage',
        displayName: 'master.supplytype.percentage',
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