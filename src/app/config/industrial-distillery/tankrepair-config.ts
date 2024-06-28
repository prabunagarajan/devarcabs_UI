export class TankRepairConfig {
    

    public static columns = [
        {
            name: 'id',
            displayName: '#',
            type: 'number'
        },
        {
            name: 'repairType',
            displayName: 'RepairType',
            type: 'string'
        },
        {
            name: 'requestDate',
            displayName: 'Request Date',
            type: 'string'
        },
        {
            name: 'tankName',
            displayName: 'Tank Name',
            type: 'string'
        },
        {
            name: 'spiritType',
            displayName: 'Spirit Type',
            type: 'string'
        },
        {
            name: 'capacity',
            displayName: 'Capacity(Qtl)',
            type: 'string'
        },
        {
            name: 'reasonForRepair',
            displayName: 'Reason for Repair',
            type: 'string'
        },
        {
            name: 'durationOfrepair',
            displayName: 'Duration of Repair',
            type: 'string'
        },
        {
            name: 'specification',
            displayName: 'Specification for Repairs',
            type: 'string'
        },
        {
            name: 'status',
            displayName: 'master.common.status',
            type: 'options',
            badgeColors: {
                Success: 'badge-success',
                Draft: 'badge-warning',
               APPROVED: "badge-primary",
            }
        }
    ];
}