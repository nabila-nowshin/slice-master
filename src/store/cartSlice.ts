import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem={
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState:CartState={
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action: PayloadAction<{ id: number; name: string; price: number }>) {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ ...action.payload, quantity: 1 });
        }
        state.totalQuantity++;
        state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      //if exists
      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;