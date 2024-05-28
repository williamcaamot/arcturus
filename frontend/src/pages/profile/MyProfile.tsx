import React, { useEffect } from "react";
import "./styles/myProfile.css";
import backArrow from "../../../public/images/backArrow.png";
import WorkoutService from "../../services/WorkoutService.ts";


const Statistics = () => {
     
    async function fetchUser() {
         const users = await WorkoutService.getWorkouts();
         console.log(users);
     }

     useEffect(() => {
         fetchUser();
     }, []);


    return (
        <div className="profileContainer">
            <div className="backBtn">
                <button>
                    <img src={backArrow} alt="Back" />
                </button>
            </div>
            <div className="profileHeader">
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
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    className="landingWelcomeProfilePicture"
                />
            </div>
            <div className="centerContent">
                <div className="profileHighlights">
                    <h3>MY HIGHLIGHTS</h3>
                    <div className="highlightCircle">
                        <div className="highlightBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="70"
                                height="70"
                                viewBox="0 0 70 70"
                                fill="none"
                            >
                                <circle
                                    cx="35"
                                    cy="35"
                                    r="33.5"
                                    fill="white"
                                    stroke="#246656"
                                    stroke-width="3"
                                />
                            </svg>
                            <h4>TIME SPENT</h4>
                            <p>46 hrs 12 min</p>
                        </div>
                        <div className="highlightBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="70"
                                height="70"
                                viewBox="0 0 70 70"
                                fill="none"
                            >
                                <circle
                                    cx="35"
                                    cy="35"
                                    r="33.5"
                                    fill="white"
                                    stroke="#246656"
                                    stroke-width="3"
                                />
                            </svg>
                            <h4>TIME SPENT</h4>
                            <p>46 hrs 12 min</p>
                        </div>
                        <div className="highlightBox">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="70"
                                height="70"
                                viewBox="0 0 70 70"
                                fill="none"
                            >
                                <circle
                                    cx="35"
                                    cy="35"
                                    r="33.5"
                                    fill="white"
                                    stroke="#246656"
                                    stroke-width="3"
                                />
                            </svg>
                            <h4>TIME SPENT</h4>
                            <p>46 hrs 12 min</p>
                        </div>
                    </div>
                </div>

                <div className="profileSettings">
                    <div className="landingWelcomeCont"></div>
                </div>
            </div>
            <div>
                <p>From API:</p>
            </div>
        </div>
    );
};

export default Statistics;
