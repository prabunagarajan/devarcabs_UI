export class VehicleModelConfig {

    public static titleSection = {
      list: {
          title: 'master.vehiclemodel.vehiclemodellist',
          button: {
              text: 'master.vehiclemodel.addvehiclemodel',
              url: '/master/vehiclemodel/add'
          }
      },
      add: {
          title: 'master.vehiclemodel.vehiclemodellist'
      },
      edit: {
          title: 'master.vehiclemodel.vehiclemodellist'
      },
      view: {
          title: 'master.vehiclemodel.vehiclemodellist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.vehiclemake.vehiclemaster',
        url: '/master/vehiclemodel/list',
        hasHref: true
      },
      {
          text: 'master.vehiclemodel.vehiclemodel',
          url: '/master/vehiclemodel/list',
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
        name: 'model',
        displayName: 'master.vehiclemodel.vehiclemodel',
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