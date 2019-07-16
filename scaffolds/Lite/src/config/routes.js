import BasicLayout from '@/layouts/BasicLayout';
import About from '@/pages/About';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/about',
        component: About,
      },
      {
        path: '/',
        component: Home,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
