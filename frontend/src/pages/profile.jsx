import React from 'react';

const Profile = () => {
  // Retrieve and parse user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  
  if (!user) {
    return (
      <div className="container mt-5">
        <h1>Profile</h1>
        <p>User not found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <p>Welcome, {user.name}!</p>
      {/* Add additional user information here */}
    </div>
  );
};

export default Profile;
