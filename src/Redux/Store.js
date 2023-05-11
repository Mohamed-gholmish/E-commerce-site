import { configureStore } from '@reduxjs/toolkit'
import { cartCountReducer } from './CartSlice';
import { counterReducer } from "./CounterSlice";
import { productReducer } from './ProductSlice';

export let Store = configureStore({
  reducer: {
    counter:counterReducer,
    products : productReducer,
    counterNum:cartCountReducer,
  },
});
