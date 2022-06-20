import React from 'react';
import { useParams } from 'react-router-dom';

const ContinentPage = () => {
  const { continent } = useParams();

  return (
    <>
      <h2> Hi {continent}</h2>
    </>
  );
};

export default ContinentPage;
