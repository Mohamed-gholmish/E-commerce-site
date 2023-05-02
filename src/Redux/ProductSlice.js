import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let x={products:[]}
export let getProducts = createAsyncThunk('products/getProducts',async ()=>{
    let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/products') 
    return data.data;
})
let productSlice = createSlice({
    name:"products",
    initialState:x,
    reducers:{

    },
   extraReducers:(builder)=>{builder.addCase('fulfilled',(state,action)=>{state.products = action.payload})}
})
export let productReducer = productSlice.reducer;
