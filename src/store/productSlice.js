import { createSlice } from "@reduxjs/toolkit";
import product from "../data/product";
const initialState = {
    products: product,
    selectedProduct: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct  = state.products.find(p => p.id === productId)
        }
    },
})