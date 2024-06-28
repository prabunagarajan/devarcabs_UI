export class ApplicantStatusConfig {

    public static titleSection = {
      list: {
          title: 'master.applicationstatus.applicationstatus',
          button: {
              text: 'master.applicationstatus.addapplicantstatus',
              url: '/master/applicationstatus/add'
          }
      },
      add: {
          title: 'master.applicationstatus.applicationstatus'
      },
      edit: {
          title: 'master.applicationstatus.applicationstatus'
      },
      view: {
          title: 'master.applicationstatus.applicationstatus'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/applicationstatus/list',
        hasHref: true
      },
      {
          text: 'master.applicationstatus.applicationstatus',
          url: '/master/applicationstatus/list',
          hasHref: true
        },
      // {
      //   text: 'master.common.list',
      //   hasHref: false
      // }
    ];

    public static columns = [
      {
        name: 'id',
        displayName: '#',
        type: 'number'
      },
      {
        name: 'code',
        displayName: 'master.applicationstatus.applicantstatuscode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.applicationstatus.applicantstatusname',
        type: 'string'
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }