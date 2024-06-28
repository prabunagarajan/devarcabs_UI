export class TankTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.tanktype.tanktype',
          button: {
              text: 'master.tanktype.addtanktype',
              url: '/master/tanktype/add'
          }
      },
      add: {
          title: 'master.tanktype.list'
      },
      edit: {
          title: 'master.tanktype.list'
      },
      view: {
          title: 'master.tanktype.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/tanktype/list',
        hasHref: true
      },
      {
        text: 'master.tanktype.tanktype',
        url: '/master/tanktype/list',
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
        displayName: 'master.tanktype.tanktypecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',    
        type: 'string'
      },
      {
        name: 'material',
        displayName: 'master.tanktype.material',
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
  