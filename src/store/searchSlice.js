import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },

  reducers: {
    search(state, action) {
      state.value = action.payload;
    },

    clear(state) {
      state.value = "";
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
