import { createContext, useContext, useReducer } from "react";


//Global State management

const Context = createContext({});
const initialState = {
  m: new Date().getMinutes(),
  h: new Date().getHours()
};
export const useStore = () => useContext(Context);

function reducer(state, action) {
  switch (action.type) {
    case "seconds":
      return { m: (state.m + 1) % 60, h: state.h };
    case "minutes":
      return { h: (state.h + 1) % 24, m: state.m };
    default:
      throw new Error();
  }
}

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

export default Store;
