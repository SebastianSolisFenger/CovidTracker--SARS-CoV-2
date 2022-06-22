import countries from '../redux/countries/countries';

describe('Testing if getting the data from countries redux store works correctly', () => {
  it('This should the initial state for redux countries', () => {
    const countriesInitialData = {
      countries: [],
      status: 'LOADING',
      errMsg: null,
    };
    expect(countries(countriesInitialData, { type: '' })).toEqual({
      countries: [],
      status: 'LOADING',
      errMsg: null,
    });
  });
  it('This test should return all countries from a continent', () => {
    const countriesArr = [
      {
        name: 'Argentina',
        deaths: 129016,
      },
      {
        name: 'Bolivia',
        deaths: 21952,
      },
      {
        name: 'Brazil',
        deaths: 669436,
      },
      {
        name: 'Chile',
        deaths: 58296,
      },
      {
        name: 'Colombia',
        deaths: 139918,
      },
      {
        name: 'Ecuador',
        deaths: 35695,
      },
      {
        name: 'Falkland Islands (Malvinas)',
        deaths: 0,
      },
      {
        name: 'French Guiana',
        deaths: 400,
      },
      {
        name: 'Guyana',
        deaths: 1248,
      },
      {
        name: 'Paraguay',
        deaths: 18947,
      },
      {
        name: 'Peru',
        deaths: 213405,
      },
      {
        name: 'Suriname',
        deaths: 1359,
      },
      {
        name: 'Uruguay',
        deaths: 7312,
      },
      {
        name: 'Venezuela',
        deaths: 5725,
      },
    ];

    const action = {
      type: 'CovidTracker--SARS-CoV-2/GET_COUNTRIES_SUCCESS',
      payload: countriesArr,
    };

    expect(countries(undefined, action)).toEqual({
      countries: countriesArr,
      status: 'SUCCESS',
      errMsg: null,
    });
  });
});
