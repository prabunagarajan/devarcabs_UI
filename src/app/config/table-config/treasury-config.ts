export class TreasuryConfig {

    public static titleSection = {
      list: {
          title: 'master.treasury.treasury',
          button: {
              text: 'master.treasury.add',
              url: '/master/treasury/add'
          }
      },
      add: {
          title: 'master.treasury.list'
      },
      edit: {
          title: 'master.treasury.list'
      },
      view: {
          title: 'master.treasury.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/treasury/list',
        hasHref: true
      },
      {
        text: 'master.treasury.treasury',
        url: '/master/treasury/list',
        hasHref: true
      },
    ];
  
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'treasuryCode',
        displayName: 'master.treasury.code',
        type: 'string'
      },
      {
        name: 'treasuryName',
        displayName: 'master.treasury.name',
        type: 'string'
      },
      {
        name: 'divisionName',
        displayName: 'master.treasury.division',
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
  