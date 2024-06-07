import {useNavigate} from "react-router-dom";
import {Workout} from "./Workouts.tsx";
import WorkoutPlaceholderImg from '../../../../public/images/No-Image-Available.png';

export const WorkoutCard = ({workout}: { workout: Workout }) => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };


    return (
        <div style={{width:"100%", height:"100%", paddingTop: "8px", paddingBottom:"8px"}}>
            <div
                className="workoutCardContainer"
                role="button"
                tabIndex={0}

                onClick={() => {
                    console.log(`Navigating to workout details for workout with ID: ${workout._id}`);
                    console.log(workout);
                    navigateTo(`/workout-details/${workout._id}`)
                }}
                style={{cursor: "pointer"}}
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
                            src={WorkoutPlaceholderImg}
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
                        <p style={{fontFamily: "Akshar", fontSize: "1em"}}>
                            Exercises: {workout.exercises && workout.exercises.length}
                        </p>
                    </span>
                    </div>
                    <div className="workoutCardTags">

                    </div>
                </div>
            </div>
        </div>
    );
};
