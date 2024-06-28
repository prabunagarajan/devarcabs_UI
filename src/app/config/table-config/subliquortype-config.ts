export class SubLiquorTypeConfig {
    public static titleSection = {
      list: {
          title: 'master.subLiquorType.subliquortype',
          button: {
              text: 'master.subLiquorType.add',
              url: '/master/subliquortype/add'
          }
      },
      add: {
          title: 'master.subLiquorType.list'
      },
      edit: {
          title: 'master.subLiquorType.list'
      },
      view: {
          title: 'master.subLiquorType.list'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/subliquortype/list',
        hasHref: true
      },
      {
        text: 'master.subLiquorType.subliquortype',
        url: '/master/subliquortype/list',
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
        displayName: 'master.subLiquorType.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',
        type: 'string'
      },
      {
        name: 'liquorTypename',
        displayName: 'master.subLiquorType.liquortype',
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
