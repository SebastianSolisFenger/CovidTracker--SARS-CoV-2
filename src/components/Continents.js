/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Oval } from 'react-loading-icons';
import ContinentWidget from './ContinentWidget';
import { getContinents } from '../redux/continents/continents';

const Continents = () => {
  const continents = useSelector((state) => state.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  let content;
  if (continents.status === 'LOADING') {
    content = <Oval height="2rem" stroke="var(--primary)" />;
  } else if (continents.status === 'SUCCESS') {
    content = (
      <div className="{style.continents}">
        {continents.continents.map((continent) => (
          <ContinentWidget
            key={continent.name}
            name={continent.name}
            deaths={continent.deaths}
          />
        ))}
      </div>
    );
  } else {
    content = <h2>error: {continents.errMsg}</h2>;
  }
  return <>{content}</>;
};

export default Continents;
