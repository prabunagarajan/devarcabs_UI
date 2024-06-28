export class Mf4transport {

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
        name: 'gatePassNo',
        displayName: 'sugarmill.mf4transportpass.gatepassno',
        type: 'string'
      },
      {
        name: 'mf4Date',
        displayName: 'sugarmill.mf4transportpass.passgenerationdate',
        type: 'date',
        dateFormat: "dd/MMM/yyyy",
      },
      {
        name: 'indentNumber',
        displayName: 'sugarmill.mf4transportpass.indentno',
        type: 'string'
      },
      {
        name: 'indentDate',
        displayName: 'sugarmill.mf4transportpass.indentdate',
        type: 'date',
        dateFormat: "dd/MMM/yyyy",
      },
      {
        name: 'distilleryName',
        displayName: 'sugarmill.mf4transportpass.distilleryname',
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