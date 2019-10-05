const headerUser = [
  {
    width: 120,
    label: '#',
    dataKey: 'id',
    flexGrow: 0.25
  },
  {
    width: 120,
    label: 'Phone',
    dataKey: 'phone',
    flexGrow: 1
  }
];

const headerSalon = [
  {
    width: 120,
    label: 'Name',
    dataKey: 'name',
    flexGrow: 1
  },
  {
    width: 60,
    label: 'Created',
    dataKey: 'date_joined',
    flexGrow: 0.3
  },
  {
    width: 60,
    label: 'Edited',
    dataKey: 'date_updated',
    flexGrow: 0.3
  }
];

export { headerUser, headerSalon };
