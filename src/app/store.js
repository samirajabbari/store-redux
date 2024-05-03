import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Feature/Product/productSlice";
import cartSlice from "../Feature/cart/cartSlice";

const store = configureStore({
  reducer: { productSlice, cartSlice },
});
export default store;
