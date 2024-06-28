export class Sheeranidhiconfig {

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
      // {
      //   name: 'id',
      //   displayName: '#',
      //   type: 'number'
      // },
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'date',
        displayName: 'sugarmill.passbook.date',
        type: 'date',
        dateFormat: "dd-MMM-yyyy",
      },
      {
        name: 'totalDispatchMolassesQtls',
        displayName: 'sugarmill.sheeranidhiregister.totaldispatchmolasses',
        type: 'string'
      },
      {
        name: 'totalDueMolasses',
        displayName: 'sugarmill.sheeranidhiregister.totalduemolasses',
        type: 'string'
      },
      {
        name: 'totalProgressiveDeposits',
        displayName: 'sugarmill.sheeranidhiregister.totalprogressivedeposits',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'string'
      },
    
    
    ];
  }