export class LabelMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.lable.lable',
          button: {
              text: 'master.lable.addlable',
              url: '/master/lablemaster/add'
          }
      },
      add: {
          title: 'master.lablemaster.list'
      },
      edit: {
          title: 'master.lablemaster.list'
      },
      view: {
          title: 'master.lablemaster.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/lablemaster/list',
        hasHref: true
      },
      {
        text: 'master.lable.lablemaster',
        url: '/master/lablemaster/list',
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
        displayName: 'master.lable.Lablecode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.lable.lablename',
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
  