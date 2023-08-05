"use client";

import { ReactNode, useReducer, useState } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./Reducer";
import { Context } from "./Context";

export const ContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const context = {
    state,
    dispatch,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};
