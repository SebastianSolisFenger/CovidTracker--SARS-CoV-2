import Homepage from './pages/Homepage';
import Nomatch from './pages/Nomatch';

const routes = [
  { path: '/', title: 'Homepage', element: <Homepage />, exact: 'true' },
  { path: '*', title: '', element: <Nomatch /> },
];

export default routes;
