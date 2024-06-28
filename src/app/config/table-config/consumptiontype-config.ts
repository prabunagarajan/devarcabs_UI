export class ConsumptionTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.consumptiontype.consumptiontypelist',
          button: {
              text: 'master.consumptiontype.addconsumptiontype',
              url: '/master/consuption-type/add'
          }
      },
      add: {
          title: 'master.consumptiontype.consumptiontypelist'
      },
      edit: {
          title: 'master.consumptiontype.consumptiontypelist'
      },
      view: {
          title: 'master.consumptiontype.consumptiontypelist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/consuption-type/list',
        hasHref: true
      },
      {
          text: 'master.consumptiontype.consumptiontype',
          url: '/master/consuption-type/list',
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
        name: 'code',
        displayName: 'master.consumptiontype.consumptioncode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.consumptiontype.consumptionname',
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