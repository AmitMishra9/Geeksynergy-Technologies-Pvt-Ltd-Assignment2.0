import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Form data saved to local storage:', formData);
      navigate("/login");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!formData.profession) {
      errors.profession = 'Profession is required';
    }

    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Create Your Account 🌈
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2 text-gray-700">
              Name 😊
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2    text-center text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                errors.name ? 'border-red-300' : 'border-purple-200'
              } bg-purple-50 transition-all duration-300 ease-in-out`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2 text-gray-700">
              Email 📧
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3    text-center text-lg  border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                errors.email ? 'border-red-300' : 'border-purple-200'
              } bg-purple-50 transition-all duration-300 ease-in-out`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-semibold mb-2 text-gray-700"
            >
              Password 🔐
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3    text-center text-lg border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                errors.password ? 'border-red-300' : 'border-purple-200'
              } bg-purple-50 transition-all duration-300 ease-in-out`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-semibold mb-2 text-gray-700"
            >
              Phone Number 📱
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3   text-center text-lg border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                errors.phone ? 'border-red-300' : 'border-purple-200'
              } bg-purple-50 transition-all duration-300 ease-in-out`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="profession"
              className="block font-semibold mb-2 text-gray-700"
            >
              Profession 💼
            </label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className={`w-full px-4 py-3   text-center text-lg border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                errors.profession ? 'border-red-300' : 'border-purple-200'
              } bg-purple-50 transition-all duration-300 ease-in-out`}
            >
              <option value="">Select Profession</option>
              <option value="developer">👩‍💻 Developer</option>
              <option value="designer">🎨 Designer</option>
              <option value="manager">📊 Manager</option>
              <option value="founder">🚀 Founder</option>
              <option value="co-founder">🤝 Co-Founder</option>
              <option value="ceo">👑 CEO</option>
            </select>
            {errors.profession && (
              <p className="text-red-500 mt-1 text-sm">{errors.profession}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transform hover:scale-105 mt-6"
          >
            Sign Up 🎉
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline font-semibold">
            Log in 🚀
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;