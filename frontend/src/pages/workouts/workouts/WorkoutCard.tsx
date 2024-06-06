import { useNavigate } from "react-router-dom";
import Badge from "../../../components/Badge.tsx";
import { Workout } from "./Workouts.tsx"; 

export const WorkoutCard = ({ workout }: { workout: Workout }) => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

   

    return (
        <div
            className="workoutCardContainer"
            role="button"
            tabIndex={0}
            
            onClick={() => {
                console.log(`Navigating to workout details for workout with ID: ${workout._id}`);
                console.log(workout);
                navigateTo(`/workout-details/${workout._id}`)
            }}
            style={{ cursor: "pointer" }}
        >
            <div className="cardContainerLeft">
                {workout.image && workout.image.length > 0 ? (
                    <img
                        src={workout.image}
                        alt="workout"
                        className="workoutCardImg"
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/150"
                        alt="workout"
                        className="workoutCardImg"
                    />
                )}
            </div>
            <div className="workoutCardContainerRight">
                <div className="workoutCardTitle">
                    <h3>{workout.workoutName}</h3>
                </div>
                <div className="workoutCardDetails">
                    <span>
                        <p style={{ fontFamily: "Akshar", fontSize: "1em" }}>
                            Previously: 3 x 12 x 70kg
                        </p>
                    </span>
                </div>
                <div className="workoutCardTags">
                  
                </div>
            </div>
        </div>
    );
};
