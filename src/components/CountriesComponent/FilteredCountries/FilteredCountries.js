/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './FilteredCountries.module.css';

const FilteredCountries = (props) => {
  const { countries } = props;
  const [allCountries, setAllCountries] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setAllCountries(countries.filter((ctry) => ctry.name.includes(searchKey)));
  }, [searchKey]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <div className={style.searchParentContainer}>
        <input
          type="text"
          value={searchKey}
          placeholder="Search here.."
          onChange={handleChange}
          className={style.rawSearchInput}
        />
      </div>
      {allCountries.map((country) => (
        <div key={country.name} className={style.countryBlock}>
          <h2>{country.name}</h2>
          <div className={style.countryStadistics}>
            <h3>{`${country.deaths}`}</h3>
            <Link to={`/country/${country.name}`} className="furtherDetails">
              <FaRegArrowAltCircleRight className="nextArrowIcon" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

FilteredCountries.propTypes = {
  countries: PropTypes.arrayOf({
    name: PropTypes.string,
    deaths: PropTypes.number,
  }).isRequired,
};

export default FilteredCountries;
