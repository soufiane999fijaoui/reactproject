import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:400/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    getProductDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('company', product.company);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:400/product/${id}`, {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
 
      Swal.fire({
        icon: 'success',
        title: 'Product Updated',
        text: 'The product has been updated successfully.',
      }).then(() => {
        navigate('/products');
      });
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'There was an issue updating the product.',
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Update Product</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg rounded-4">
            <div className="card-body p-4">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={product.name || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={product.price || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={product.category || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={product.company || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Product Image</label>
                  {product.image && (
                    <div className="mb-2">
                      <img
                        src={`http://localhost:400/${product.image}`}
                        alt="Product"
                        className="img-fluid"
                        style={{ maxWidth: '200px' }}
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-danger w-100">
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
