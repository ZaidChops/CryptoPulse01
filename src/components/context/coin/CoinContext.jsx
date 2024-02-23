import { createContext, useReducer } from "react";
import coinReducer from "./CoinReducer";

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  
  const initialState = {
    coins: [ ],
    displayCoin:[]
  };

  const [state, dispatch] = useReducer(coinReducer, initialState);

  return (
    <CoinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
