import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let token = localStorage.getItem('userToken');
let x = {counterNum:0}
export let getCounterNum = createAsyncThunk('cartCounter/getCounterNum',async ()=>{
    let {data} =await  axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{headers:{token}});
    console.log("ok ok");
    console.log(data);
})
let cartCountSlice = createSlice({
    name :"cartCounter",
    initialState:x,
    reducers:{

    },
    extraReducers:(builder)=>builder.addCase("fulfilled",(state,action)=>{state.counterNum = action.payload})
})

export let cartCountReducer = cartCountSlice.reducer