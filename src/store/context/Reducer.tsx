import { ActionType, StateType } from "./types";

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};

// export const reducerAction = {
//     name: (state: StateType, payload: string) => {
//         state.name = payload
//     }
// }
