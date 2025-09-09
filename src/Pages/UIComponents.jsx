import React from 'react';
import ProfileCard from '../Components/UI/ProfileCard';
import CodeDisplay from '../Components/Utilities/CodeDisplay';

const UIComponents = () => {
  const profileCardCode = `import React from 'react';
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

export default ProfileCard;`;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333', marginBottom: '40px' }}>
        UI Components
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}>Profile Card</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          A beautiful, responsive profile card component with gradient background and hover effects.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <ProfileCard 
            name="Sarah Johnson"
            title="Full Stack Developer"
            bio="Passionate about creating beautiful and functional web applications with modern technologies."
            skills={["React", "Node.js", "TypeScript", "Python"]}
          />
        </div>
        
        <CodeDisplay 
          code={profileCardCode}
          language="jsx"
          title="ProfileCard Component"
          fileName="ProfileCard.jsx"
        />
      </div>
      
      <div style={{ 
        padding: '30px', 
        background: '#f8f9fa', 
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>More Components Coming Soon!</h3>
        <p style={{ color: '#666' }}>
          This library is growing. Add your favorite components as you build them.
        </p>
      </div>
    </div>
  );
};

export default UIComponents;
