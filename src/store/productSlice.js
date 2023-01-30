import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "commodity",
  initialState: {
    products: [],
    request: {
      fetchAll: {
        isLoading: false,
        status: null,
      },
    },
  },
  reducers: {
    getAll(state) {
      state.request.fetchAll.isLoading = true;
      state.request.fetchAll.status = "loading";
    },
    getAllSuccess(state, action) {
      state.request.fetchAll.isLoading = false;
      state.request.fetchAll.status = "success";
      state.products = action.payload;
    },
    getAllFailure(state) {
      state.request.fetchAll.isLoading = false;
      state.request.fetchAll.status = "fail";
    },
    clearAll(state) {
      state.products = [];
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
