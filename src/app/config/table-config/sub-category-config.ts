export class SubCategoryConfig {
  public static titleSection = {
    list: {
      title: 'master.subcategory.subcategory',
      button: {
        text: 'master.subcategory.addsubcategorylist',
        url: '/inventory/subcategory/add',
      },
    },
    add: {
      title: 'master.subcategory.subcategory',
    },
    edit: {
      title: 'master.subcategory.subcategory',
    },
    view: {
      title: 'master.subcategory.subcategory',
    },
  };

  public static breadcrumbs = [
    {
      text: 'master.common.inventory',
      url: '/inventory/subcategory/list',
      hasHref: true,
    },
    {
      text: 'master.subcategory.subcategory',
      url: '/inventory/subcategory/list',
      hasHref: true,
    },
  ];

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number',
    },
    {
      name: 'code',
      displayName: 'master.common.code',
      type: 'string',
    },
    {
      name: 'name',
      displayName: 'master.common.name',
      type: 'string',
    },
    {
      name: 'categoryName',
      displayName: 'master.category.category',
      type: 'string',
    },
    {
      name: 'isActive',
      displayName: 'master.common.status',
      type: 'boolean',
      optionVal: ['Active', 'In-Active'],
    },
  ];
}
