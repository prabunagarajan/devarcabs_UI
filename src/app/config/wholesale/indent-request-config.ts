export class Indentrequestconfig {

  public static breadcrumbs = [
    {
      text: 'Wholesale',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    {
      text: 'Indent Request',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    {
      text: 'List',
      url: '/wholesale/indentrequestnew/list',
      hasHref: true
    },
    // {
    //   text: 'master.common.list',
    //   hasHref: false
    // }
  ]
  public static columns = [
    {
      name: 'id',
      displayName: 'wholesale.indentrequest.slno',
      type: 'number'
    },
    {
      name: 'from_entity_code',
      displayName: 'Indent From Entity',
      type: 'string'
    },
    {
      name: 'to_entity_code',
      displayName: 'Indent to Entity',
      type: 'string'
    },
    {
      name: 'indent_number',
      displayName: 'Indent No',
      type: 'string'
    },
    {
      name: 'indent_date',
      displayName: 'Indent Date',
      type: 'string'
    },
    {
      name: 'total_cases',
      displayName: 'Total No of Cases',
      type: 'string'
    },
    {
      name: 'total_bottles',
      displayName: 'Total No of Bottles',
      type: 'string'
    },
    // {
    //   name: 'unitType',
    //   displayName: 'Indent No',
    //   displayFcn: (item: any) => item.unitType,
    //   type: 'objstring'
    // },
    // {
    //   name: 'totNoOfCases',
    //   displayName: 'wholesale.indentrequest.totalcases',
    //   displayFcn: (item: any) => item.totNoOfCases,
    //   type: 'objstring'
    // },
    // {
    //   name: 'totNoOfBottles',
    //   displayName: 'wholesale.indentrequest.totalbottles',
    //   displayFcn: (item: any) => item.totNoOfBottles,
    //   type: 'objstring'
    // },
    {
      name: 'status',
      displayName: 'wholesale.indentrequest.status',
      type: 'options',
      badgeColors: {
        SUBMITTED: 'badge-success',
        DRAFT: 'badge-warning'
      }
    },
    /*{
      name: 'indentRequestDetails?.indentRequestStatus',
      displayName: 'wholesale.indentrequest.status',
      displayFcn: (item: any) => item.indentRequestDetails.indentRequestStatus,
      type: 'objstring'
      // badgeColors: {
      //   SUBMITTED: 'badge-success',
      //   DRAFT: 'badge-warning'
      // }
    },*/
  ];
}