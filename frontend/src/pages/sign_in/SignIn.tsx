import "./styles/signIn.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import appleLogo from '../../../public/images/appleLogo3.png';
import facebookLogo from '../../../public/images/facebookLogo.png';
import googleLogo from '../../../public/images/googleLogo.png';
import userIcon from '../../../public/images/userIcon2.png';


const SignIn: React.FC = () => {

    const handleFBSignIn = async () => {
        window.location.href = "http://localhost:3000/auth/facebook";
    }
    const navigate = useNavigate();

    const navigateToFillPersonalInfo = () => {
        navigate('/fillpersonalinfo');
    
    }

    return (
        <div className="signInContainer">
            <div className="signInHeader">
                <h1>FLEXR</h1>
            </div>

            <div className="signInLogo">
                <img src="" alt="" className="signInLogo"/>
            </div>

            <button className="signInBoxes appleBtn">
                <img src={appleLogo} alt="Apple logo" className="logo"/>
                <p>Continue with Apple</p>
            </button>

            <button className="signInBoxes facebookBtn" onClick={handleFBSignIn}>
                <img src={facebookLogo} alt="Facebook logo" className="logo"/>
                <p>Continue with Facebook</p>
            </button>

            <button className="signInBoxes googleBtn">
                <img src={googleLogo} alt="Google logo" className="logo"/>
                <p>Continue with Google</p>
            </button>

            <button className="signInBoxes newUserBtn" onClick={navigateToFillPersonalInfo}>
                <img src={userIcon} alt="Google logo" className="logo"/>
                <p>Register new user</p>

            </button>
        </div>
    );
};

export default SignIn;
