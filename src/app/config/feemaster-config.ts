export class FeeMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.fee.fee',
          button: {
              text: 'master.fee.addfee',
              url: '/master/feemaster/add'
          }
      },
      add: {
          title: 'master.common.list'
      },
      edit: {
          title: 'master.common.list'
      },
      view: {
          title: 'master.common.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: 'master.common.list',
        hasHref: true
      },
      {
        text: 'master.fee.feemaster',
        url: 'master.common.list',
        hasHref: true
      },
      // {
      //     text: 'master.entity.list',
      //     url: '/location/entity/list',
      //     hasHref: true
      //   },
        
    //   {
    //     text: 'master.common.list',
    //     hasHref: false
    //   }
    ];
  
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'code',
        displayName: 'master.fee.feecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.fee.feename',
        type: 'string'
      },
      {
        name: 'frequency',
        displayName: 'master.fee.frequency',
        type: 'string'
      },
      {
        name: 'amount',
        displayName: 'master.fee.amount',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  
  }
  