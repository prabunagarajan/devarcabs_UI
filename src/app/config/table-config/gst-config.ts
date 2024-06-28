export class GstConfig {

    public static titleSection = {
      list: {
          title: 'master.gst.gstmasterlist',
          button: {
              text: 'master.gst.addgst',
              url: '/inventory/gstmaster/add'
          }
      },
      add: {
          title: 'master.gst.gstmasterlist'
      },
      edit: {
          title: 'master.gst.gstmasterlist'
      },
      view: {
          title: 'master.gst.gstmasterlist'
      }
    };
  
    public static breadcrumbs = [
      {
        text: 'master.common.inventory',
        url: '/inventory/gstmaster/list',
        hasHref: true
      },
      {
          text: 'master.gst.gstmaster',
          url: '/inventory/gstmaster/list',
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
        displayName: 'master.common.code',
        type: 'string'
      },
      {
        name: 'name',
        displayName: 'master.common.name',
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