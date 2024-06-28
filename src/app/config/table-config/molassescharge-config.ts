export class Molasseschargesconfig {

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
        displayName: 'sugarmill.common.reqdate',
        type: 'date',
        dateFormat: "dd/MMM/yyyy",
      },
      {
        name: 'openingBalance',
        displayName: 'sugarmill.molassesadminstration.openingbal',
        type: 'string'
      },
      {
        name: 'deposit',
        displayName: 'sugarmill.molassesadminstration.deposite',
        type: 'string'
      },
      {
        name: 'total',
        displayName: 'sugarmill.molassesadminstration.total',
        type: 'string'
      },
      {
        name: 'dispatchedDayQtls',
        displayName: 'sugarmill.molassesadminstration.dispatchedday',
        type: 'string'
      },
    
      { 
        name: 'dispatchedToDateQtls',
        displayName: 'sugarmill.molassesadminstration.dispatchedto',
        type: 'string'
      },
      { 
        name: 'consumedDay',
        displayName: 'sugarmill.molassesadminstration.consumedday',
        type: 'string'
      },
      { 
        name: 'consumedToDate',
        displayName: 'sugarmill.molassesadminstration.consumedto',
        type: 'string'
      },
      // { 
      //   name: 'remarks',
      //   displayName: 'sugarmill.molassesadminstration.remarks',
      //   type: 'string'
      // },
      // {
      //   name: 'status',
      //   displayName: 'sugarmill.common.status',
      //   type: 'string',
      //   optionVal: ['Submitted', 'Draft']
      // },
    
    
    ];
  }