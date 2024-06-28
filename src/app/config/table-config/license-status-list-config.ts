export class LicenseStatusListConfig {

  public static columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'year',
      displayName: 'Year',
      type: 'string'
    },
    {
      name: 'applicationNumber',
      displayName: 'Application Number',
      type: 'string'
    },
    {
      name: 'licenseSubCategoryDesc',
      displayName: 'License Type',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'Applicant Name',
      type: 'string'
    },
    {
      name: 'districtDesc',
      displayName: 'District',
      type: 'string'
    },
    {
      name: 'applicationDate',
      displayName: 'Date Of Application',
      type: 'string'
    },
    {
      name: 'statusDesc',
      displayName: 'Application Status',
      type: 'options',
      badgeColors: {
        'In Progress': 'badge-success',
        'Approved': 'badge-primary',
        'Rejected': 'badge-danger',
        'Draft': 'badge-warning',
        'Clarification': 'badge-warning'
      },
    },
  ];
  public static customerColumns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'year',
      displayName: 'Year',
      type: 'string'
    },
    {
      name: 'applicationNumber',
      displayName: 'Application Number',
      type: 'string'
    },
    {
      name: 'licenseSubCategoryDesc',
      displayName: 'License Type',
      type: 'string'
    },
    {
      name: 'name',
      displayName: 'Applicant Name',
      type: 'string'
    },
    {
      name: 'districtDesc',
      displayName: 'District',
      type: 'string'
    },
    {
      name: 'applicationDate',
      displayName: 'Date Of Application',
      type: 'string'
    },
    {
      name: 'licenseNumber',
      displayName: 'License Number',
      type: 'string'
    },
    {
      name: 'licenseIssueDate',
      displayName: 'Issue Date',
      type: 'string'
    },
    {
      name: 'licenseExpiryDate',
      displayName: 'Expiry Date',
      type: 'string'
    },
    {
      name: 'statusDesc',
      displayName: 'Application Status',
      type: 'options',
      badgeColors: {
        'In Progress': 'badge-success',
        'Approved': 'badge-primary',
        'Rejected': 'badge-danger',
        'Draft': 'badge-warning',
        'Clarification': 'badge-warning'
      },
    },
  ];
}