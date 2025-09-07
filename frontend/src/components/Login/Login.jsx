import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AxiosInstance from '../AxiosInstance';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    AxiosInstance.post('/login/', formData)
      .then((response) => {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token); // Store the token in localStorage
        navigate('/'); // Redirect to home page after login
        // Handle successful login (e.g., redirect or show a success message)
      })
      .catch((error) => {
        console.error('Error during login:', error);
        // Handle error (e.g., show an error message)
      });
    setFormData({ email: '', password: '' }); // Reset form after submission
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;