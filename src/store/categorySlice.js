import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [{ name: "All", description: "All" }],
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
      state.categories = [
        { _id: uuidv4(), name: "All", description: "All" },
        ...action.payload,
      ];
    },
    getAllFailure(state) {
      state.request.fetchAll.isLoading = false;
      state.request.fetchAll.status = "fail";
    },
    clearAll(state) {
      state.categories = [];
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
