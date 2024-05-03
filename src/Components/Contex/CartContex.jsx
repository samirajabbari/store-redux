import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { checkCard, sumCard } from "../Helpers/Helpers";
import { counter } from "@fortawesome/fontawesome-svg-core";

const cartContex = createContext();
function CartProvider({ children }) {
  const intializer = {
    selectProduct: [],
    productCounter: 0,
    total: 0,
    checkout: false,
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
        const result = checkCard(state.selectProduct, payload);
        if (!result) {
          state.selectProduct.push({ ...payload, selectCount: 1 });
        }
        return {
          selectProduct: [...state.selectProduct],
          // productCounter: sumCard(state.selectProduct),
          ...sumCard(state.selectProduct),
          checkout: false,
        };
      case "DELETE":
        const newselectProduct = state.selectProduct.filter((product) => {
          return product.id != payload.id;
        });
        return {
          selectProduct: newselectProduct,
          // productCounter: sumCard(newselectProduct),
          ...sumCard(newselectProduct),
          checkout: false,
        };
      case "INCREASE":
        const index = state.selectProduct.findIndex((product) => {
          return product.id === payload.id;
        });
        state.selectProduct[index].selectCount++;
        return {
          ...state,
          // productCounter: sumCard(state.selectProduct),
          ...sumCard(state.selectProduct),
          checkout: false,
        };
      case "DEACREASE":
        const indexD = state.selectProduct.findIndex((product) => {
          return product.id === payload.id;
        });
        state.selectProduct[indexD].selectCount--;
        return {
          ...state,
          // productCounter: sumCard(state.selectProduct),
          ...sumCard(state.selectProduct),
          checkout: false,
        };
      case "CHEACKOUT":
        return {
          selectProduct: [],
          productCounter: 0,
          total: 0,
          checkout: true,
        };
      default:
        console.log("invalid Action");
        break;
    }
  };  
  const [state, dispatch] = useReducer(reducer, intializer);
  return (
    <div>
      <cartContex.Provider value={{ state, dispatch }}>
        {children}
      </cartContex.Provider>
    </div>
  );
}
const useCart = () => {
  const { state, dispatch } = useContext(cartContex);
  return [state, dispatch];
};
export default CartProvider;
export { useCart };
