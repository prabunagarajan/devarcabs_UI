export class DivisionConfig {

    public static titleSection = {
      list: {
          title: 'master.division.division',
          button: {
              text: 'master.division.adddivision',
              url: '/master/division/add'
          }
      },
      add: {
          title: 'master.division.division'
      },
      edit: {
          title: 'master.division.division'
      },
      view: {
          title: 'master.division.division'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/division/list',
        hasHref: true
      },
      {
        text: 'master.division.division',
        url: '/master/district/list',
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
        name: 'divisionCode',
        displayName: 'master.division.divisioncode',
        type: 'string'
      },
      {
        name: 'divisionName',
        displayName: 'master.division.divisionname',
        type: 'string'
      },
      {
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }