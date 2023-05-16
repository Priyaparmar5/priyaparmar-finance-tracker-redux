import { configureStore } from "@reduxjs/toolkit";
//import transactionSlice from "./ducks/transactionReducer";
import TransactionReducer from "./ducks/TransactionReducer";

const store = configureStore({
    reducer:{
        transactions : TransactionReducer,
    }
})


export default store;