import './styles/landingPage.css';

const LandingPage = () => {
    return (
        <div className='landingContainer'>
            <div className='landingWelcomeCont'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='landingWelcomeProfilePicture' />
                <h2 style={{ margin: 0 }}>Welcome Darwin</h2>
            </div>
            <div className='landingStatsCont'>
                <img src='/images/statsCircle.png' alt='statsPlaceholder' className='tmpStatsImg' />
                <div className='landingPeriodCheckCont'>
                    <div>
                        <input type='checkbox' id='lastWeek' className='landingSearchBar' />
                        <label htmlFor='lastWeek'>Last week</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastMonth' className='landingSearchBar' />
                        <label htmlFor='lastMonth'>Last Month</label>
                    </div>
                    <div>
                        <input type='checkbox' id='last3Months' className='landingSearchBar' />
                        <label htmlFor='last3Months'>Last 3 months</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastYear' className='landingSearchBar' />
                        <label htmlFor='lastYear'>Last year</label>
                    </div>
                </div>
            </div>
            <div className='landingAvgStatsCont'>
                <h4 style={{ margin: 0 }}>Avgerage stats</h4>
                <div className='landingAvgStatsInnerCont'>
                    <div className='avgStatsLeft'>
                        <span>
                        <p style={{ margin: 0 }}>Duration</p>
                        <p style={{ margin: 0 }}>67min</p>
                        </span>
                        <span>
                        <p style={{ margin: 0 }}>Exercises</p>
                        <p style={{ margin: 0 }}>6</p>
                        </span>
                        <span>
                        <p style={{ margin: 0 }}>Weight lifted</p>
                        <p style={{ margin: 0 }}>6897kg</p>
                        </span>
                    </div>
                    <hr className='dividerDiv'></hr>
                    <div className='avgStatsRight'>
                        <h3 style={{ margin: 0 }}>44 day streak</h3>
                    </div>
                </div>
            </div>
            <div className='landingYourWorkoutCont'>
                <p>Your workouts</p>
            </div>
            <div className='landingExercisesCont'>
                <p>Your workouts</p>
            </div>
        </div>
    );
};

export default LandingPage;
