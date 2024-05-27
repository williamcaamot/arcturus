import "./styles/landingPage.css";

const LandingPage= () => {
    return (
        <div className="landingContainer">
            <div className="landingWelcomeCont">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="landingWelcomeProfilePicture"/>
                <h2 style={{margin: 0}}>Welcome Darwin</h2>
            </div>
            <div className="landingStatsCont">
                <img src="../images/statsCircle.png" alt="statsPlaceholder" className="tmpStatsImg"/>
                
            </div>
            <div className="landingAvgStatsCont">
                <p>Avg stats</p>
            </div>
            <div className="landingYourWorkoutCont">
                <p>Your workouts</p>
            </div>
            <div className="landingExercisesCont">
                <p>Your workouts</p>
            </div>
        </div>
    );
};

export default LandingPage;