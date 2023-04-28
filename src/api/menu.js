const Menu = [
  { header: 'Apps' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
  },
  { header: 'UI Elements' },
  {
    title: 'Pickers',
    group: 'pickers',
    component: 'picker',
    icon: 'filter_vintage',
    items: [
      { name: 'timepicker', title: 'Timepicker', component: 'pickers/timepicker' },
      { name: 'datepicker', title: 'Datepicker', component: 'pickers/datepicker' },

    ]
  },
  { divider: true },
  { header: 'Extras' },
  {
    title: 'Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: 'Login', title: 'Login', component: 'Login' },
      { name: '404', title: '404', component: 'NotFound' },
      { name: '403', title: '403', component: 'AccessDenied' },
      { name: '500', title: '500', component: 'ServerError' },
    ]
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
