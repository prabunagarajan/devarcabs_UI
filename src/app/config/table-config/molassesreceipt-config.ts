export class MolassesrecieptConfig {

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
        displayName: 'Date',
        type: 'string'
      },
      {
        name: 'productType',
        displayName: 'Molasses',
        type: 'string'
      },
      {
        name: 'openingBalance',
        displayName: 'sugarmill.molassesreciept.openingbalance',
        type: 'string'
      },
      {
        name: 'reciptBalance',
        displayName: 'sugarmill.molassesreciept.recipetbalance',
        type: 'string'
      },
      {
        name: 'consumption',
        displayName: 'sugarmill.molassesreciept.consumption',
        type: 'string'
      },
      {
        name: 'bookBalance',
        displayName: 'sugarmill.molassesreciept.bookbalance',
        type: 'string'
      },
      {
        name: 'actualBalance',
        displayName: 'sugarmill.molassesreciept.actualbalance',
        type: 'string',
        // dateFormat: "dd/MMM/yyyy",
      },

    ];
  }