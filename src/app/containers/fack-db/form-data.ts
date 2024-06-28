export class FormDB {
  public static countryList = [
    {
      id: 1,
      code: '001',
      name: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      id: 2,
      code: '002',
      name: 'China',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      id: 3,
      code: '003',
      name: 'Australia',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      id: 4,
      code: '004',
      name: 'Sri Lanka',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      id: 5,
      code: '005',
      name: 'United States of America',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static stateList = [
    {
      uuid: 1,
      code: '001',
      name: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Tamilnadu',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Andhra Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Assam',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Karnataka',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static districtList = [
    {
      uuid: 1,
      code: '001',
      name: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Aligarh',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Prayagraj',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Azamgarh',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Bareilly',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static taulkList = [
    {
      uuid: 1,
      code: '001',
      name: 'Kiraoli',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Kheragarh',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Fatehabad',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Bah',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Bah',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static muncipalityList = [
    {
      uuid: 1,
      code: '001',
      name: 'Kiraoli',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Kheragarh',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Fatehabad',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Bah',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Bah',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];


  public static villageList = [
    {
      uuid: 1,
      code: '001',
      name: 'Village One',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Village Two',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Village Three',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Village Four',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Village Five',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static blockList = [
    {
      uuid: 1,
      code: '001',
      name: 'Block One',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Block Two',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Block Three',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Block Four',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Block Five',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static municipalityList = [
    {
      uuid: 1,
      code: '001',
      name: 'Municipality One',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Municipality Two',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Municipality Three',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Municipality Four',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Municipality Five',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];

  public static corporationList = [
    {
      uuid: 1,
      code: '001',
      name: 'Corporation One',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 2,
      code: '002',
      name: 'Corporation Two',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: false
    },
    {
      uuid: 3,
      code: '003',
      name: 'Corporation Three',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 4,
      code: '004',
      name: 'Corporation Four',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    },
    {
      uuid: 5,
      code: '005',
      name: 'Corporation Five',
      district: 'Agra',
      state: 'Uttar Pradesh',
      country: 'India',
      created_by: 'Admin',
      created_date: '2020-08-24 00:00:00',
      modified_by: 'Admin',
      modified_date: '2020-08-24 00:00:00',
      status: true
    }
  ];
}
