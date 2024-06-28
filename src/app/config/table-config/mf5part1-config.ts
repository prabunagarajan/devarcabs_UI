export class Mf5part1config {

    // public static titleSection = {
    //   list: {
    //       title: 'master.district.list',
    //       button: {
    //           text: 'master.district.adddistrict',
    //           url: '/location/district/add'
    //       }
    //   },
    //   add: {
    //       title: 'master.district.list'
    //   },
    //   edit: {
    //       title: 'master.district.list'
    //   },
    //   view: {
    //       title: 'master.district.list'
    //   }
    // };
  
    // public static breadcrumbs = [
    //   {
    //     text: 'master.common.masters',
    //     url: '/location/district/list',
    //     hasHref: true
    //   },
    //   {
    //     text: 'master.common.location',
    //     url: '/location/district/list',
    //     hasHref: true
    //   },
    //   {
    //       text: 'master.common.district',
    //       url: '/location/district/list',
    //       hasHref: true
    //     },
    //   // {
    //   //   text: 'master.common.list',
    //   //   hasHref: false
    //   // }
    // ];

    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'requestDate',
        displayName: 'sugarmill.mf5part1.date',
        type: 'string'
      },
      {
        name: 'openStockByAccount',
        displayName: 'sugarmill.mf5part1.openingstockacc',
        type: 'string'
      },
      {
        name: 'totalDispatchOfMolasses',
        displayName: 'sugarmill.mf5part1.totaldispmolasses',
        type: 'string'
      },
      {
        name: 'totalSugarQuantity',
        displayName: 'sugarmill.mf5part1.totsugarquan',
        type: 'string'
      },
     
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'options',
        badgeColors: {
          'SUBMITTED': 'badge-success',
          'INITIATED':'badge-warning'
        }
      },
     
    
    ];
  }