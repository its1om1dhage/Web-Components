import React, { useState } from 'react';
import ProfileCard from '../Components/UI/ProfileCard';
import LoginForm from '../Components/Forms/LoginForm';
import CodeDisplay from '../Components/Utilities/CodeDisplay';

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 'profile-card',
      name: 'Profile Card',
      category: 'UI Components',
      description: 'A beautiful, responsive profile card component with gradient background and hover effects.',
      icon: '👤',
      component: (
        <ProfileCard 
          name="Sarah Johnson"
          title="Full Stack Developer"
          bio="Passionate about creating beautiful and functional web applications with modern technologies."
          skills={["React", "Node.js", "TypeScript", "Python"]}
        />
      ),
      code: `import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ 
  name = "John Doe", 
  title = "Software Developer", 
  avatar = "https://via.placeholder.com/120", 
  bio = "Passionate developer with expertise in React and modern web technologies.",
  skills = ["React", "JavaScript", "CSS", "Node.js"],
  social = {
    github: "#",
    linkedin: "#",
    twitter: "#"
  }
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatar} alt={name} className="profile-avatar" />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
      </div>
      
      <div className="profile-bio">
        <p>{bio}</p>
      </div>
      
      <div className="profile-skills">
        <h3>Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      
      <div className="profile-social">
        <a href={social.github} className="social-link">GitHub</a>
        <a href={social.linkedin} className="social-link">LinkedIn</a>
        <a href={social.twitter} className="social-link">Twitter</a>
      </div>
    </div>
  );
};

export default ProfileCard;`
    },
    {
      id: 'login-form',
      name: 'Login Form',
      category: 'Forms',
      description: 'A complete login form with password visibility toggle, validation, and responsive design.',
      icon: '🔐',
      component: (
        <div style={{ transform: 'scale(0.8)', transformOrigin: 'center top' }}>
          <LoginForm onSubmit={(data) => console.log('Login:', data)} />
        </div>
      ),
      code: `import React, { useState } from 'react';
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

export default LoginForm;`
    },
    {
      id: 'landing-page',
      name: 'Landing Page',
      category: 'Page Templates',
      description: 'Hero section, features, testimonials, and CTA',
      icon: '🚀',
      component: null,
      code: 'Coming Soon...'
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      category: 'Page Templates',
      description: 'Admin panel with sidebar, charts, and tables',
      icon: '📊',
      component: null,
      code: 'Coming Soon...'
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      category: 'Page Templates',
      description: 'Showcase your work with image galleries',
      icon: '💼',
      component: null,
      code: 'Coming Soon...'
    },
    {
      id: 'blog-layout',
      name: 'Blog Layout',
      category: 'Page Templates',
      description: 'Article listings with search and categories',
      icon: '📝',
      component: null,
      code: 'Coming Soon...'
    }
  ];

  const categories = [...new Set(templates.map(t => t.category))];

  const getTemplatesByCategory = (category) => {
    return templates.filter(t => t.category === category);
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      'UI Components': 'var(--gradient-primary)',
      'Forms': 'var(--gradient-card)',
      'Page Templates': 'var(--gradient-secondary)'
    };
    return gradients[category] || 'var(--gradient-primary)';
  };

  return (
    <div className="container" style={{ paddingTop: '24px', paddingBottom: '48px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 className="text-gradient" style={{ marginBottom: '12px' }}>
          Component Library
        </h1>
        <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '600px' }}>
          Copy and paste components to accelerate your development workflow.
        </p>
      </header>

      {categories.map(category => (
        <section key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600',
            color: '#f1f5f9', 
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #334155'
          }}>
            {category}
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px',
            marginBottom: '24px'
          }}>
            {getTemplatesByCategory(category).map(template => (
              <div 
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                style={{ 
                  background: '#1e293b',
                  border: selectedTemplate?.id === template.id ? '1px solid #6366f1' : '1px solid #334155',
                  padding: '20px', 
                  borderRadius: '8px', 
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: selectedTemplate?.id === template.id ? '0 4px 16px rgba(99, 102, 241, 0.1)' : '0 2px 8px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.borderColor = '#64748b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = selectedTemplate?.id === template.id ? '#6366f1' : '#334155';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
                  {template.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: '600' }}>
                  {template.name}
                </h3>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#94a3b8',
                  marginBottom: '8px',
                  lineHeight: '1.4'
                }}>
                  {template.description}
                </p>
                {selectedTemplate?.id === template.id && (
                  <div style={{ 
                    marginTop: '12px', 
                    padding: '8px 12px', 
                    background: '#6366f1', 
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    ✓ Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {selectedTemplate && (
        <div style={{ 
          marginTop: '32px',
          padding: '24px',
          background: '#1e293b',
          borderRadius: '8px',
          border: '1px solid #334155'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.25rem', marginRight: '12px' }}>{selectedTemplate.icon}</span>
            <div>
              <h2 style={{ fontSize: '1.25rem', color: '#f1f5f9', margin: '0', fontWeight: '600' }}>
                {selectedTemplate.name}
              </h2>
              <p style={{ color: '#94a3b8', margin: '4px 0 0 0', fontSize: '0.875rem' }}>
                {selectedTemplate.category}
              </p>
            </div>
          </div>

          {selectedTemplate.component && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#f1f5f9', marginBottom: '16px', fontSize: '1rem', fontWeight: '600' }}>Preview</h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                padding: '20px',
                background: '#0f172a',
                borderRadius: '6px',
                border: '1px solid #334155'
              }}>
                {selectedTemplate.component}
              </div>
            </div>
          )}

          <div>
            <h3 style={{ color: '#f1f5f9', marginBottom: '12px', fontSize: '1rem', fontWeight: '600' }}>Code</h3>
            <CodeDisplay 
              code={selectedTemplate.code}
              language="jsx"
              title={selectedTemplate.name}
              fileName={`${selectedTemplate.name.replace(/\s+/g, '')}.jsx`}
            />
          </div>
        </div>
      )}

      {!selectedTemplate && (
        <div style={{ 
          padding: '32px', 
          background: '#1e293b', 
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '24px',
          border: '1px solid #334155'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '16px' }}>👆</div>
          <h3 style={{ color: '#f1f5f9', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '600' }}>Select a component</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            Click on any component above to see the live preview and copy the code.
          </p>
        </div>
      )}
    </div>
  );
};

export default Templates;
