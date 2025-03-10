import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../../types";

interface ProductState {
  products: ProductType[];
  lastProduct: number;
  hasMoreProducts: boolean;
  product: ProductType | null;
}

const initialState: ProductState = {
  products: [],
  lastProduct: 0,
  hasMoreProducts: true,
  product: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    setLastProduct(state, action: PayloadAction<number>) {
      state.lastProduct = action.payload;
    },
    setProduct(state, action: PayloadAction<ProductType | null>) {
      state.product = action.payload;
    },
  },
});

export const { setProducts, setLastProduct, setProduct } = productSlice.actions;
export default productSlice.reducer;
