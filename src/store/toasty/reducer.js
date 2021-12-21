import { TOASTY_PUSH, TOASTY_REMOVE } from "./types";

const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOASTY_PUSH:
      return {
        ...state,
        ...{
          list: [...state.list, action.payload],
        },
      };
    case TOASTY_REMOVE:
      return {
        ...state,
        ...{
          list: state.list.filter((a) => a.uuid !== action.payload.uuid),
        },
      };
    default:
      return state;
  }
}
