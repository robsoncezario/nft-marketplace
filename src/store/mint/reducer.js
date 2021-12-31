import { MINT_MODAL_TOGGLE_VISIBILITY, REQUEST_MINT_TOKEN } from "./types";

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
    default:
      return state;
  }
}
