import "./styles/statistics.css";
import backArrow from '../../../public/images/backArrow.png';
import Lifter from '../../../public/images/Lifter.png';
import Runner from '../../../public/images/Runner.png';
import Dancer from '../../../public/images/dancer.png';
import Trophy from '../../../public/images/Trophy.png';

const Statistics = () => {
    return (
        <div className="statisticsContainer">
            <div className="backBtn">
                <button>
                    <img src={backArrow} alt="Back" />
                </button>
            </div>

            <div className="centerContent">

                <div className="statsHeader">
                    <h1>MY STATS</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="132" height="4" viewBox="0 0 132 4" fill="none" className="line">
                        <path d="M2.98218 2H129.018" stroke="#FF6D4D" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>
                
                <div className="statsCircleBox">
                    <img src="/images/statsCircle.png" alt="statsCircle" className="statsCircle" />
                </div>


                <div className="infoBoxes">
                    <div className="infoBox">
                        <img src={Lifter} alt="LifterImage" />
                        <p>Your average workout is 90 minutes long. Great job!</p> {/* Add data from api later here */}
                    </div>

                    <div className="infoBox">
                        <img src={Dancer} alt="DancerImage" />
                        <p>On average, you burn 457 calories per workout.</p> {/* Add data from api later here */}
                    </div>

                    <div className="infoBox">
                        <img src={Trophy} alt="TrophyImage" />
                        <p>You typically workout 3.4 times per week. Nice!</p> {/* Add data from api later here */}
                    </div>

                    <div className="infoBox">
                        <img src={Runner} alt="RunnerImage" />
                        <p>You have lifted 390kg so far this week! Amazing!</p> {/* Add data from api later here */}
                    </div>
            </div>
            </div>

            
        </div>
    );
};

export default Statistics;
