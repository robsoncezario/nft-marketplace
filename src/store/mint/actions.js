import { MINT_MODAL_TOGGLE_VISIBILITY, REQUEST_MINT_TOKEN } from "./types";

export function toggleModalVisibility(value) {
  return {
    type: MINT_MODAL_TOGGLE_VISIBILITY,
    payload: value,
  };
}

export function requestMintToken(file, name, description) {
  return {
    type: REQUEST_MINT_TOKEN,
    payload: {
      name,
      description,
      file,
    },
  };
}
