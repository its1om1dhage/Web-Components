import React, { useState } from 'react';

const LoginForm = ({ onSubmit, title = "Login" }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 p-5">
      <form className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-slate-700" onSubmit={handleSubmit}>
        <h2 className="text-center text-white mb-6 text-2xl font-semibold">{title}</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1.5 text-slate-300 font-medium text-sm">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3.5 py-2.5 border border-slate-600 rounded-md text-sm transition-all duration-150 bg-slate-900 text-white focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1.5 text-slate-300 font-medium text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3.5 py-2.5 pr-10 border border-slate-600 rounded-md text-sm transition-all duration-150 bg-slate-900 text-white focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
          Sign In
        </button>

        <div className="mt-6 text-center space-y-2">
          <a href="#" className="block text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">Forgot Password?</a>
          <span className="text-sm text-slate-400">Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Sign up</a></span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
