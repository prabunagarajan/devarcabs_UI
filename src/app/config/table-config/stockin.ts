export class StockinConfig {
  public static titleSection = {
    list: {
      title: "master.common.locationList",
      button: {
        text: "master.common.addLocation",
        url: "/location/location/add",
      },
    },
    add: {
      title: "master.common.locationList",
    },
    edit: {
      title: "master.common.locationList",
    },
    view: {
      title: "master.common.locationList",
    },
  };

  public static breadcrumbs = [
    {
      text: "master.common.masters",
      url: "/location/location/list",
      hasHref: true,
    },
    {
      text: "master.common.location",
      url: "/location/location/list",
      hasHref: true,
    },
    // {
    //   text: 'master.common.list',
    //   hasHref: false
    // }
  ];

  public static columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
   
    {
      name: "date",
      displayName: "sugarmill.common.date",
      type: "date",
      dateFormat: "dd-MMM-yyyy",
    },
    {
      name: "producedMolasses",
      displayName: "sugarmill.stockin.producedmolasses(Qtl)",
      type: "string",
    },
    {
      name: "gradeName",
      displayName: "Product type/Grade",
      type: "string",
    },
   
    {
      name: "status",
      displayName: "sugarmill.common.status",
      type: 'options',
      badgeColors: {
        'Submitted': 'badge-success',
        'Rejected': 'badge-danger',
        'Pending for Approval':'badge-warning'
      }
    },
  ];
}
