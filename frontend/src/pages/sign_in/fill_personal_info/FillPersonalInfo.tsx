import "./styles/fillPersonalInfo.css";
import { useNavigate } from "react-router-dom";
import Country from '../../../../public/images/personaliaCountry.png';
import Age from '../../../../public/images/personaliaAge.png';
import Weight from '../../../../public/images/personaliaWeight.png';
import Height from '../../../../public/images/personaliaHeight.png';
import Gender  from '../../../../public/images/personaliaGender.png';
import Excercise from '../../../../public/images/personaliaExcercise.png';
import Navigation from "../../../components/navigation/Navigation";



const FillPersonalInfo= () => {

    const navigate = useNavigate();

    const navigateToProfile = () => {
    navigate('/MyProfile');

    }

    return (
        <div>
            <div className="personaliaContainer">
                <div className="headerBox">
                    <h1>GET STARTED</h1>
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
                    <div className="inputBoxes">
                        <div className="inputBox">
                            <img
                                src={Country}
                                alt="Country logo"
                                className="personaliaLogo"
                            />
                            <input
                                type="text"
                                placeholder="Name / coming soon"
                            />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Country}
                                alt="Country logo"
                                className="personaliaLogo"
                            />
                            <input
                                type="text"
                                placeholder="Email / coming soon"
                            />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Country}
                                alt="Country logo"
                                className="personaliaLogo"
                            />
                            <input
                                type="text"
                                placeholder="Password / coming soon"
                            />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Country}
                                alt="Country logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Country" />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Age}
                                alt="Age logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Age" />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Weight}
                                alt="Weight logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Weight" />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Height}
                                alt="Height logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Height" />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Gender}
                                alt="Gender logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Gender" />
                        </div>

                        <div className="inputBox">
                            <img
                                src={Excercise}
                                alt="Excercise logo"
                                className="personaliaLogo"
                            />
                            <input type="text" placeholder="Excercise" />
                        </div>
                        <div className="tagBoxes">
                            <div className="tagBox">
                                <p>Cardio</p>
                            </div>
                            <div className="tagBox">
                                <p>Chest</p>
                            </div>
                            <div className="tagBox">
                                <p>Legs</p>
                            </div>
                            <div className="tagBox">
                                <p>Back</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button
                                    className="createProfileBtn"
                                    onClick={navigateToProfile}
                                >
                                    Create Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillPersonalInfo;
