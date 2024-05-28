import React, { useEffect } from "react";
import "./styles/myProfile.css";
import backArrow from "../../../public/images/backArrow.png";
import WorkoutService from "../../services/WorkoutService.ts";
import statsIcon from "../../../public/images/statsIcon.png";
import accountSettingsIcon from "../../../public/images/settingsicon.png";
import remindersIcon from "../../../public/images/reminderIcon.png";
import privacyPolicyIcon from "../../../public/images/policyIcon.png";
import tCIcon from "../../../public/images/termsandcontitionsIcon.png";
import updatesIcon from "../../../public/images/updatesIcon.png";
import notificationsIcon from "../../../public/images/notificationsIcon.png";
import timeSpentIcon from "../../../public/images/highlightTimeIcon.png";
import kgsLiftedIcon from "../../../public/images/HighlightKgIcon.png";
import calsBurnedIcon from "../../../public/images/highlightCalsIcon.png";
import editIcon from "../../../public/images/editBtn.png";


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
                <div className="profilePic">
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    className="landingWelcomeProfilePicture"
                />
                <button className="changePicBtn">
                    <img src={editIcon} alt="editIconButton" />
                </button>
                </div>
             
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
                            <img src={timeSpentIcon} alt="timeSpentIcon" />

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
                            <img src={kgsLiftedIcon} alt="kgsLiftedIcon" />

                            <h4>KGS LIFTED</h4>
                            <p>2,467 kg</p>
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
                            <img src={calsBurnedIcon} alt="calsBurnedIcon" />

                            <h4>CALS BURNED</h4>
                            <p>4,987 cal</p>
                        </div>
                    </div>
                </div>

                <div className="profileSettings">
                    <div className="settingsBtns">

                    <button className="myStatsBtn">
                        <img src={statsIcon} alt="statsIcon" />
                        <p>My Stats</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="accountSettingsBtn">
                        <img src={accountSettingsIcon} alt="accountSettingsIcon" />
                        <p>Account Settings</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="remindersBtn">
                        <img src={remindersIcon} alt="remindersIcon" />
                        <p>Reminders</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="privacyPolicyBtn">
                        <img src={privacyPolicyIcon} alt="privacyPolicyIcon" />
                        <p>Privacy Policy</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="tCBtn">
                        <img src={tCIcon} alt="tCIcon" />
                        <p>Terms & Conditions</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="updatesBtn">
                        <img src={updatesIcon} alt="updatesIcon" />
                        <p>Updates</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>

                    <button className="notificationsBtn">
                        <img src={notificationsIcon} alt="notificationsIcon" />
                        <p>Notifications</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <path d="M1 1L11 9.26531L1 16" stroke="#180202" stroke-width="2"/>
                        </svg>
                    </button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
