export class StrengthConfig {
    public static titleSection = {
      list: {
        title: "master.strengthMaster.list",
        button: {
          text: "master.strengthMaster.add",
          url: "/master/strength/add",
        },
      },
      add: {
        title: "master.strengthMaster.list",
      },
      edit: {
        title: "master.strengthMaster.list",
      },
      view: {
        title: "master.strengthMaster.list",
      },
    };
  
    public static breadcrumbs = [
      {
        text: "master.common.masters",
        url: "/master/strength/list",
        hasHref: true,
      },
      {
        text: "master.strengthMaster.strength",
        url: "/master/strength/list",
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
        name: "code",
        displayName: "master.strengthMaster.code",
        type: "string",
      },
      {
        name: "strength",
        displayName: "master.strengthMaster.strength",
        type: "string",
      },
      {
        name: "category",
        displayName: "master.strengthMaster.liquorCategory",
        type: "string",
      },
      {
        name: "isActive",
        displayName: "master.Status.status",
        type: "boolean",
        optionVal: ["Active", "In-Active"],
      },
    ];
  }
  