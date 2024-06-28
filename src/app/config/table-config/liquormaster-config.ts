export class LiquorCategoryConfig {

    public static titleSection = {
      list: {
          title: 'master.liquorcategory.list',
          button: {
              text: 'master.liquorcategory.add',
              url: '/master/liquor/add'
          }
      },
      add: {
          title: 'master.liquorcategory.list'
      },
      edit: {
          title: 'master.liquorcategory.list'
      },
      view: {
          title: 'master.liquorcategory.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/liquor/list',
        hasHref: true
      },
      {
          text: 'master.liquorcategory.category',
          url: '/master/liquor/list',
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
        displayName: 'master.liquorcategory.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.liquorcategory.name',
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