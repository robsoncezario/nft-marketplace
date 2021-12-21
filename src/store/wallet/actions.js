import { WALLET_SET_CONNECTOR_ID } from "./types";

export function setWalletConnectorId(id) {
  return {
    type: WALLET_SET_CONNECTOR_ID,
    payload: id,
  };
}
