export class Indentrequestconfig {

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
        name: 'indentNumber',
        displayName: 'Indent Number',
        type: 'string'
      },
      {
        name: 'distillery',
        displayName: 'sugarmill.Indentreq.distilleryname',
        type: 'string'
      },
      {
        name: 'location',
        displayName: 'sugarmill.Indentreq.location',
        type: 'string'
      },
      {
        name: 'productTypeId',
        displayName: 'sugarmill.Indentreq.productype',
        type: 'string'
      },
      {
        name: 'grade',
        displayName: 'sugarmill.Indentreq.molassesgrade',
        type: 'string'
      },
      { 
        name: 'indentquantity',
        displayName: 'Industry Name',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'options',
        badgeColors: {
          'SUGARMILL_APPROVED': 'badge-success',
          'SUGARMILL_REJECTED':'badge-warning'
        }
      },
     
    
    ];
  }