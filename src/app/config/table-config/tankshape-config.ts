export class TankShapeConfig {

    public static titleSection = {
      list: {
          title: 'master.tankshape.tankshape',
          button: {
              text: 'master.tankshape.add',
              url: '/master/tankshape/add'
          }
      },
      add: {
          title: 'master.tankshape.list'
      },
      edit: {
          title: 'master.tankshape.list'
      },
      view: {
          title: 'master.tankshape.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/tankshape/list',
        hasHref: true
      },
      {
        text: 'master.tankshape.tankshape',
        url: '/master/tankshape/list',
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
  