/* eslint-disable no-unused-vars */
// @ts-nocheck
// const URL = 'https://corona.lmao.ninja/v3/covid-19/continents';
import continentsInitialData from './initial--data';

// ACTIONS
const GET_CONTINENTS_SUCCESS =
  '/CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_LOADING =
  '/CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_FAILED =
  '/CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS';

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

// CONTINENTS REDUCER

export default function continents(state = continentsInitialData, action) {
  switch (action.type) {
    case GET_CONTINENTS_LOADING:
      return { ...state, loading: true };
    case GET_CONTINENTS_SUCCESS:
      return { ...state, loading: false, continents: action.payload };
    case GET_CONTINENTS_FAILED:
      return { ...state, loading: false, errMsg: action.payload };
    default:
      return state;
  }
}