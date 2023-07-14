import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    isLoading:false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: {},
})

export default cartSlice.reducer;