import "./styles/myProfile.css";
import backArrow from "../../../public/images/backArrow.png";

const Statistics = () => {
    return (
        <div className="profileContainer">
            <div className="backBtn">
                <button>
                    <img src={backArrow} alt="Back" />
                </button>
            </div>

        </div>
    );
};

export default Statistics;
