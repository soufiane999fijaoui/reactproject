import React from "react";
import Swal from "sweetalert2";

const AddToCart = ({ product }) => {
  const addToCartHandler = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = cart.some((item) => item._id === product._id);

    if (!isProductInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: `${product.name} has been added to your cart.`,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Already in Cart",
        text: `${product.name} is already in your cart.`,
      });
    }
  };

  return (
    <button
      className="btn btn-outline-success btn-sm"
      onClick={addToCartHandler}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
