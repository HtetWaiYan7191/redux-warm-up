import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount:cartItems.length,
    total:0,
    isLoading:false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },

        removeCart: (state, action) => {
            console.log(action.payload)
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
    },
})

export const {clearCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;