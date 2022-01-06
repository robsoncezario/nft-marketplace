import { AUTH_SET_ADDRESS, AUTH_SET_SIGNATURE } from "./types";

export function setAddress(address) {
  return {
    type: AUTH_SET_ADDRESS,
    payload: {
      address,
    },
  };
}

export function setSignature(signature) {
  return {
    type: AUTH_SET_SIGNATURE,
    payload: signature,
  };
}
