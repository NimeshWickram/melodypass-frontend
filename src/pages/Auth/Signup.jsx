/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('YOUR_API_ENDPOINT/signup', {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            if (response.data) {
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred during signup');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                </div>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <input
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                
                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+94',
        phoneNumber: '',
        nicPassport: '',
        nicType: 'NIC',
        country: 'Sri Lanka',
        email: '',
        verificationMethod: 'Email',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.countryCode + formData.phoneNumber,
                nicPassport: formData.nicPassport,
                nicType: formData.nicType,
                country: formData.country,
                email: formData.email,
                verificationMethod: formData.verificationMethod,
                password: formData.password
            });

            if (response.data) {
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-300 rounded my-8">
            <div className="text-center mb-4">
                <h1 className="text-blue-500 font-bold text-xl">MelodyPass</h1>
                <h2 className="text-xl font-bold">Register</h2>
                <p className="text-sm text-gray-600">Create your account and enjoy additional features and exclusive deals</p>
            </div>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Contact Number
                    </label>
                    <div className="flex">
                        <div className="flex-none w-16 mr-2">
                            <div className="flex items-center px-3 py-2 border rounded bg-gray-50">
                                <img src="/api/placeholder/16/12" alt="flag" className="mr-1" />
                                <span>{formData.countryCode}</span>
                            </div>
                        </div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="flex-grow px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        NIC/Passport
                    </label>
                    <div className="flex">
                        <select
                            name="nicType"
                            value={formData.nicType}
                            onChange={handleChange}
                            className="flex-none w-20 mr-2 px-2 py-2 border rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="NIC">NIC</option>
                            <option value="Passport">Passport</option>
                        </select>
                        <input
                            type="text"
                            name="nicPassport"
                            placeholder="Enter your NIC/Passport"
                            value={formData.nicPassport}
                            onChange={handleChange}
                            className="flex-grow px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Country
                    </label>
                    <div className="relative">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 appearance-none"
                            required
                        >
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Verification method
                    </label>
                    <div className="relative">
                        <select
                            name="verificationMethod"
                            value={formData.verificationMethod}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 appearance-none"
                            required
                        >
                            <option value="Email">Email</option>
                            <option value="SMS">SMS</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="********"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition-colors mt-4"
                >
                    Get Started
                </button>
            </form>
        </div>
    );
};

export default SignupForm;