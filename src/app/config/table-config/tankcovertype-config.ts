export class TankCoverTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.tankcover.type',
          button: {
              text: 'master.tankcover.add',
              url: '/master/tankcovertype/add'
          }
      },
      add: {
          title: 'master.tankcover.type'
      },
      edit: {
          title: 'master.tankcover.type'
      },
      view: {
          title: 'master.tankcover.type'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/tankcovertype/list',
        hasHref: true
      },
      {
          text: 'master.tankcover.type',
          url: '/master/tankcovertype/list',
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
        displayName: 'master.tankcover.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.tankcover.type',
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