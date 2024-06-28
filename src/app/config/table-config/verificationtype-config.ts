export class VerificationTypeConfig {

    public static titleSection = {
      list: {
          title: 'master.verificationtype.verificationtypelist',
          button: {
              text: 'master.verificationtype.addverificationtype',
              url: '/master/verification-type/add'
          }
      },
      add: {
          title: 'master.verificationtype.verificationtypelist'
      },
      edit: {
          title: 'master.verificationtype.verificationtypelist'
      },
      view: {
          title: 'master.verificationtype.verificationtypelist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.masters',
        url: '/master/verification-type/list',
        hasHref: true
      },
      {
          text: 'master.verificationtype.verificationtype',
          url: '/master/verification-type/list',
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
        displayName: 'master.verificationtype.verificationcode',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.verificationtype.verificationname',
        type: 'string'
      },
      {
        name: 'frequencyDays',
        displayName: 'master.verificationtype.frequency(In Days)',
        type: 'number',
      },
      {
        name: 'isActive',
        displayName: 'master.common.status',
        type: 'boolean',
        optionVal: ['Active', 'In-Active']
      },
    ];
  }