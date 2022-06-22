import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Homepage from '../pages/Homepage';
import ContinentPage from '../pages/ContinentPage';
import CountryPage from '../pages/CountryPage';

describe('Test if all pages render as supposed to', () => {
  it('Test rendering of Homepage', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Test rendering of ContinentPage', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <ContinentPage />
        </Router>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Test rendering of CountryPage', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CountryPage />
        </Router>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
