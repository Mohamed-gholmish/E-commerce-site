import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logoo from '../../assets/images/freshcart-logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';


export default function NavBar({userData,logOut}) {

  let {counterNum}= useSelector((state)=>state.counterNum);

 let  dispatch = useDispatch();
  console.log(userData);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
    <Link className="navbar-brand" to="home"><img src={Logoo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      { userData !== null ?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="cart">Cart</Link>
        </li>

      </ul> : null}
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className=' d-flex align-items-center'> 
      <i className=' fa-brands fa-facebook text-white mx-2' ></i>
      <i className=' fa-brands fa-twitter text-white mx-2' ></i>
      <i className=' fa-brands fa-instagram text-white mx-2' ></i>
      <i className=' fa-brands fa-youtube text-white mx-2' ></i>
      </li>
      <li className='d-flex align-items-center mx-2 text-white cartCount' ><i className="fa-solid fa-cart-shopping "></i><span className=' badge bg-info'>{counterNum}</span></li>

      <li className='d-flex align-items-center mx-2 text-white'></li>
     {userData ===  null? <>  <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li> </>:   <li className="nav-item">
          
          <Link className="nav-link" to="logout" onClick={logOut}>LogOut</Link>
        </li>
                }
       
     
     
      </ul>
   
    </div>
  </div>
</nav>
    </>
  )
}
