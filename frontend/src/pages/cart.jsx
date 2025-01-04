import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center">
            <thead className="thead-dark">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    {item.image && (
                      <img
                        src={`http://localhost:400/${item.image}`}
                        alt={item.name}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.company}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItemFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
