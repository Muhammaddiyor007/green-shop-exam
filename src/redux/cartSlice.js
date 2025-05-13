import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  items: storedCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
     const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
  if (itemIndex === -1) {
    state.items.push(action.payload);
  }
  localStorage.setItem("cartItems", JSON.stringify(state.items));

    },
 removeFromCart: (state, action) => {
      const filtered = state.items.filter(item => item.id !== action.payload);
      state.items = filtered;
      localStorage.setItem("cartItems", JSON.stringify(filtered));
    },
clearCart: (state) => {
  state.items = [];
  localStorage.setItem("cartItems", JSON.stringify(state.items));
},
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;