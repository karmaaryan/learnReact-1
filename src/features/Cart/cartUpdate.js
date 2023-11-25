import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};

const cartUpdate = createSlice({
    name: 'cart',
    initialState
});

console.log(cartUpdate);
 
export default cartUpdate.reducer;