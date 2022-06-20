import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <div className="App">
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  </div>
);

export default App;
