export class SubcategoryConfig {

    public static titleSection = {
      list: {
          title: 'master.subcategory.subcategory',
          button: {
              text: 'master.category.addsubcategorylist',
              url: '/inventory/subcategory/add'
          }
      },
      add: {
          title: 'master.subcategory.subcategory'
      },
      edit: {
          title: 'master.subcategory.subcategory'
      },
      view: {
          title: 'master.subcategory.subcategory'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: '/inventory/subcategory/list',
        hasHref: true
      },
      {
          text: 'master.category.category',
          url: '/inventory/subcategory/list',
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
        name: 'name',
        displayName: 'master.category.category',
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