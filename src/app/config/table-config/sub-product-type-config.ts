export class SubProductTypeConfig {
  public static titleSection = {
    list: {
      title: "master.subproduct.subproducttype",
      button: {
        text: "master.subproduct.addsubproduct",
        url: "/inventory/subproduct/add",
      },
    },
    add: {
      title: "master.subproduct.subproducttype",
    },
    edit: {
      title: "master.subproduct.subproducttype",
    },
    view: {
      title: "master.subproduct.subproducttype",
    },
  };

  public static breadcrumbs = [
    {
      text: "master.common.inventory",
      url: "/inventory/subproduct/list",
      hasHref: true,
    },
    {
      text: "master.subproduct.subproduct",
      url: "/inventory/subproduct/list",
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
      displayName: "master.common.code",
      type: "string",
    },
    {
      name: "name",
      displayName: "master.common.name",
      type: "string",
    },
    // {
    //   name: "category",
    //   displayName: "master.category.category",
    //   type: "string",
    // },
    // {
    //   name: "subcategory",
    //   displayName: "master.subcategory.subcategory",
    //   type: "string",
    // },
    // {
    //   name: "product",
    //   displayName: "master.producttype.producttype",
    //   type: "string",
    // },
    {
      name: "isActive",
      displayName: "master.common.status",
      type: "boolean",
      optionVal: ["Active", "In-Active"],
    },
  ];
}
