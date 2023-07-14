import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
    reducer: {
        carts: cartReducer
    },
})

export default store