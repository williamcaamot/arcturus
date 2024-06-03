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
        <div className='left-Buttons'>
          <button className="nav-button" onClick={() => navigateTo('/landing-page')}>
            <img src={navHome} alt="Home"  />
          </button>
    
          <button className="nav-button" onClick={() => navigateTo('/statistics')}>
            <img src={navStats} alt="Stats" />
          </button>
        </div>

          <button className="nav-circle-button" onClick={() => navigateTo('/')}>
            Start Workout/signIn
          </button>
        
        <div className='right-Buttons'>
          <button className="nav-button" onClick={() => navigateTo('/workouts')}>
            <img src={navWorkouts} alt="Workouts" />
          </button>

          <button className="nav-button" onClick={() => navigateTo('/my-profile')}>
            <img src={navProfile} alt="Profile" />
          </button> 
        </div>
      </div>
    );
  };
  
export default Navigation;
