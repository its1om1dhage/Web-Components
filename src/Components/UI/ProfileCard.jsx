import React from 'react';

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
    <div className="max-w-sm bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 m-5 relative overflow-hidden">
      {/* Subtle border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 p-px">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 h-full w-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-5">
          <img src={avatar} alt={name} className="w-20 h-20 rounded-full border-2 border-slate-500 mb-4 object-cover bg-slate-600 mx-auto" />
          <h2 className="text-xl font-semibold mb-1 text-white">{name}</h2>
          <p className="text-sm text-slate-400 font-normal">{title}</p>
        </div>
        
        <div className="mb-5">
          <p className="text-sm text-slate-300 leading-relaxed">{bio}</p>
        </div>
        
        <div className="mb-5">
          <h3 className="text-sm font-medium text-white mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30 font-medium">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 pt-4 border-t border-slate-600">
          <a href={social.github} className="text-xs text-slate-400 hover:text-blue-400 transition-colors duration-200 font-medium">GitHub</a>
          <a href={social.linkedin} className="text-xs text-slate-400 hover:text-blue-400 transition-colors duration-200 font-medium">LinkedIn</a>
          <a href={social.twitter} className="text-xs text-slate-400 hover:text-blue-400 transition-colors duration-200 font-medium">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
