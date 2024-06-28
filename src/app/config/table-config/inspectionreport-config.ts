export class Inspectionreportconfig {

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
        name: 'inspectionDate' ,
        displayName: 'sugarmill.inspectionreport.inspectiondate',
        type: 'date',
        dateFormat: "dd-MMM-yyyy",
      },
      {
        name: 'verificationName',
        displayName: 'sugarmill.inspectionreport.verificationtype',
        type: 'string'
      },
      {
        name: 'tankNo',
        displayName: 'sugarmill.inspectionreport.tankno',
        type: 'string'
      },
      {
        name: 'trs',
        displayName: 'sugarmill.inspectionreport.trs',
        type: 'string'
      },
      {
        name: 'brix',
        displayName: 'sugarmill.inspectionreport.brix',
        type: 'string'
      },
      
    
    ];
  }