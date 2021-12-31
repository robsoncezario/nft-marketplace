import { all, takeLatest } from "redux-saga/effects";
import { getMarketList } from "./market/sagas";
import {
  REQUEST_MARKET_LIST,
  REQUEST_MARKET_LIST_WITH_PAGINATION,
} from "./market/types";
import { mintToken } from "./mint/sagas";
import { REQUEST_MINT_TOKEN } from "./mint/types";

export default function* root() {
  yield all([
    takeLatest(REQUEST_MINT_TOKEN, mintToken),
    takeLatest(REQUEST_MARKET_LIST, getMarketList),
    takeLatest(REQUEST_MARKET_LIST_WITH_PAGINATION, getMarketList),
  ]);
}
