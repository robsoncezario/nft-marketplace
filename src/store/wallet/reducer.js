import { WALLET_SET_CONNECTOR_ID } from "./types";

const initialState = {
  connectorId: undefined,
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
    default:
      return state;
  }
}
