import CookieService from "../../services/CookieService";
import {
  AUTH_SET_ADDRESS,
  AUTH_SET_SIGNATURE,
  REQUEST_AUTH_SIGNATURE,
} from "./types";

const initialState = {
  address: null,
  signature: null,
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_ADDRESS: {
      if (action.payload.address == null) {
        CookieService.remove("@auth/address");
        CookieService.remove("@auth/signature");
      } else {
        CookieService.set("@auth/address", action.payload.address);
      }

      return {
        ...state,
        address: action.payload.address,
        signature: null,
        loading: action.payload.address != null,
        error: false,
      };
    }
    case AUTH_SET_SIGNATURE: {
      CookieService.set("@auth/signature", action.payload);

      return {
        ...state,
        signature: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
