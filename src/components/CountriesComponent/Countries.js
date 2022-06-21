/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Bars } from 'react-loading-icons';
import { getCountries } from '../../redux/countries/countries';
import FilteredCountries from './FilteredCountries/FilteredCountries';
import style from './FilteredCountries/FilteredCountries.module.css';

const Countries = (props) => {
  // const continents = useSelector((state) => state.continents.continents);
  const selectedCountries = useSelector((state) => state.countries);
  const { location } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries(location));
  }, []);

  let content;
  if (selectedCountries.status === 'LOADING') {
    content = (
      <div className="loadingIcon">
        <Bars stroke="var(--primary)" fill="var(--primary)" height="2rem" />
        <h4>Loading...</h4>
      </div>
    );
  } else if (selectedCountries.status === 'SUCCESS') {
    content = <FilteredCountries countries={selectedCountries.countries} />;
  } else {
    content = <h2>Error: {selectedCountries.errMsg}</h2>;
  }

  return <>{content}</>;
};

Countries.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Countries;
