import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    isLoading:false,
};

const URL = 'https://course-api.com/react-useReducer-cart-project';
export const fetchCartItems = createAsyncThunk('carts/fetchCartItems', async () => {
    const response = await axios.get(URL);
    console.log(response)
    return response.data;
})
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },

        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },

        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1 ;
        },

        decrease: (state,action ) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount  = cartItem.amount - 1 ;
        }, 

        calculateTotal: (state) => {
            let total = 0 ; 
            let amount = 0 ;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.total = total;
            state.amount = amount;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state) => {
            console.log('pending')
            state.isLoading = true;
        });

        builder.addCase(fetchCartItems.fulfilled,(state, action) => {
            state.isLoading = false;
            console.log(action)
            state.cartItems = action.payload;
        });

        builder.addCase(fetchCartItems.rejected, (state) => {
            state.isLoading = false;
        });
    }
})

export const {clearCart, removeCart, increase, decrease, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;