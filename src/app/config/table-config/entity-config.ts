export class EntityConfig {

    public static titleSection = {
      list: {
          title: 'master.entity.entitylist',
          button: {
              text: 'master.entity.add',
              url: '/master/entity/add'
          }
      },
      add: {
          title: 'master.entity.list'
      },
      edit: {
          title: 'master.entity.list'
      },
      view: {
          title: 'master.entity.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/entity/list',
        hasHref: true
      },
      {
        text: 'master.common.entity',
        url: '/master/entity/list',
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
        name: 'code',
        displayName: 'master.entity.entitycode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.entity.entityname',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  
  }
  