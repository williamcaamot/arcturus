import "./styles/fillPersonalInfo.css";
import { useNavigate } from 'react-router-dom';
import Country from '../../../../public/images/personaliaCountry.png';
import Age from '../../../../public/images/personaliaAge.png';
import Weight from '../../../../public/images/personaliaWeight.png';
import Height from '../../../../public/images/personaliaHeight.png';
import Gender  from '../../../../public/images/personaliaGender.png';
import Excercise from '../../../../public/images/personaliaExcercise.png';



const FillPersonalInfo= () => {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/MyProfile');
    
    }

    return (
        <div>
            <div className="headerContent">
                <h1>MY PROFILE</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="225"
                    height="4"
                    viewBox="0 0 225 4"
                    fill="none"
                >
                    <path
                        d="M2 2H223"
                        stroke="#FF6D4D"
                        stroke-width="4"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default FillPersonalInfo;