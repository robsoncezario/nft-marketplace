import { v4 as uuid } from "uuid";
import { TOASTY_PUSH, TOASTY_REMOVE } from "./types";

export function removeToast(uuid) {
  return {
    type: TOASTY_REMOVE,
    payload: {
      uuid,
    },
  };
}

export function addToast(message, type, duration) {
  return {
    type: TOASTY_PUSH,
    payload: {
      uuid: uuid(),
      type: type,
      message: message,
      duration: duration,
    },
  };
}
