import { createSlice } from "@reduxjs/toolkit";
import { staticValues } from "../../utils/constant";

const initialValues = {
    transactionDate: "",
    monthYear: "",
    transactionType: "",
    fromAccount: "",
    toAccount: "",
    amount: "",
    receipt: "",
    notes: "",
  };

const TransactionReducer =  createSlice({
    name :"transactions",
    initialState :{value:staticValues},

    reducers :{
        addTransaction(state,action){
            state.value.push(action.payload)
            console.log(action);
        },
        deleteTransaction(state,action){},
        updateTransaction(state,action){}
    }
})

export const {addTransaction} = TransactionReducer.actions;

export default TransactionReducer.reducer; 