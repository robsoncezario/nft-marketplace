import {
  REQUEST_MARKET_LIST,
  REQUEST_MARKET_LIST_WITH_PAGINATION,
  MARKET_LIST_SUCCESS,
  MARKET_LIST_FAIL,
  UPDATE_MARKET_INPUT,
} from "./types";

const initialState = {
  text: "",
  data: [],
  count: 0,
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKET_INPUT:
      return {
        ...state,
        text: action.payload,
      };
    case REQUEST_MARKET_LIST:
      return {
        text: action.payload.text,
        data: [],
        loading: true,
        count: 0,
        error: false,
      };
    case REQUEST_MARKET_LIST_WITH_PAGINATION:
      return { ...state, loading: true };
    case MARKET_LIST_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data.items),
        count: action.payload.data.count,
        loading: false,
        error: false,
      };
    case MARKET_LIST_FAIL:
      return {
        ...state,
        data: [],
        count: 0,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
