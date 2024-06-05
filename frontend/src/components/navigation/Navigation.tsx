import './styles/navigation.css';
import {useNavigate} from "react-router-dom";
import HomeIcon from "../icons/HomeIcon.tsx";
import StatsIcon from "../icons/StatsIcon.tsx";
import WorkoutIcon from "../icons/WorkoutIcon.tsx";
import ProfileIcon from "../icons/ProfileIcon.tsx";
import {useEffect, useState} from "react";


const Navigation = () => {
    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path)
    };

    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {

        const url = window.location.href;

        const urlModified = url.split("/");
        console.log(urlModified)

        setCurrentUrl(urlModified[3]);

        // You can also perform other actions with the URL here
        console.log('Current Page:', currentUrl);
    }, []); // Empty dependency array means this effect runs once after the initial render


    return (
        <>
            <div style={{}} className={"navigationSpacer"}></div>
            <div className="navigation">

                <div className='left-Buttons'>
                    <button className="nav-button" onClick={() => navigateTo('/landing-page')}>
                        <HomeIcon color={currentUrl === "landing-page" ? "#FF6D4D" : "white"}/>
                    </button>

                    <button className="nav-button" onClick={() => navigateTo('/statistics')}>
                        <StatsIcon color={currentUrl === "statistics" ? "#FF6D4D" : "white"}/>
                    </button>
                </div>

                <button className="nav-circle-button" onClick={() => {
                    alert("Workout tracking coming soon!")
                }}>
                    Start Workout
                </button>

                <div className='right-Buttons'>
                    <button className="nav-button" onClick={() => navigateTo('/workouts')}>
                        <WorkoutIcon color={currentUrl === "workouts" ? "#FF6D4D" : "white"}/>
                    </button>

                    <button className="nav-button" onClick={() => navigateTo('/my-profile')}>
                        <ProfileIcon color={currentUrl === "my-profile" ? "#FF6D4D" : "white"}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navigation;
