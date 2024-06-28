export class TankMaterialConfig {

    public static titleSection = {
      list: {
          title: 'master.tankmaterial.list',
          button: {
              text: 'master.tankmaterial.add',
              url: '/master/tankmaterial/add'
          }
      },
      add: {
          title: 'master.tankmaterial.list'
      },
      edit: {
          title: 'master.tankmaterial.list'
      },
      view: {
          title: 'master.tankmaterial.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/tankmaterial/list',
        hasHref: true
      },
      {
        text: 'master.tankmaterial.tankmaterial',
        url: '/master/tankmaterial/list',
        hasHref: true
      },
    ]
  
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'code',
        displayName: 'master.tankmaterial.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',
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
  