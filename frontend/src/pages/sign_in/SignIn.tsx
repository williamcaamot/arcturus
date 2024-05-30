import "./styles/signIn.css";
import React from 'react';
//import { useNavigate } from 'react-router-dom';
import flexrHeader from '../../../public/images/flexrHeader.png';
import flexrLogo from '../../../public/images/Flexr-logo-green-black.png';
//import appleLogo from '../../../public/images/appleLogo3.png';
//import facebookLogo from '../../../public/images/facebookLogo.png';
//import googleLogo from '../../../public/images/googleLogo.png';
//import userIcon from '../../../public/images/userIcon2.png';
import GoogleSigninButton from "./GoogleSigninButton.tsx";
import SignoutButton from "./SignoutButton.tsx";
import FacebookSigninButton from "./FacebookSigninButton.tsx";


const SignIn: React.FC = () => {
    /*
    const navigate = useNavigate();

    const navigateToLogIn = () => {
        navigate('/logIn');
    
    }
    */

    return (
        <div className="signInContainer">

            <div className="signInHeader">
            {/* <h1>FLEXR</h1> */}
            <img src={flexrHeader} alt="Flexr Header" />
            </div>

            <div className="signInLogo">
               <img src={flexrLogo} alt="" className="signInLogo" />
            </div>

            {/*
            <button className="signInBoxes appleBtn">
                <img src={appleLogo} alt="Apple logo" className="logo" />
                <p>Continue with Apple</p>
            </button>
            */}

            {/*
            <button className="signInBoxes facebookBtn">
                <img src={facebookLogo} alt="Facebook logo" className="logo" />
                <p>Continue with Facebook</p>
            </button>
            */}
            <FacebookSigninButton/>
            <GoogleSigninButton/>

            {/*
            <button className="signInBoxes newUserBtn" onClick={navigateToLogIn}>
            <img src={userIcon} alt="Google logo"  className="logo"/>
                <p>Register new user</p>
            </button>
            */}

            <SignoutButton/>
        </div>
    );
};

export default SignIn;
