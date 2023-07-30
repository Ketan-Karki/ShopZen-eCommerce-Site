import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/wishReducer";

const WishContext = createContext();

const getLocalWishData = () => {
  let localWishData = localStorage.getItem("shopZenWish");
  const parsedData = JSON.parse(localWishData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  wish: getLocalWishData(),
};

const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToWish = (curElem) => {
    dispatch({ type: "ADD_TO_WISH", payload: curElem });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("shopZenWish", JSON.stringify(state.wish));
  }, [state.wish]);

  return (
    <WishContext.Provider value={{ ...state, addToWish, removeItem }}>
      {children}
    </WishContext.Provider>
  );
};

const useWishContext = () => {
  return useContext(WishContext);
};

export { WishProvider, useWishContext };
