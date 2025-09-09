import React from 'react';
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

export default ProfileCard;
