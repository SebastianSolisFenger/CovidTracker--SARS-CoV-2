import Homepage from './pages/Homepage';
import ContinentPage from './pages/ContinentPage';
import CountryPage from './pages/CountryPage';
import NoMatch from './pages/NoMatch';

const routes = [
  {
    path: '*',
    title: '',
    element: <NoMatch />,
  },
  { path: '/', title: 'Homepage', element: <Homepage />, exact: 'true' },
  {
    path: '/continent/:continent',
    title: 'Continent',
    element: <ContinentPage />,
    exact: 'true',
  },
  {
    path: '/country/:country',
    title: 'Country',
    element: <CountryPage />,
    exact: 'true',
  },
];

export default routes;
