export class InportPermitconfig {

    public static breadcrumbs = [
      {
        text: 'Wholesale',
        url: '/wholesale/importpermit/list',
        hasHref: true
      },
      {
        text: 'Indent Request',
        url: '/wholesale/importpermit/list',
        hasHref: true
      },
      {
          text: 'List',
          url: '/wholesale/importpermit/list',
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
            displayName: 'wholesale.importpermitdetails.sno',
            type: 'number'
          },
          {
            name: 'indentDate',
            displayName: 'wholesale.importpermitdetails.permitdate',
            type: 'date'
          },
          {
            name: 'indentNo',
            displayName: 'wholesale.importpermitdetails.importpermitno',
            type: 'string'
          },
          {
            name: 'importPermitIndentDetails?.totalNoOfCases',
            displayName: 'wholesale.importpermitdetails.totalnoofcases',
            displayFcn: (item: any) => item.importPermitIndentDetails.totalNoOfCases,
            type: 'objstring'
          },
          {
            name: 'importPermitIndentDetails?.totalNoOfBottles',
            displayName: 'wholesale.importpermitdetails.totalnoofbottles',
            displayFcn: (item: any) => item.importPermitIndentDetails.totalNoOfBottles,
            type: 'objstring'
          },
          {
            name: 'importPermitIndentDetails?.totBulkLitres',
            displayName: 'wholesale.importpermitdetails.totalbulkliters',
            displayFcn: (item: any) => item.importPermitIndentDetails.totBulkLitres,
            type: 'objstring'
          },
          {
            name: 'status',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
              SUBMITTED: 'badge-success',
              DRAFT: 'badge-warning'
            }
            
          },
        ];
  }