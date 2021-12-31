import {
  REQUEST_MARKET_LIST,
  REQUEST_MARKET_LIST_WITH_PAGINATION,
} from "./types";

export function requestMarketList(page, rows) {
  return {
    type: REQUEST_MARKET_LIST,
    payload: {
      page,
      rows,
    },
  };
}

export function requestMarketListWithPagination(page, rows) {
  return {
    type: REQUEST_MARKET_LIST_WITH_PAGINATION,
    payload: {
      page,
      rows,
    },
  };
}
