import React, { useState } from 'react';
import './Signup.css';
import AxiosInstance from '../AxiosInstance';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosInstance.post('/signup/', formData)
      .then((response) => {
        console.log('Signup successful:', response.data);
        navigate('/login'); // Redirect to login page after signup
        // Handle successful signup (e.g., redirect or show a success message)
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        // Handle error (e.g., show an error message)
      });
    setFormData({ name: '', email: '', password: '' }); // Reset form after submission
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;