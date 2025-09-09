import React from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import CodeDisplay from '../Components/Utilities/CodeDisplay';

const Forms = () => {
  const loginFormCode = `import React, { useState } from 'react';
import './LoginForm.css';

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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">{title}</h2>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        <div className="login-links">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <span>Don't have an account? <a href="#" className="signup-link">Sign up</a></span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;`;

  const handleLogin = (formData) => {
    console.log('Login data:', formData);
    alert(`Login attempt with email: ${formData.email}`);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333', marginBottom: '40px' }}>
        Form Components
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}>Login Form</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          A complete login form with password visibility toggle, validation, and responsive design.
        </p>
        
        <div style={{ 
          background: '#f8f9fa', 
          padding: '40px', 
          borderRadius: '15px', 
          marginBottom: '30px' 
        }}>
          <div style={{ transform: 'scale(0.8)', transformOrigin: 'center top' }}>
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
        
        <CodeDisplay 
          code={loginFormCode}
          language="jsx"
          title="LoginForm Component"
          fileName="LoginForm.jsx"
        />
      </div>
      
      <div style={{ 
        padding: '30px', 
        background: '#f8f9fa', 
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>More Form Components Coming Soon!</h3>
        <p style={{ color: '#666' }}>
          Contact forms, registration forms, search forms, and more.
        </p>
      </div>
    </div>
  );
};

export default Forms;
