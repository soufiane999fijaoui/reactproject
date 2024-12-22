import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [image, setImage] = useState(''); 

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!name) {
      Swal.fire({
        icon: 'error',
        title: 'Champ Obligatoire',
        text: 'Le champ "Nom du Produit" doit être rempli.',
      });
      return;
    }
    if (!price) {
      Swal.fire({
        icon: 'error',
        title: 'Champ Obligatoire',
        text: 'Le champ "Prix" doit être rempli.',
      });
      return;
    }
    if (!category) {
      Swal.fire({
        icon: 'error',
        title: 'Champ Obligatoire',
        text: 'Le champ "Catégorie" doit être rempli.',
      });
      return;
    }
    if (!company) {
      Swal.fire({
        icon: 'error',
        title: 'Champ Obligatoire',
        text: 'Le champ "Entreprise" doit être rempli.',
      });
      return;
    }
    if (!image) {
      Swal.fire({
        icon: 'error',
        title: 'Champ Obligatoire',
        text: 'Veuillez sélectionner une image pour le produit.',
      });
      return;
    }

    const userId = JSON.parse(localStorage.getItem('user'))?._id;
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'Utilisateur Introuvable',
        text: 'Veuillez vous reconnecter pour ajouter un produit.',
      });
      return;
    }

    const productData = {
      name,
      price,
      category,
      company,
      userId,
      image, 
    };

    try {
      const result = await fetch('http://localhost:400/add-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const data = await result.json();

      if (result.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Produit Ajouté',
          text: 'Votre produit a été ajouté avec succès !',
        }).then(() => {
          navigate('/products');
        });

        setName('');
        setPrice('');
        setCategory('');
        setCompany('');
        setImage('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: data.message || 'Échec de l’ajout du produit.',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l’ajout du produit. Veuillez réessayer.',
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="card shadow-lg rounded-4">
            <div className="card-body p-4">
              <h1 className="text-center mb-4">Ajouter un Produit</h1>
              <form onSubmit={handleAddProduct}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom du Produit</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Prix</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Catégorie</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Entreprise</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image du Produit</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-danger w-100">
                    Ajouter le Produit
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

export default AddProduct;
