import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductToCartType } from "../../../types";

interface CartState {
  cart: ProductToCartType[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<ProductToCartType>) {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeProductFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
    },
    updateTotalPrice(state) {
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  updateTotalPrice,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
