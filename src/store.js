const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './features/Cart/cartUpdate'

export const store = configureStore({
    reducer: {  
        cart: cartReducer,
    },
})