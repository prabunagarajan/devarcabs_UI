export class CategoryConfig {

    public static titleSection = {
      list: {
          title: 'master.category.categorylist',
          button: {
              text: 'master.category.addcategory',
              url: '/inventory/category/add'
          }
      },
      add: {
          title: 'master.category.categorylist'
      },
      edit: {
          title: 'master.category.categorylist'
      },
      view: {
          title: 'master.category.categorylist'
      }
    };

    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: '/inventory/category/list',
        hasHref: true
      },
      {
          text: 'master.category.category',
          url: '/inventory/category/list',
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
        displayName: 'master.common.code',
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
