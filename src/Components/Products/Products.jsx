import React, { useState } from 'react'
import styles from './Products.module.css'
import {Helmet} from "react-helmet";
import {increase ,decrease,increamntByAmount} from '../../Redux/CounterSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/ProductSlice';
import { useEffect } from 'react';

export default function Products() {
  const[products,setProducts] = useState([]);
  let {counter}= useSelector((state)=>state.counter)
  async function getProduct(){
    let responseData = await dispatch(getProducts());
    console.log(responseData.payload);
    setProducts(responseData.payload);
  }
  useEffect(()=>{
    getProduct()
  },[]);

  let dispatch = useDispatch();
  return (
    <div>
      {/* <div>  <p>Counter : {counter}</p>
            <div>
              <button onClick={()=>{dispatch(increase())}} className="btn btn-success ">+</button>
              <button onClick={()=>{dispatch(decrease())}} className="btn btn-success ">-</button>
              <button className='btn btn-success ' onClick={()=>{dispatch(increamntByAmount(10))}}> amount</button>
            </div></div> */}
            <div className="container"><div className="row">{products.map((product)=>{
            return <div className="col-md-2" key={product.id}><img src={product.images[0]} alt="" className='w-100' /><p>{product.title }</p></div>
            })}</div></div>
    </div>

  )
}
