import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
        const { email, password } = JSON.parse(storedFormData);
        if (formData.email === email && formData.password === password) {
          console.log('Login successful!');
          navigate("/main");
        } else {
          setErrors({ ...errors, credentials: 'Invalid email or password' });
        }
      } else {
        setErrors({ ...errors, credentials: 'No user found' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Welcome Back! 🌟
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-semibold mb-2 text-gray-700">
              Email 📧
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                  errors.email ? 'border-red-300' : 'border-purple-200'
                } bg-purple-50 transition-all duration-300 ease-in-out pl-10`}
                placeholder="Enter your email"
              />
              <span className="absolute left-3 top-3 text-purple-400 text-xl">✉️</span>
            </div>
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-2 text-gray-700">
              Password 🔐
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                  errors.password ? 'border-red-300' : 'border-purple-200'
                } bg-purple-50 transition-all duration-300 ease-in-out pl-10`}
                placeholder="Enter your password"
              />
              <span className="absolute left-3 top-3 text-purple-400 text-xl">🔒</span>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
            )}
          </div>

          {errors.credentials && (
            <p className="text-red-500 text-sm text-center">{errors.credentials}</p>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105"
          >
            Log In 🚀
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/" className="text-purple-600 hover:underline font-semibold">
            Sign Up 🌈
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;