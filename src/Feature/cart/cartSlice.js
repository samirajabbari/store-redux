import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumProducts } from "../../Components/Helpers/Helpers";

const initialState = {
  selectProduct: [],
  productCounter: 0,
  total: 0,
  checkout: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectProduct.find((item) => item.id === action.payload.id)) {
        state.selectProduct.push({ ...action.payload, selectCount: 1 });
        state.productCounter = sumProducts(state.selectProduct);
        state.total = sumPrice(state.selectProduct);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItem = state.selectProduct.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectProduct = newSelectedItem;
      state.productCounter = sumProducts(state.selectProduct);
      state.total = sumPrice(state.selectProduct);
      state.checkout = false;
    },

    increase: (state, action) => {
      const indexItem = state.selectProduct.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectProduct[indexItem].selectCount++;
      state.productCounter = sumProducts(state.selectProduct);
      state.total = sumPrice(state.selectProduct);
      state.checkout = false;
    },
    decrease: (state, action) => {
      const indexItem = state.selectProduct.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectProduct[indexItem].selectCount--;
      state.total = sumPrice(state.selectProduct);
      state.productCounter = sumProducts(state.selectProduct);
      state.checkout = false;
    },

    checkout: (state) => {
      state.selectProduct = [];
      state.productCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
