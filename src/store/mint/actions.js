import { MINT_MODAL_TOGGLE_VISIBILITY } from "./types";

export function toggleModalVisibility(value) {
  return {
    type: MINT_MODAL_TOGGLE_VISIBILITY,
    payload: value,
  };
}
