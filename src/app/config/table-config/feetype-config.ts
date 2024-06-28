export class FeetypeConfig {

    public static titleSection = {
      list: {
          title: 'master.feetype.feetype',
          button: {
              text: 'master.feetype.addfeetype',
              url: '/master/feetype/add'
          }
      },
      add: {
          title: 'master.feetype.feetype'
      },
      edit: {
          title: 'master.feetype.feetype'
      },
      view: {
          title: 'master.feetype.feetype'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/feetype/list',
        hasHref: true
      },
      {
        text: 'master.feetype.feetype',
        url: '/master/district/list',
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
        displayName: 'master.feetype.feetypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.feetype.feetypename',
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