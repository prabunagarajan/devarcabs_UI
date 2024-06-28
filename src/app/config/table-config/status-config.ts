export class StatusConfig {

    public static titleSection = {
      list: {
          title: 'master.Status.status',
          button: {
              text: 'master.Status.addstatus',
              url: '/master/status/add'
          }
      },
      add: {
          title: 'master.Status.status'
      },
      edit: {
          title: 'master.Status.status'
      },
      view: {
          title: 'master.Status.status'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/status/list',
        hasHref: true
      },
      {
        text: 'master.Status.status',
        url: '/master/status/list',
        hasHref: true
      }
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
        displayName: 'master.ingredient.ingredientcode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.ingredient.ingredientname',
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