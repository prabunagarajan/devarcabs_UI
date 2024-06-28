export class VehicleMakeConfig {

    public static titleSection = {
      list: {
          title: 'master.vehiclemake.vehiclemakelist',
          button: {
              text: 'master.vehiclemake.addvehiclemake',
              url: '/master/vehiclemake/add'
          }
      },
      add: {
          title: 'master.vehiclemake.vehiclemakelist'
      },
      edit: {
          title: 'master.vehiclemake.vehiclemakelist'
      },
      view: {
          title: 'master.vehiclemake.vehiclemakelist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.vehiclemake.vehiclemaster',
        url: '/master/vehiclemake/list',
        hasHref: true
      },
      {
          text: 'master.vehiclemake.vehiclemake',
          url: '/master/vehiclemake/list',
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
        displayName: 'master.vehiclemake.vehiclecode',
        type: 'string'
      },
      {
        name: 'makeModel',
        displayName: 'master.vehiclemake.vehiclemake',
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