export class IndentAcceptance {


    public static Accepted = [
        {
            name: 'id',
            displayName: 'sugarmill.inspectionreport.sno',
            type: 'number'
        },
        
        {
            name: 'indentDate',
            displayName: 'wholesale.indentacceptance.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'indentNo',
            displayName: 'wholesale.indentacceptance.indentno',
             displayFcn: (item: any) => item.indentNo,
            type: 'objstring'
        },
        {
            name: 'indentRequest?.unitName',
            displayName: 'wholesale.indentacceptance.unitname',
            displayFcn: (item: any) => item.indentRequest.unitName,
            type: 'objstring'
        },
        {
            name: 'indentRequest?.totalNoOfCases',
            displayName: 'wholesale.common.totalnoofcases',
            displayFcn: (item: any) => item.indentRequest.totalNoOfCases,
            type: 'objstring'
        },
        {
            name: 'indentRequest?.totalNoOfBottles',
            displayName: 'wholesale.common.totalnofbottles',
            displayFcn: (item: any) => item.indentRequest.totalNoOfBottles,
            type: 'objstring'
        },
       
        {
            name: 'indentRequest.orderStatus',
            displayName: 'wholesale.indentacceptance.status',
            displayFcn: (item: any) => 
            item.indentRequest.orderStatus,
            // {
            // return  `<span  class="badge badge-success"> 
            //          ${item.indentRequest.orderStatus}
            //   <span> `
            //     },
            type: 'objstring',
            badgeColors: {
              'ACCEPTED': 'badge-success',
              'PENDING': 'badge-warning',
              'REJECTED': 'badge-danger'
            }
            
          },
    ];

   
}