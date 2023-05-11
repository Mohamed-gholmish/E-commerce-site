import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./FeatureProduct.module.scss";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToChart } from "../../Redux/CartSlice";
const baseUrl = "https://route-ecommerce.onrender.com";
export default function FeatureProduct() {
  let dispatch = useDispatch();

  const [allProduct, setProduct] = useState([]);
  let { addToCart } = useContext(cartContext);
  async function addProduct(productId) {
    let { data } = await addToCart(productId);
    if (data.status === "success") {
      toast.success(data.message, {
        duration: 1000,
        className: "text-success",
        position: "bottom-right",
      });
    } else {
      console.log("err");
    }
  }
  async function getAllProducts() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products`);
    // console.log(data);
    setProduct(data.data);
  }
  useEffect(() => {
    getAllProducts();
  });
  return (
    <>
      <div className="row">
        {allProduct.map((product) => {
          return (
            <div className="col-md-2 p-2  " key={product._id}>
              <div className="product h-100 d-flex flex-column">
                {" "}
                <Link
                  to={`/products/${product._id}`}
                  className=" text-decoration-none"
                >
                  {" "}
                  <img src={product.imageCover} className="w-100" alt="" />
                  <p className=" text-main">
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </p>
                  <div className="box d-flex justify-content-between">
                    <span>
                      {product.ratingsAverage}{" "}
                      <i className=" fa-solid fa-star rating-color"></i>{" "}
                    </span>
                    <span>{product.price}EGP</span>
                  </div>
                </Link>
                <button
                  className=" w-100 bg-mainmy-4 btn btn-outline-success mt-auto "
                  onClick={() => {
                    // addProduct(product._id);
                    dispatch(addToChart());
                  }}
                >
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
