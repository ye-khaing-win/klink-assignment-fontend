import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
import toastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
    search: searchSlice.reducer,
    product: productSlice.reducer,
    category: categorySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
