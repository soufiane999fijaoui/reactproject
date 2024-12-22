import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">À propos de nous</h1>
      <p>
        <strong>Nom du projet :</strong> Product Management
      </p>
      <p>
        <strong>Description :</strong> Notre application de gestion de produits permet aux utilisateurs de gérer efficacement leurs produits, de l'ajout à la mise à jour, en passant par la suppression. Elle offre une interface intuitive et des fonctionnalités robustes pour faciliter la gestion des stocks et des informations produits.
      </p>
      <p>
        <strong>Objectifs :</strong>
      </p>
      <ul>
        <li>Faciliter l'ajout, la mise à jour et la suppression de produits.</li>
        <li>Offrir une interface utilisateur intuitive et réactive.</li>
        <li>Assurer une gestion efficace des stocks et des informations produits.</li>
      </ul>
      <p>
        <strong>Technologies utilisées :</strong> React, Node.js, MongoDB
      </p>
      <p>
        <strong>Équipe de développement :</strong> Une équipe dédiée de développeurs passionnés par la création de solutions innovantes pour la gestion de produits.
      </p>
    </div>
  );
};

export default AboutUs;
