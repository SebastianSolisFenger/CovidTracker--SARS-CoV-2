import Homepage from './pages/Homepage';
import ContinentPage from './pages/ContinentPage';
import Nomatch from './pages/Nomatch';

const routes = [
  { path: '/', title: 'Homepage', element: <Homepage />, exact: 'true' },
  {
    path: '/continent/:continent',
    title: 'Continent',
    element: <ContinentPage />,
    exact: 'true',
  },
  { path: '*', title: '', element: <Nomatch /> },
];

export default routes;
