import {
  WALLET_SET_CONNECTOR_ID,
  WALLET_SET_SELECTOR_VISIBILITY,
} from "./types";

const initialState = {
  connectorId: undefined,
  selector: {
    visible: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WALLET_SET_CONNECTOR_ID:
      return {
        ...state,
        ...{
          connectorId: action.payload,
        },
      };
    case WALLET_SET_SELECTOR_VISIBILITY:
      return {
        ...state,
        ...{
          selector: {
            ...state.selector,
            ...{
              visible: action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
}
