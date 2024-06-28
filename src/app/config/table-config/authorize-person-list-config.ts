export class AuthorizePersonListConfig {

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'name',
      displayName: 'Applicant Name',
      type: 'string'
    },
    {
      name: 'email',
      displayName: 'Email Id',
      type: 'string'
    },
    {
      name: 'mobileNumber',
      displayName: 'Mobile',
      type: 'string'
    },
    {
      name: 'parentLicenseNumber',
      displayName: 'Parent License Number',
      type: 'string'
    },
  ];
}