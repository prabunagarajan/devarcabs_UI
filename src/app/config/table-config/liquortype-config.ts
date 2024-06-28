export class LiquorTypeConfig {
  public static titleSection = {
    list: {
        title: 'master.liquortype.liquortype',
        button: {
            text: 'master.liquortype.addliquortype',
            url: '/master/liquortype/add'
        }
    },
    add: {
        title: 'master.liquortype.list'
    },
    edit: {
        title: 'master.liquortype.list'
    },
    view: {
        title: 'master.liquortype.list'
    }
  };
  public static breadcrumbs = [
    {
      text: 'master.common.masters',
      url: '/master/liquortype/list',
      hasHref: true
    },
    {
      text: 'master.liquortype.liquortype',
      url: '/master/liquortype/list',
      hasHref: true
    },
    // {
    //     text: 'master.entity.list',
    //     url: '/location/entity/list',
    //     hasHref: true
    //   },

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
      displayName: 'master.liquortype.liquortypecode',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'master.liquortype.liquortypename',
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
