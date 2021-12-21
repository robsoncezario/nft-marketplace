import store from "../../store/index";
import { addToast } from "../../store/toasty/actions";

export default class ToastyService {
  static push(type, message, duration = 5000) {
    store.dispatch(addToast(message, type, duration));
  }

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
