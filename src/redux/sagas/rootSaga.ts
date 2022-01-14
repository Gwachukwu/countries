import { all, takeLatest } from "redux-saga/effects";
import { handleGetCountries } from "./handlers/countries";
import { GET_COUNTRIES } from "../ducks/countries";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_COUNTRIES, handleGetCountries),
  ]);
}
