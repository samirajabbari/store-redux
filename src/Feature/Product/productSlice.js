import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Services/config";

const fettchProduct = createAsyncThunk("product/fetchProducts", async () => {

  return API.get("/products");
});

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fettchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fettchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fettchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export { fettchProduct };
