export class DipMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.common.dip',
          button: {
              text: 'master.common.add',
              url: '/master/dip/add'
          }
      },
      add: {
          title: 'master.dip.list'
      },
      edit: {
          title: 'master.dip.list'
      },
      view: {
          title: 'master.dip.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/dip/list',
        hasHref: true
      },
      {
        text: 'master.dip.dip',
        url: '/master/dip/list',
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
        displayName: 'master.common.tanktype',
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
      }
    ];
  
  }
  