export class TransferModeConfig {

    public static titleSection = {
      list: {
          title: 'master.transfermode.modeoftransfer',
          button: {
              text: 'master.transfermode.addmodeoftransfer',
              url: '/master/transfer-mode/add'
          }
      },
      add: {
          title: 'master.transfermode.list'
      },
      edit: {
          title: 'master.transfermode.list'
      },
      view: {
          title: 'master.transfermode.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/transfermode/list',
        hasHref: true
      },
      {
        text: 'master.transfermode.modeoftransfer',
        url: '/master/transfermode/list',
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
        name: 'code',
        displayName: 'master.transfermode.modeoftransfercode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.transfermode.modeoftransfername',
        type: 'string'
      },
      {
        name: 'percentage',
        displayName: 'master.transfermode.wastageallowedintransport',
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
  