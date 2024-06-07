import {useNavigate} from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import WorkoutService from '../../services/WorkoutService';
import {Exercise} from '../workouts/exercises/Exercises';
import './styles/landingPage.css';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App.tsx";
import WorkoutPlaceholderImg from '../../../public/images/No-Image-Available.png';
import workouts from "../workouts/workouts/Workouts.tsx";

const LandingPage = () => {

    const [workouts, setWorkouts] = useState([]);

    const {user} = useContext(UserContext);

    const [exercises, setExercises] = useState<Exercise[]>([]);

    const navigate = useNavigate();

    const navigateTo = (path: string, id: string) => {
        navigate(`${path}/${id}`);
    };


    async function fetchExercises() {
        const exerciseData = await WorkoutService.getExercises();
        setExercises(exerciseData.data);
    }

    async function fetchWorkouts() {
        const result = await fetch("/api/v1/workouts");
        const data = await result.json();
        setWorkouts(data);
        console.log(data)
    }

    useEffect(() => {
        fetchExercises();
        fetchWorkouts();
    }, []);


    return (
        <div className='landingContainer'>
            <div className='landingWelcomeCont'>
                {user &&
                user.image ? <img
                    src={user.image}
                    alt="Avatar"
                    className="landingWelcomeProfilePicture"
                /> : <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    className="landingWelcomeProfilePicture"
                />
                }
                <h1 style={{fontSize: "2em", margin: "0", fontFamily: "koulen", fontWeight: "200"}}>LET'S
                    GO, {user && user.name.split(" ")[0]}!</h1>
            </div>
            <div className='landingStatsCont'>
                <img src='/images/statsCircle.png' alt='statsPlaceholder' className='tmpStatsImg'/>
                <div className='landingPeriodCheckCont' style={{fontFamily: "akshar"}}>
                    <div>
                        <input type='checkbox' id='lastWeek' className='landingSearchBar'/>
                        <label htmlFor='lastWeek'>Last week</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastMonth' className='landingSearchBar'/>
                        <label htmlFor='lastMonth'>Last Month</label>
                    </div>
                    <div>
                        <input type='checkbox' id='last3Months' className='landingSearchBar'/>
                        <label htmlFor='last3Months'>Last 3 months</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastYear' className='landingSearchBar'/>
                        <label htmlFor='lastYear'>Last year</label>
                    </div>
                </div>
            </div>
            <div style={{fontFamily: "Akshar", fontWeight: "200"}} className='landingAvgStatsCont'>
                <h4 style={{fontSize: "1.2em", margin: 0, fontWeight: "500", letterSpacing: "0.5px"}}>AVERAGE STATS</h4>
                <div className='landingAvgStatsInnerCont'>
                    <div className='avgStatsLeft'>
                        <span>
                            <p style={{margin: 0}}>DURATION: </p>
                            <p style={{margin: 0}}>67 MIN</p>
                        </span>
                        <span>
                            <p style={{margin: 0}}>EXERCISES: </p>
                            <p style={{margin: 0}}>6</p>
                        </span>
                        <span>
                            <p style={{margin: 0}}>WEIGHT LIFTED: </p>
                            <p style={{margin: 0}}>6 897 KG</p>
                        </span>
                    </div>
                    <hr className='dividerDiv'></hr>
                    <div className='avgStatsRight'>
                        <h3 style={{margin: "0", fontWeight: "400"}}>44 DAY STREAK 🔥</h3>
                    </div>
                </div>
            </div>
            <div style={{fontFamily: "Akshar"}} className='landingYourWorkoutCont'>
                <h4 style={{fontSize: "1.2em", margin: 0, fontWeight: "500", letterSpacing: "0.5px"}}>YOUR WORKOUTS</h4>
                <div className='landingYourWorkoutInnerCont'>
                    {workouts.length > 0 ? workouts.map((workout) => (
                            <div key={workout._id} className='landingWorkoutCard'
                            onClick={() => {
                                navigateTo(`/workout-details`, workout._id)
                            }}

                            >
                                <img src={workout && workout.image ? workout.image : WorkoutPlaceholderImg} alt={workout.workoutName} className='landingWorkoutCardImg'/>
                                <span>
                                <h5 style={{
                                    margin: 0,
                                    fontWeight: "500",
                                    letterSpacing: "0.5px",
                                    textWrap: "wrap"
                                }}>{workout.workoutName}</h5>
                                <p style={{margin: 0}}>Exercises: {workout.exercises.length}</p>
                            </span>
                            </div>
                        ))
                        : <h4 style={{paddingLeft:"10px"}}>You have no workouts yet!</h4>

                    }
                </div>
            </div>
            <div style={{fontFamily: "Akshar"}} className='landingExercisesCont'>
                <h4 style={{fontSize: "1.2em", margin: 0, fontWeight: "500", letterSpacing: "0.5px"}}>EXPLORE
                    EXERCISES</h4>
                <div className='landingYourWorkoutInnerCont'>
                    {exercises.length > 0 ?
                        exercises.map((excercise) => (
                                <div key={excercise._id} className='landingWorkoutCard' role='button' tabIndex={0}
                                     onClick={() => navigateTo('/exercise-details', excercise._id)}>
                                    {excercise.Exercise_Image.length > 0 ? <img src={excercise.Exercise_Image} alt='exercise'
                                                                                className='landingExerciseCardImg'/> :
                                        <img src={WorkoutPlaceholderImg} alt='exercise'
                                             className='landingExerciseCardImg'/>}
                                    <span>
                                <h5 style={{
                                    margin: 0,
                                    fontWeight: "500",
                                    letterSpacing: "0.5px"
                                }}>{excercise.Exercise_Name}</h5>
                            </span>
                                </div>
                            ))
                        :
                        <h4 style={{paddingLeft:"10px"}}>Could not get exercises!</h4>


                    }





                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default LandingPage;
