export class Mf5part2config {

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
        displayName: 'sugarmill.mf5part2.serialnoOfTank',
        type: 'string'
      },
      {
        name: 'tankType',
        displayName: 'sugarmill.mf5part2.tankType',
        type: 'string'
      },
      {
        name: 'openStock',
        displayName: 'sugarmill.mf5part2.openingStockByAcc',
        type: 'string'
      },
      {
        name: 'molassesTotal',
        displayName: 'sugarmill.mf5part2.totalMolasessReceivedOnDate',
        type: 'string'
      },
      {
        name: 'nameOfDistillery',
        displayName: 'sugarmill.mf5part2.nameOfDistillery',
        type: 'string'
      },
      {
        name: 'quantitySupplied',
        displayName: 'sugarmill.mf5part2.totalQtySupplied',
        type: 'string'
      },
    
     
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'string',
        
      },
     
    
    ];
  }