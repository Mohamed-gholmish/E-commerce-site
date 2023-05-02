import axios from "axios";
import { createContext, useEffect, useState } from "react";
const baseUrl = "https://route-ecommerce.onrender.com";
export let cartContext = createContext();
export default function CartContextProvider(props){
    const [cartCount,setCartCount] = useState(0);
    let userToken = localStorage.getItem('userToken');
    function addToCart(id){
        return axios.post(`${baseUrl}/api/v1/cart`,{productId:id},{headers:{Token:userToken}})
        .then((response)=>response)
        .catch((err)=>err)
    }
    function getLoggedCart(){
        return axios.get(`${baseUrl}/api/v1/cart`,{headers:{Token:userToken}})
        .then((response)=>response)
        .catch((err)=>err)
    }
    function updateonCart(id,count){
        return axios.put(`${baseUrl}/api/v1/cart/${id}`,{count:count},{headers:{Token:userToken}})
        .then((response)=>response)
        .catch((err)=>err)
    }
    function deleteFromCart(id){
        return axios.delete(`${baseUrl}/api/v1/cart/${id}`,{headers:{Token:userToken}})
        .then((response)=>response)
        .catch((err)=>err)
    }
    function getCartCount(){
        return axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{headers:{Token:userToken}})
        .then((response)=>{setCartCount(response.data.numOfCartItems)})
        .catch((err)=>err)
    }
    useEffect(()=>{getCartCount()},[])
    return<cartContext.Provider value={{addToCart,getLoggedCart,updateonCart,deleteFromCart,getCartCount,cartCount}}>
        {props.children}
    </cartContext.Provider>

}