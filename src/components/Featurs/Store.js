import { configureStore } from "@reduxjs/toolkit";
import CryptoReducer from "./Crypto/CryptoSlice"

const store = configureStore({
    reducer:{
        coins:CryptoReducer
    }
})

export default store