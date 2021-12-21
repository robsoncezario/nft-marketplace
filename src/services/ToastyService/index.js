import { v4 as uuid } from "uuid";
import store from "../../store/index";
import { TOASTY_PUSH } from "../../store/toasty/types";

export default class ToastyService {
  static push = (type, message, duration = 5000) => {
    store.dispatch({
      type: TOASTY_PUSH,
      payload: {
        uuid: uuid(),
        type: type,
        message: message,
        duration: duration,
      },
    });
  };

  static info(message, duration = 5000) {
    ToastyService.push("info", message, duration);
  }

  static success(message, duration = 5000) {
    ToastyService.push("success", message, duration);
  }

  static error(message, duration = 5000) {
    ToastyService.push("error", message, duration);
  }
}
