import "./styles/logIn.css";

import { useNavigate } from 'react-router-dom';




const LogIn= () => {

    const navigate = useNavigate();

    const navigateToFillPersonalInfo = () => {
        navigate('/fillpersonalinfo');
    
    }

    return (
        <div>
            <div className="logInContainer">
                <div className="logInHeader">
                    <h1>LOG IN</h1>
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
                        <div className="centerPersonaliaContent">
                            <div className="logInInputBoxes">
                                <div className="logInInputBox">                              
                                    <input type="text" placeholder="Name" />    
                                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="300"
                        height="4"
                        viewBox="0 0 300 4"
                        fill="none"
                        >
                        <path
                            d="M2 2H298"
                            stroke="#FF6D4D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        </svg>            
                                </div>    
                                <div className="logInInputBox">  
                                    <input type="text" placeholder="Password" />
                                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="300"
                        height="4"
                        viewBox="0 0 300 4"
                        fill="none"
                        >
                        <path
                            d="M2 2H298"
                            stroke="#FF6D4D"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        </svg>
                                </div>
                            </div>
                            <div>
                                <div className="logInBtns">
                                    <button className="forgotPasswordBtn">
                                        Forgot password?
                                    </button>
                                    <button className="logInBtn">
                                        LOG IN
                                    </button>
                                    <button className="signUpBtn" onClick={navigateToFillPersonalInfo}>
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;