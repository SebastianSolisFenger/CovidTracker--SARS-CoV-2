// @ts-nocheck
import countriesInitialData from './initial-data';

const URLCOUNTRIES = 'https://corona.lmao.ninja/v3/covid-19/countries/';

// Actions
const GET_COUNTRIES_SUCCESS = 'CovidTracker--SARS-CoV-2/GET_COUNTRIES_SUCCESS';
const GET_COUNTRIES_LOADING = 'CovidTracker--SARS-CoV-2/GET_COUNTRIES_LOADING';
const GET_COUNTRIES_FAILED = 'CovidTracker--SARS-CoV-2/GET_COUNTRIES_FAILED';

// Action creators
export const countriesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: countries,
});
export const countriesLoading = () => ({ type: GET_COUNTRIES_LOADING });
export const countriesFailed = (msg) => ({
  type: GET_COUNTRIES_FAILED,
  payload: msg,
});

// Fetching data from URL

export const getCountries = (location) => (dispatch) => {
  dispatch(countriesLoading());
  fetch(URLCOUNTRIES)
    .then((response) => response.json())
    .then((data) => {
      const fetchedCountries = data
        .filter((conti) => conti.continent === location)
        .map((ctry) => ({ name: ctry.country, deaths: ctry.deaths }));
      dispatch(countriesSuccess(fetchedCountries));
    })
    .catch((errMsg) => {
      dispatch(countriesFailed(JSON.stringify(errMsg.message)));
    });
};

// Countries reducer

export default function countries(state = countriesInitialData, action) {
  switch (action.type) {
    case GET_COUNTRIES_LOADING:
      return { ...state, status: 'LOADING' };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, status: 'SUCCESS', countries: action.payload };
    case GET_COUNTRIES_FAILED:
      return { ...state, status: 'FAILED', errMsg: action.payload };
    default:
      return state;
  }
}
