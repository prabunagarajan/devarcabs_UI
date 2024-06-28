export class Mf5part3config {

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
        name: 'serialNoOfTank',
        displayName: 'sugarmill.mf5part3.nooftank',
        type: 'string'
      },
      {
        name: 'tankType',
        displayName: 'sugarmill.mf5part3.tanktype',
        type: 'string'
      },
      {
        name: 'openStock',
        displayName: 'sugarmill.mf5part3.openingstockacc',
        type: 'string'
      },
      {
        name: 'molassesTotal',
        displayName: 'sugarmill.mf5part3.totmolasrecdate',
        type: 'string'
      },
      {
        name: 'nameOfDistillery',
        displayName: 'sugarmill.mf5part3.nameofdistillery',
        type: 'string'
      },
      {
        name: 'quantitySuppliedMolasses',
        displayName: 'sugarmill.mf5part3.totalquansupplied',
        type: 'string'
      },
    
     
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'string',
      
        
      },
     
    
    ];
  }