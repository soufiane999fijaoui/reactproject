import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import "bootstrap-icons/font/bootstrap-icons.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:400/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProducts = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    });

    if (result.isConfirmed) {
      let deleteResult = await fetch(`http://localhost:400/product/${id}`, {
        method: "DELETE",
      });

      deleteResult = await deleteResult.json();

      if (deleteResult) {
        Swal.fire({
          icon: "success",
          title: "Produit Supprimé",
          text: "Le produit a été supprimé avec succès.",
        });
        setProducts(products.filter((product) => product._id !== id));
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Product List</h1>

      <section className="intro">
        <div className="bg-light p-5 rounded shadow-sm">
          <div className="row justify-content-center">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-md-3 col-sm-4 mb-4" key={product._id}>
                  <div className="card shadow-lg border-light rounded">
                    {product.image && (
                      <img
                        src={`http://localhost:400/${product.image}`}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <div className="card-body p-3">
                      <h5 className="card-title text-truncate">{product.name}</h5>
                      <p className="card-text text-muted">Category: {product.category}</p>
                      <p className="card-text font-weight-bold">Price: ${product.price}</p>
                      <p className="card-text">Company: {product.company}</p>
                      <div className="d-flex justify-content-between mt-3">
                        <Link
                          to={`/updateProduct/${product._id}`}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Update
                        </Link>
                        <AddToCart product={product} />
                        <button
                          onClick={() => deleteProducts(product._id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No products found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
