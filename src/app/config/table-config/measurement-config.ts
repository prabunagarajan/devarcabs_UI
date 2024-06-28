export class MeasurementConfig {

    public static titleSection = {
      list: {
          title: 'master.measurement.measurement',
          button: {
              text: 'master.measurement.addmeasure',
              url: '/master/measurement/add'
          }
      },
      add: {
          title: 'master.measurement.measurement'
      },
      edit: {
          title: 'master.measurement.measurement'
      },
      view: {
          title: 'master.measurement.measurement'
      }
    };
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: 'master/measurement/list',
        hasHref: true
      },
      {
        text: 'master.measurement.measurement',
        url: 'master/measurement/list',
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
        displayName: 'master.measurement.measurementcode' ,
        type: 'string'
      },
      {
        name: 'desc',
        displayName: 'master.measurement.measurement(ML)',
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