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
    confirm_password: '',
  });

  const [errMessage, setErrMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMessage(''); // Reset error message on new submission
    AxiosInstance.post('/signup/', formData)
      .then((response) => {
        console.log('Signup successful:', response.data);
        navigate('/login'); // Redirect to login page after signup
        // Handle successful signup (e.g., redirect or show a success message)
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        if (error.response && error.response.data) {
          const errorObj = error.response.data;
          const firstKey = Object.keys(errorObj)[0];
          const firstMessage = errorObj[firstKey][0];
          setErrMessage(firstMessage);
        }
        else{
          setErrMessage('Something went wrong.');
        }
      });
    setFormData({ name: '', email: '', password: '', confirm_password: ''}); // Reset form after submission
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        {errMessage && <div className="error">{errMessage}</div>}

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

        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>

        <label className="login-link">
          Already have an account? <a href="/login">Login</a>
        </label>
      </form>
    </div>
  );
};

export default Signup;