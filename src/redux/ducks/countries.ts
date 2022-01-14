export const GET_COUNTRIES = "get countries";
const SET_COUNTRIES = "set countries";

export const getCountries = () => ({ type: GET_COUNTRIES });

export const setCountries = (countries: Array<any> | null) => ({
  type: SET_COUNTRIES,
  countries: countries,
});

const initailState = {
  countries: null,
  loading: true,
};

interface Action {
  type: string;
  countries: Array<any> | null;
}

const countriesReducer = (state = initailState, action: Action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, loading: false, countries: action.countries };
    default:
      return state;
  }
};

export default countriesReducer;
