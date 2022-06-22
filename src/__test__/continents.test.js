import continents from '../redux/continents/continents';

describe('Testing if getting the data for continents from Redux works', () => {
  it('This part tests if it return the initial state as appropiate', () => {
    const continentsInitialData = {
      continents: [],
      status: 'LOADING',
      errMsg: null,
    };
    expect(continents(continentsInitialData, { type: '' })).toEqual({
      continents: [],
      status: 'LOADING',
      errMsg: null,
    });
  });
  it('This should return all specified continents', () => {
    const continentsArr = [
      {
        name: 'Australia-Oceania',
        deaths: 13590,
        countries: [
          'Australia',
          'Cook Islands',
          'Fiji',
          'French Polynesia',
          'Kiribati',
          'Marshall Islands',
          'Micronesia',
          'Nauru',
          'New Caledonia',
          'New Zealand',
          'Niue',
          'Palau',
          'Papua New Guinea',
          'Samoa',
          'Solomon Islands',
          'Tonga',
          'Tuvalu',
          'Vanuatu',
          'Wallis and Futuna',
        ],
      },
      {
        name: 'North America',
        deaths: 1483305,
        countries: [
          'Anguilla',
          'Antigua and Barbuda',
          'Aruba',
          'Bahamas',
          'Barbados',
          'Belize',
          'Bermuda',
          'British Virgin Islands',
          'Canada',
          'Caribbean Netherlands',
          'Cayman Islands',
          'Costa Rica',
          'Cuba',
          'Curaçao',
          'Dominica',
          'Dominican Republic',
          'El Salvador',
          'Greenland',
          'Grenada',
          'Guadeloupe',
          'Guatemala',
          'Haiti',
          'Honduras',
          'Jamaica',
          'Martinique',
          'Mexico',
          'Montserrat',
          'Nicaragua',
          'Panama',
          'Saint Kitts and Nevis',
          'Saint Lucia',
          'Saint Martin',
          'Saint Pierre Miquelon',
          'Saint Vincent and the Grenadines',
          'Sint Maarten',
          'St. Barth',
          'Trinidad and Tobago',
          'Turks and Caicos Islands',
          'USA',
        ],
      },
      {
        name: 'South America',
        deaths: 1302709,
        countries: [
          'Argentina',
          'Bolivia',
          'Brazil',
          'Chile',
          'Colombia',
          'Ecuador',
          'Falkland Islands (Malvinas)',
          'French Guiana',
          'Guyana',
          'Paraguay',
          'Peru',
          'Suriname',
          'Uruguay',
          'Venezuela',
        ],
      },
    ];
    const action = {
      type: 'CovidTracker--SARS-CoV-2/GET_CONTINENTS_SUCCESS',
      payload: continentsArr,
    };
    expect(continents(undefined, action)).toEqual({
      continents: continentsArr,
      status: 'SUCCESS',
      errMsg: null,
    });
  });
});
