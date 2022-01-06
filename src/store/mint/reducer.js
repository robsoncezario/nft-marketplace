import {
  MINT_MODAL_TOGGLE_VISIBILITY,
  REQUEST_MINT_TOKEN,
  MINT_TOKEN_SUCCESS,
  MINT_TOKEN_FAIL,
} from "./types";

const initialState = {
  visible: false,
  data: null,
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MINT_MODAL_TOGGLE_VISIBILITY:
      return {
        ...state,
        ...{
          visible: action.payload,
        },
      };
    case REQUEST_MINT_TOKEN: {
      return {
        ...state,
        ...{
          data: null,
          error: false,
          loading: true,
        },
      };
    }
    case MINT_TOKEN_FAIL: {
      return {
        ...state,
        ...{
          data: null,
          error: true,
          loading: false,
        },
      };
    }
    case MINT_TOKEN_SUCCESS: {
      return {
        ...state,
        ...{
          data: action.payload.data.collectible,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}
