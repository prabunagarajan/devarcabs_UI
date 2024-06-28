export class MF9config {

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
        name: 'thisYear',
        displayName: 'sugarmill.common.year',
        type: 'string'
      },
      {
        name: 'thisYearCanesupply',
        displayName: 'sugarmill.MF9.canequantity(Qtl)',
        type: 'string'
      },
      {
        name: 'foreCastQtyBHeavy',
        displayName: 'sugarmill.MF9.productionofb-heavymolasses(Qtl)',
        type: 'string'
      },
      {
        name: 'foreCastQtyCHeavy',
        displayName: 'Produced C-Heavy',
        type: 'string'
      },
      {
        name: 'foreCastQtyCaneJuice',
        displayName: 'Produced Cane Juice',
        type: 'string'
      },
      {
        name: 'foreCastQtyCaneSyrup',
        displayName: 'Produced Cane Syrup',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'sugarmill.common.status',
        type: 'options',
        badgeColors: {
          SUBMITTED: 'badge-success',
          INITIATED:'badge-warning',
          APPROVED: "badge-primary",
          REJECTED: "badge-danger",
          DRAFT: "badge-warning",
        }
      },
     
    
    ];
  }