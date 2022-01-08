import {
  WALLET_SET_CONNECTOR_ID,
  WALLET_SET_SELECTOR_VISIBILITY,
} from "./types";

export function setWalletConnectorId(id) {
  return {
    type: WALLET_SET_CONNECTOR_ID,
    payload: id,
  };
}

export function setWalletSelectorVisible(value) {
  return {
    type: WALLET_SET_SELECTOR_VISIBILITY,
    payload: value,
  };
}
