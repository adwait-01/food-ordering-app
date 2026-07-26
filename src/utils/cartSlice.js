import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state inside a reducer function.
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // state.items.pop(); -> just removes the last item
      // To find which item was selected to be removed:
      const index = state.items.findIndex(
        (item) => item.card.info.id === action.payload
      );

      // removing that index
      if (index != -1) {
        state.items.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.items.length = 0; // or state.items = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
