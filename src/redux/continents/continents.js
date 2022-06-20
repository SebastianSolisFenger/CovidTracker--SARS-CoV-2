/* eslint-disable no-unused-vars */
// @ts-nocheck

import continentsInitialData from './initial--data';

const URL = 'https://corona.lmao.ninja/v3/covid-19/continents';

// ACTIONS
const GET_CONTINENTS_SUCCESS =
  'CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_LOADING =
  'CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_FAILED = 'CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';

// ACTIONS CREATORS

export const continentsSuccess = (continents) => ({
  type: GET_CONTINENTS_SUCCESS,
  payload: continents,
});
export const continentsLoading = () => ({
  type: GET_CONTINENTS_LOADING,
});
export const continentsFailed = (msg) => ({
  type: GET_CONTINENTS_FAILED,
  payload: msg,
});

// FETCHING CONTINENTS API
export const getContinents = () => (dispatch) => {
  dispatch(continentsLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newContinents = data.map((conti) => ({
        name: conti.continent,
        deaths: conti.deaths,
      }));
      dispatch(continentsSuccess(newContinents));
    })
    .catch((errorMsg) => {
      dispatch(continentsFailed(JSON.stringify(errorMsg.message)));
    });
};

// CONTINENTS REDUCER

export default function continents(state = continentsInitialData, action) {
  switch (action.type) {
    case GET_CONTINENTS_LOADING:
      return { ...state, status: 'LOADING' };
    case GET_CONTINENTS_SUCCESS:
      return { ...state, status: 'SUCCESS', continents: action.payload };
    case GET_CONTINENTS_FAILED:
      return { ...state, status: 'FAILED', errMsg: action.payload };
    default:
      return state;
  }
}
