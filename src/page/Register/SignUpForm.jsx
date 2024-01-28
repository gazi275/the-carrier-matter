// src/components/SignUpForm.js
import React, { useState } from 'react';
import regimage from '../../assets/authentication.gif'
import signimage from '../../assets/giphy.gif'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center bg-[#f8f9fc] min-h-screen">
      {/* Left side image */}
      <div className="flex-none w-1/2">
        <img
          src={regimage}// Replace with the URL of your image
          alt="Left side image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side form */}
      <form className="flex-auto p-4 bg-[#f8f9fc]" onSubmit={handleSubmit}>
      <div className="">
        <img
          src={signimage}// Replace with the URL of your image
          alt="Left side image"
          className="object-cover"
        />
      </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
