import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import WorkoutService from '../../services/WorkoutService';
import { Exercise } from '../workouts/exercises/Exercises';
import './styles/landingPage.css';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App.tsx";

const LandingPage = () => {

    const {user} = useContext(UserContext);

    const workouts = [
        {
            id: 1,
            title: 'Workout 1',
            excersises: '4',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 2,
            title: 'Workout 2',
            excersises: '2',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 3,
            title: 'Workout 3',
            excersises: '7',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 4,
            title: 'Workout 4',
            excersises: '8',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 5,
            title: 'Workout 5',
            excersises: '4',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 6,
            title: 'Workout 6',
            excersises: '8',
            image: 'https://via.placeholder.com/200',
        },
    ];
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const navigate = useNavigate();

    const navigateTo = (path: string, id: string) => {
        navigate(`${path}/${id}`);
    };



    async function fetchExercises(){
        const exerciseData = await WorkoutService.getExercises();
        setExercises(exerciseData.data);
    }

    useEffect(() => {
        fetchExercises();
    }, []);

    // async function tryFetch(){
    //     try{
    //         const res = await fetch("/api/v1/user");
    //         const data = await res.json();
    //         console.log(data);
    //     }catch (e) {

    //     }

    // }

    // useEffect(() => {
    //     tryFetch()
    // }, []);




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
                <h2 style={{ margin:"0", fontFamily:"koulen", fontWeight:"200" }}>LET'S GO, {user && user.name.split(" ")[0]}!</h2>
            </div>
            <div className='landingStatsCont'>
                <img src='/images/statsCircle.png' alt='statsPlaceholder' className='tmpStatsImg' />
                <div className='landingPeriodCheckCont' style={{fontFamily:"akshar"}}>
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
            <div style={{fontFamily:"Akshar", fontWeight:"200"}} className='landingAvgStatsCont'>
                <h4 style={{fontSize:"1.2em", margin: 0, fontWeight:"500", letterSpacing:"0.5px" }}>AVERAGE STATS</h4>
                <div className='landingAvgStatsInnerCont'>
                    <div className='avgStatsLeft'>
                        <span>
                            <p style={{ margin: 0 }}>DURATION: </p>
                            <p style={{ margin: 0 }}>67 MIN</p>
                        </span>
                        <span>
                            <p style={{ margin: 0 }}>EXERCISES: </p>
                            <p style={{ margin: 0 }}>6</p>
                        </span>
                        <span>
                            <p style={{ margin: 0 }}>WEIGHT LIFTED: </p>
                            <p style={{ margin: 0 }}>6 897 KG</p>
                        </span>
                    </div>
                    <hr className='dividerDiv'></hr>
                    <div className='avgStatsRight'>
                        <h3 style={{ margin: "0", fontWeight:"400" }}>44 DAY STREAK 🔥</h3>
                    </div>
                </div>
            </div>
            <div style={{fontFamily:"Akshar"}} className='landingYourWorkoutCont'>
                <h4 style={{fontSize:"1.2em", margin: 0, fontWeight:"500", letterSpacing:"0.5px" }}>YOUR WORKOUTS</h4>
                <div className='landingYourWorkoutInnerCont'>
                    {workouts.map((workout) => (
                        <div key={workout.id} className='landingWorkoutCard'>
                            <img src={workout.image} alt={workout.title} className='landingWorkoutCardImg' />
                            <span>
                                <h5 style={{ margin: 0, fontWeight:"500", letterSpacing:"0.5px" }}>{workout.title}</h5>
                                <p style={{ margin: 0 }}>Exercises: {workout.excersises}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{fontFamily:"Akshar"}} className='landingExercisesCont'>
                <h4 style={{fontSize:"1.2em", margin: 0, fontWeight:"500", letterSpacing:"0.5px" }}>EXPLORE EXERCISES</h4>
                <div className='landingYourWorkoutInnerCont'>
                    {exercises.map((excercise) => (
                        <div key={excercise._id} className='landingWorkoutCard' role='button' tabIndex={0} onClick={() => navigateTo('/exercise-details', excercise._id)}>
                        {excercise.Exercise_Image.length > 0 ? <img src={excercise.Exercise_Image} alt='exercise' className='landingExerciseCardImg' /> : <img src='https://via.placeholder.com/150' alt='exercise' className='landingExerciseCardImg' />}
                            <span>
                                <h5 style={{ margin: 0, fontWeight:"500", letterSpacing:"0.5px" }}>{excercise.Exercise_Name}</h5>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default LandingPage;
