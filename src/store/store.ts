import { configureStore } from "@reduxjs/toolkit";
import cartSli
// import userReducer from "./slices/userSlice";
// import productReducer from "@/slices/productSlice";
// import cartReducer from "@/slices/cartSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
