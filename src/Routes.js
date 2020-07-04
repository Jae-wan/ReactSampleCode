import MainView from './views/MainView';
import SecondView from './views/SecondView';
import ThirdView from './views/ThirdView';

const routes = [
  {
    id: 'main',
    path: '/',
    exact: true,
    component: MainView,
  },
  {
    id: 'second',
    path: '/secondview',
    exact: true,
    component: SecondView,
  },
  {
    id: 'third',
    path: '/third',
    exact: true,
    component: ThirdView,
  },
];

export default routes;
