import { call, put, delay, select } from "redux-saga/effects";
import { MARKET_LIST_SUCCESS, MARKET_LIST_FAIL } from "./types";

export function* getMarketList({ payload: { page, rows } }) {
  yield delay(500);

  try {
    const text = yield select((state) => state.market.text);

    yield put({ type: MARKET_LIST_SUCCESS, payload: { data, headers } });
  } catch {
    yield put({ type: MARKET_LIST_FAIL });
  }
}
