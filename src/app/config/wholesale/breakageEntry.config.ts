import * as moment from "moment";

export class BreakageEntry {


    public static Accepted = [
        {
            name: 'id',
            displayName: 'wholesale.damagedproducts.sno',
            type: 'number'
        },

        {
            name: 'indentDate',
            displayName: 'wholesale.transportpassgen.indentdate',
            displayFcn: (item: any) => item.indentDate,
            type: 'date'
        },
        {
            name: 'brandName',
            displayName: 'wholesale.breakageentry.brandname',
            displayFcn: (item: any) => item.Brand,
            type: 'objstring'
        },
        {
            name: 'liquorType',
            displayName: 'wholesale.breakageentry.liquortype',
            displayFcn: (item: any) => item.liquorType,
            type: 'objstring'
        },
        {
            name: 'packageSize',
            displayName: 'wholesale.breakageentry.packagesize',
            displayFcn: (item: any) => item.packageSize,
            type: 'number',
        },
        {
            name: 'totalNoOfCases',
            displayName: 'wholesale.breakageentry.noofdamagedcases',
            displayFcn: (item: any) => item.totalNoOfCases,
            type: 'objstring'
        },
        {
            name: 'totalNoOfBottles',
            displayName: 'wholesale.breakageentry.noofdamagedbottles',
            displayFcn: (item: any) => item.totalNoOfBottles,
            type: 'objstring'
        },


    ];
    public static vehicleDetailsColumns = [
        {
            name: 'id',
            displayName: 'S.No',
            type: 'number'
        },
        {
            name: 'createdDate',
            displayName: 'Created Date',
            displayFcn: (item: any) => moment(item.createdDate).format("DD-MMM-YYYY"),
            type: 'objstring'
        },
        {
            name: 'vehicleName',
            displayName: 'Vehicle Name',
            type: 'string'
        },
        {
            name: 'vehicleNumber',
            displayName: 'Vehicle Number',
            type: 'string'
        },
        {
            name: 'vehicleColor',
            displayName: 'Vehicle Color',
            type: 'string',
            align: 'center'
        },
        {
            name: 'insuranceDate',
            displayName: 'Insurance Date',
            /*  displayFcn: (item: any) => moment(item.insuranceDate).format("DD-MMM-YYYY"), */
            type: 'string',
            align: 'center'
        },
        {
            name: 'taxDate',
            displayName: 'Tax Date',
            /* displayFcn: (item: any) => moment(item.taxDate).format("DD-MMM-YYYY"), */
            type: 'string',
            align: 'center'
        },
        {
            name: 'fcDate',
            displayName: 'FC Date',
            /* displayFcn: (item: any) => moment(item.fcDate).format("DD-MMM-YYYY"), */
            type: 'string',
            align: 'center'
        }
    ];

    public static tripDetailsColumns = [
        {
            name: 'id',
            displayName: 'S.No',
            type: 'number'
        },
        {
            name: 'date',
            displayName: 'Date',
            displayFcn: (item: any) => moment(item.createdDate).format("DD-MMM-YYYY"),
            type: 'objstring'
        },
        {
            name: 'vehicleNumber',
            displayName: 'Vehicle Number',
            type: 'string'
        },
        {
            name: 'customerName',
            displayName: 'Customer Name',
            type: 'string'
        },
        {
            name: 'driverName',
            displayName: 'Driver Name',
            type: 'string',
            align: 'center'
        },
        {
            name: 'visitingPlace',
            displayName: 'Visiting Place',
            type: 'string',
            align: 'center'
        },
        {
            name: 'totalRent',
            displayName: 'Total Rent',
            type: 'string',
            align: 'center'
        },
        {
            name: 'status',
            displayName: 'Status',
            type: 'options',
            align: 'center',
            badgeColors: {
                'SUBMITTED': 'badge-info',
                'VERIFIED': 'badge-warning',
                'APPROVED': 'badge-success'
            }
        },
        {
            name: 'submittedBy',
            displayName: 'Status',
            type: 'string',
            align: 'center'
        }
    ];
}


/* badgeColors: {
    SUBMITTED: 'badge-info',
    DRAFT: 'badge-warning',
    ACCEPTED: 'badge-success',
    APPROVED: 'badge-warning',
    CANCELLED: 'badge-danger',
    REJECTED: 'badge-danger',
    'WAITING FOR REQUEST CLARIFICATION': 'badge-primary',

    DRAFT_TP_SUBMITTED: 'badge-info',
    FINAL_TP_SUBMITTED: 'badge-info',
    DRAFT_TP_APPROVED: 'badge-success',
    FINAL_TP_APPROVED: 'badge-success',
    DRAFT_TP_CLARIFICATION_REQUESTED: 'badge-warning',
    FINAL_TP_CLARIFICATION_REQUESTED: 'badge-warning',
    DRAFT_TP_REJECTED: 'badge-danger',
    FINAL_TP_REJECTED: 'badge-danger',
  } */