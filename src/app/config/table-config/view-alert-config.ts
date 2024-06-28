export class ViewAlertConfig {
  public static titleSection = {
    list: {
      title: "master.country.list",
      button: {
        text: "master.country.add",
        url: "/location/country/add",
      },
    },
    add: {
      title: "master.country.list",
    },
    edit: {
      title: "master.country.list",
    },
    view: {
      title: "View Brand",
    },
  };

  public static breadcrumbs = [
    {
      text: "Alert & Case Management",
      url: "/location/country/list",
      hasHref: true,
    },
    {
      text: "Alert",
      url: "/location/country/list",
      hasHref: true,
    },
  ];

  public static columns = [
    {
      name: "id",
      displayName: "#",
      type: "number",
    },
    {
      name: "casenumber",
      displayName: "Case Number",
      type: "string",
    },
    {
      name: "casedetails",
      displayName: "Case Details",
      type: "string",
    },
    {
      name: "actionedby",
      displayName: "Actioned By",
      type: "string",
    },
    {
      name: "actionedfor",
      displayName: "Actioned For",
      type: "string",
    },
    {
      name: "status",
      displayName: "master.common.status",
      type: "boolean",
      optionVal: ["Active", "In-Active"],
    },
  ];
}
