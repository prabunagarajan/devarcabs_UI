export class TankregestrationConfig {

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
      // {
      //   name: 'id',
      //   displayName: 'Regestration Id',
      //   type: 'number'
      // },
      {
        name: 'tankName',
        displayName: 'sugarmill.tankregistration.tankname',
        type: 'string'
      },
      {
        name: 'capacity',
        displayName: 'sugarmill.tankregistration.totalcapacity',
        type: 'string'
      },
      {
        name: 'height',
        displayName: 'sugarmill.tankregistration.height',
        type: 'string'
      },
      {
        name: 'width',
        displayName: 'sugarmill.tankregistration.width',
        type: 'string'
      },
      {
        name: 'innerDiameter',
        displayName: 'sugarmill.tankregistration.innerdimensions',
        type: 'string'
      },
      {
        name: 'stageDesc',
        displayName: 'Stage',
        type: 'string'
      },
      // {
      //   name: 'requestDate',
      //   displayName: 'sugarmill.tankregistration.requestdate',
      //   type: 'string',
      //   // dateFormat: "dd/MMM/yyyy",
      // },
      {
        name: 'requestDate',
        displayName: 'sugarmill.tankregistration.requestdate',
        displayFcn: (item: any) => item.requestDate.join('-'),
        type: 'date',
        // type: "string",
        dateFormat: "dd-MMM-yyyy",
    },
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'options',
        badgeColors: {
          'SUBMITTED': 'badge-success',
          'DRAFT':'badge-warning',
          'APPROVED': "badge-primary",
          'REJECTED':"badge-danger"
        }
      },
     
    
    ];
  }