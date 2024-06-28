export class YearConfig {

    public static titleSection = {
      list: {
          title: 'master.Year.year',
          button: {
              text: 'master.Year.addyear',
              url: '/master/year/add'
          }
      },
      add: {
          title: 'master.Year.year'
      },
      edit: {
          title: 'master.Year.year'
      },
      view: {
          title: 'master.Year.year'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/year/list',
        hasHref: true
      },
      {
          text: 'master.Year.year',
          url: '/master/year/list',
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
        name: 'name',
        displayName: 'master.common.name',
        type: 'string'
      },
      {
        name: 'startMonth',
        displayName: 'master.Year.startmonth',
        type: 'string'
      },
      {
        name: 'endMonth',
        displayName: 'master.Year.endmonth',
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