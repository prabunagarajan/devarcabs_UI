export class MappingDropdownConfig {

    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'filterValue',
        displayName: 'Parent',
        type: 'string'
      },
      {
        name: 'subFilterValue',
        displayName: 'Child',
        type: 'string'
      },
      // {
      //   name: 'isActive',
      //   displayName: 'master.common.status',
      //   type: 'boolean',
      //   optionVal: ['Active', 'In-Active']
      // }
    ];
  }