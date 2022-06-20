/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContinents } from '../redux/continents/continents';

const Continents = () => {
  const continents = useSelector((state) => state.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  return <h2>continents</h2>;
};

export default Continents;
