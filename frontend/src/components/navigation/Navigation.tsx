import React from 'react';
import './styles/navigation.css';
import navProfile from "../../../public/images/navProfile.png";
import navHome from "../../../public/images/navHome.png";
import navStats from "../../../public/images/navStats.png";
import navWorkouts from "../../../public/images/navWorkouts.png";


const Navigation = () => {
    const navigateTo = (path: string) => {
      window.location.href = path;
    };
  
    return (
      <div className="navigation">
        <button className="nav-button" onClick={() => navigateTo('/')}>
          <img src={navHome} alt="Home"  />
        </button>

        <button className="nav-button" onClick={() => navigateTo('/statistics')}>
          <img src={navStats} alt="Stats" />
        </button>
        
        <button className="nav-button" onClick={() => navigateTo('/SignIn')}>Sign In</button>
        
        <button className="nav-button" onClick={() => navigateTo('')}>
          <img src={navWorkouts} alt="Workouts" />
        </button>
        
        <button className="nav-button" onClick={() => navigateTo('/MyProfile')}>
          <img src={navProfile} alt="Profile" />
        </button>
      </div>
    );
  };

export default Navigation;