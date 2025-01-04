import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Profile = () => {
  const userId = JSON.parse(localStorage.getItem('user'))._id; // Assuming the user ID is stored in localStorage
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
   
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:400/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserInfo({
          name: data.name,
          email: data.email,
          password: '', 
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while fetching user data.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:400/update-profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error('Error updating profile');
      }

      const data = await response.json();
      Swal.fire({
        title: 'Success!',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while updating your profile.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Hello, {userInfo.name}!</h1>

      <div className="card shadow-sm p-4 mb-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h3 className="card-title">User Information</h3>
        <p className="card-text">
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {userInfo.email}
        </p>
      </div>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h3 className="card-title">Update Profile</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={userInfo.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 py-2 mt-3">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
