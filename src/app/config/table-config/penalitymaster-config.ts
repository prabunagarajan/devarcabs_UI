export class PenalityMasterConfig {

    public static titleSection = {
      list: {
          title: 'master.penalty.penalty',
          button: {
              text: 'master.penalty.addpenalty',
              url: '/master/penaltymaster/add'
          }
      },
      add: {
          title: 'master.penaltymaster.list'
      },
      edit: {
          title: 'master.penaltymaster.list'
      },
      view: {
          title: 'master.penaltymaster.list'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/penaltymaster/list',
        hasHref: true
      },
      {
        text: 'master.penalty.penaltymaster',
        url: '/master/penaltymaster/list',
        hasHref: true
      }
    ];
  
    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'code',
        displayName: 'master.penalty.penaltycode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.penalty.penaltyname',
        type: 'string'
      },
      {
        name: 'dueDateName',
        displayName: 'master.penalty.duedate',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      }
    ];
  
  }
  