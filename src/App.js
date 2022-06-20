import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';

const App = () => (
  <div className="App">
    <Navbar />
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
