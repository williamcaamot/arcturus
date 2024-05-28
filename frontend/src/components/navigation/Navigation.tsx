import React from 'react';
import './styles/navigation.css';

const Navigation = () => {
    const navigateTo = (path: string) => {
      window.location.href = path;
    };
  
    return (
      <div className="navigation">
        <button className="nav-button" onClick={() => navigateTo('/')}>Home</button>
        <button className="nav-button" onClick={() => navigateTo('/SignIn')}>Sign In</button>
        <button className="nav-button" onClick={() => navigateTo('/Statistics')}>Stats</button>
        <button className="nav-button" onClick={() => navigateTo('/Test3')}>Test3</button>
        <button className="nav-button" onClick={() => navigateTo('/MyProfile')}>My Profile</button>
      </div>
    );
  };

export default Navigation;