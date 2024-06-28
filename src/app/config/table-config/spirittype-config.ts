export class SpirittypeConfig {

    public static titleSection = {
      list: {
          title: 'master.spirittype.type',
          button: {
              text: 'master.spirittype.add',
              url: '/master/spirit-type/add'
          }
      },
      add: {
          title: 'master.spirittype.type'
      },
      edit: {
          title: 'master.spirittype.type'
      },
      view: {
          title: 'master.spirittype.type'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/spirit-type/list',
        hasHref: true
      },
      {
          text: 'master.spirittype.type',
          url: '/master/spirit-type/list',
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
        displayName: 'master.spirittype.code',
        type: 'string'
      },
      {
        name: 'type',
        displayName: 'master.spirittype.type',
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