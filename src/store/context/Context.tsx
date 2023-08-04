import { Dispatch, createContext } from "react";
import { ActionType, StateType } from "./types";
import { initialState } from "./InitialState";

export const Context = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
  }>({ state: initialState, dispatch: () => null });
