export class ApplicantTypeConfig {

  public static titleSection = {
    list: {
      title: 'master.applicationtype.applicanttype',
      button: {
        text: 'master.applicationtype.addapplicanttype',
        url: '/master/applicationtype/add'
      }
    },
    add: {
      title: 'master.applicationtype.applicanttype'
    },
    edit: {
      title: 'master.applicationtype.applicanttype'
    },
    view: {
      title: 'master.applicationtype.applicanttype'
    }
  };

  public static breadcrumbs = [
    {
      text: 'master.common.masters',
      url: '/master/applicationtype/list',
      hasHref: true
    },
    {
      text: 'master.applicationtype.applicanttype',
      url: '/master/applicationtype/list',
      hasHref: true
    },
  ];

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'code',
      displayName: 'master.applicationtype.applicantcode',
      type: 'string'
    },
    {
      name: 'type',
      displayName: 'master.applicationtype.applicanttype',
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