import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let token = localStorage.getItem("userToken");

export let getCounterNum = createAsyncThunk(
  "cartCounter/getCounterNum",
  async () => {
    let { numOfCartItems } = await axios.get(
      "https://route-ecommerce.onrender.com/api/v1/cart",
      { headers: { token } }
    );
 return numOfCartItems;
  }
);

let cartCountSlice = createSlice({
  name: "cartCounter",
  initialState: { counterNum: 1 },
  reducers: {addToChart:(state,action)=>{state.counterNum +=1}},
  extraReducers: (builder) =>
    builder.addCase("fulfilled", (state, action) => {
      state.counterNum = action.payload;
    }),
});
export let cartCountReducer = cartCountSlice.reducer;
export let {addToChart} = cartCountSlice.actions;