import { call, put, delay } from "redux-saga/effects";
import CollectibleService from "../../services/CollectibleService/index";

import { MINT_TOKEN_SUCCESS, MINT_TOKEN_FAIL } from "./types";

export function* mintToken({ payload: { file, name, description } }) {
  yield delay(300);

  try {
    const response = yield call(CollectibleService.upload, {
      file,
      name,
      description,
    });
    const data = response.data;

    if (data === undefined) {
      yield put({ type: MINT_TOKEN_FAIL });
    } else {
      yield put({ type: MINT_TOKEN_SUCCESS, payload: { data } });
    }
  } catch {
    yield put({ type: MINT_TOKEN_FAIL });
  }
}
