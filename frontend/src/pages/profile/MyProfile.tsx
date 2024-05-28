import React, { useEffect, useState } from "react";
import "./styles/myProfile.css";
import backArrow from "../../../public/images/backArrow.png";
import WorkoutService from "../../services/WorkoutService";

const Statistics = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await WorkoutService.getWorkouts();
            setWorkouts(response.data);
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="profileContainer">
            <div className="backBtn">
                <button>
                    <img src={backArrow} alt="Back" />
                </button>
                <div>
                    <p>From API:</p>
                    <p>{workouts && JSON.stringify(workouts, null, 2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
