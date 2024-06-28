export class etinconfig {

    public static titleSection = {
      list: {
          title: 'Etin List',
          button: {
              text: 'Getarate Etin',
              url: '/master/etingenerate/add'
          }
      },
      add: {
          title: 'Etin'
      },
      edit: {
          title: 'Etin'
      },
      view: {
          title: 'Etin'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/year/list',
        hasHref: true
      },
      {
          text: 'Etin',
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
        name: 'active',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }