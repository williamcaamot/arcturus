import { useEffect, useState } from 'react';
import './styles/workoutDetails.css';
import {ExerciseCard} from "../exercises/ExerciseCard.tsx";
import Navigation from '../../../components/navigation/Navigation';
import {useNavigate, useParams} from "react-router-dom";
import { Workout } from './Workouts';
import WorkoutService from '../../../services/WorkoutService';
import Badge from '../../../components/Badge';


const WorkoutDetails = () => {


    const { id } = useParams();

    const [workout, setWorkout] = useState<Workout>();

    async function fetchWorkoutById(){
        const workoutData = await WorkoutService.getWorkout(id ? id : '');
        setWorkout(workoutData.data);
    }
    
    useEffect(() => {
        fetchWorkoutById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path)
    };

    return (
        <div className='workoutDetailsPage'>            <div className='workoutDetailsHeader'>
                    <div className='workoutDetailsHeaderTitle'>
                        <div role='button' tabIndex={0} onClick={() => navigateTo('/workouts')} style={{ cursor: 'pointer' }}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='48' height='42' viewBox='0 0 48 42' fill='none'>
                                <path
                                    d='M10.5 19.6875H40.5C40.8978 19.6875 41.2794 19.8258 41.5607 20.0719C41.842 20.3181 42 20.6519 42 21C42 21.3481 41.842 21.6819 41.5607 21.9281C41.2794 22.1742 40.8978 22.3125 40.5 22.3125H10.5C10.1022 22.3125 9.72064 22.1742 9.43934 21.9281C9.15804 21.6819 9 21.3481 9 21C9 20.6519 9.15804 20.3181 9.43934 20.0719C9.72064 19.8258 10.1022 19.6875 10.5 19.6875Z'
                                    fill='#180202'
                                />
                                <path
                                    d='M11.1212 21L23.5622 31.8833C23.8439 32.1297 24.0021 32.464 24.0021 32.8125C24.0021 33.161 23.8439 33.4953 23.5622 33.7418C23.2806 33.9882 22.8986 34.1267 22.5002 34.1267C22.1019 34.1267 21.7199 33.9882 21.4382 33.7418L7.93824 21.9293C7.79855 21.8073 7.68772 21.6625 7.6121 21.503C7.53648 21.3436 7.49756 21.1726 7.49756 21C7.49756 20.8274 7.53648 20.6564 7.6121 20.497C7.68772 20.3375 7.79855 20.1927 7.93824 20.0708L21.4382 8.25825C21.7199 8.0118 22.1019 7.87334 22.5002 7.87334C22.8986 7.87334 23.2806 8.0118 23.5622 8.25825C23.8439 8.5047 24.0021 8.83897 24.0021 9.1875C24.0021 9.53604 23.8439 9.8703 23.5622 10.1168L11.1212 21Z'
                                    fill='#180202'
                                />
                            </svg>
                        </div>
                            <h1>My Workout</h1>
                            {/* <h1>{workout?.Workout_Name}</h1> */}
                          {/*   <div className='workoutDetailsContainer'>
                                {workout?.exercises.map((exercise, index) => (
                                <div key={index}>
                                <h2>{exercise.Exercise_Name}</h2>
                                <img src={exercise.Exercise_Image} alt="" />
                                {exercise && exercise.muscle_gp && <Badge label={exercise.muscle_gp} backgroundColor='#53B39E' textColor='black'/>}
                                {exercise && exercise.Equipment && <Badge label={exercise.Equipment} />}
                                {exercise && exercise.Description && <Badge label={exercise.Description} backgroundColor='#FF6D4D'/>}
                            </div>
                            ))}
                        </div> */}
                    <div className='workoutDetailsHeaderBtnCont'>
                        <div role='button' tabIndex={0} onClick={() => alert("Coming soon")} className='startWorkoutDetailsBtn' style={{color: 'white'}}>
                            Start
                        </div>
                        <div role='button' tabIndex={0} onClick={() => alert("Coming soon")} className='editWorkoutDetailsBtn'>
                            Edit
                        </div>
                    </div>
                </div>
                <div className='workoutDetailsContainer'>
                 {/*    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />
                    <ExerciseCard />  */}
                </div>
                <Navigation />
            </div>
        </div>
    );
};

export default WorkoutDetails;
