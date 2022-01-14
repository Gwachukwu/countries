import { call, put } from "redux-saga/effects";
import { setCountries } from "../../ducks/countries";
import { requestGetCountries } from "../requests/countries";

export function* handleGetCountries(action) {
  try {
    // make the get request
    const response = yield call(requestGetCountries);
    const { data } = response;
    // dispatch to redux
    yield put(setCountries(data));
  } catch (error) {
    console.log(error);
  }
}
