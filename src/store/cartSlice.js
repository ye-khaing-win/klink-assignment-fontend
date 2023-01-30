import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subtotal: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const hasDuplicate = state.items.find((i) => i.id === item._id);

      state.subtotal += item.price;

      if (!hasDuplicate) {
        state.items.push({
          id: item._id,
          name: item.name,
          description: item.description,
          imageUrl: item.imageUrl,
          count: 1,
          price: item.price,
          totalPrice: item.price,
        });
      } else {
        const index = state.items.findIndex((i) => i.id === item._id);
        state.items[index].count += 1;
        state.items[index].totalPrice += item.price;
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;

      state.subtotal -= item.totalPrice;

      state.items = state.items.filter((i) => i.id !== item.id);
    },
    increaseCount(state, action) {
      const item = action.payload;

      state.subtotal += item.price;

      const index = state.items.findIndex((i) => i.id === item.id);
      state.items[index].count += 1;
      state.items[index].totalPrice += item.price;
    },
    decreaseCount(state, action) {
      const item = action.payload;

      const index = state.items.findIndex((i) => i.id === item.id);
      if (state.items[index].count === 0) {
        state.items[index].count = 0;
        state.items[index].totalPrice = 0;
      } else {
        state.subtotal -= item.price;

        state.items[index].count -= 1;
        state.items[index].totalPrice -= item.price;
      }
    },
    clear(state) {
      state.items = [];
      state.subtotal = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
