export class CartensConfig {

    public static titleSection = {
      list: {
          title: 'master.Cartons.cartons',
          button: {
              text: 'master.Cartons.addcartons',
              url: '/master/cartons/add'
          }
      },
      add: {
          title: 'master.cartons.list'
      },
      edit: {
          title: 'master.cartons.list'
      },
      view: {
          title: 'master.cartons.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/cartons/list',
        hasHref: true
      },
      {
        text: 'master.Cartons.cartons',
        url: '/master/cartons/list',
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
        displayName: 'master.Cartons.cartoncode',
        type: 'string'
      },
      {
        name: 'details',
        displayName: 'master.Cartons.details',
        type: 'string'
      },
      {
        name: 'noOfBottles',
        displayName: 'master.Cartons.noofbottles',
        type: 'string'
      },
      {
        name: 'size',
        displayName: 'master.Cartons.size(ML)',
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
  