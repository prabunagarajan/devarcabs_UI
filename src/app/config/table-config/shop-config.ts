export class ShopConfig {
  
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'shopId',
        displayName: 'Shop Code',
        type: 'string'
      },
      {
        name: 'districtDesc',
        displayName: 'District',
        type: 'string'
      },
      {
        name: 'tehsilDesc',
        displayName: 'Tehsil',
        type: 'string'
      },
      {
        name: 'zoneDesc',
        displayName: 'Zone',
        type: 'string'
      },
      {
        name: 'pinCode',
        displayName: 'Pin Code',
        type: 'string'
      },
      {
        name: 'status',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  
  }
  