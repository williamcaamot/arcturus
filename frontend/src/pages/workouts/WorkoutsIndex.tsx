import {useState} from 'react';
import './styles/workoutIndex.css';
import Workouts from './workouts/Workouts';
import Exercises from './exercises/Exercises';
import Navigation from '../../components/navigation/Navigation';
import { useNavigate } from 'react-router-dom';

type Tab = 'WORKOUTS' | 'EXERCISES';

const WorkoutsIndex = () => {

    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    // async function createWorkout() {
    //     try {
    //         const res = await fetch("/api/v1/workouts", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({workoutName: "ARNOLD FAVS", exercises: [{}, {}]}),

    //         });
    //         const data = await res.json();
    //         console.log(data);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    const [activeTab, setActiveTab] = useState<Tab>('WORKOUTS');

    return (
        <div className='workoutsIndexContainer'>
            <div className='workoutsHeader'>
                <div>
                    {activeTab === "WORKOUTS" ? <h1>MY WORKOUTS</h1> : <h1>EXERCISES</h1>}

                    {/*<svg xmlns='http://www.w3.org/2000/svg' width='132' height='4' viewBox='0 0 132 4' fill='none' className='line'>
                    <path d='M2.98218 2H129.018' stroke='#FF6D4D' stroke-width='4' stroke-linecap='round' />
                </svg>*/}
                </div>
                <div style={{paddingLeft: "10px"}}>
                    {
                        activeTab === "WORKOUTS" && <span className={"addWorkoutButton"} 
                        //onClick={() => {createWorkout()}}
                        onClick={() => navigateTo('/create-workout')}
                        >ADD +</span>
                    }

                </div>
            </div>

            <div className='workoutTabsV2'>
                <button className={activeTab === 'WORKOUTS' ? 'tabButtonLeft' : "tabButtonLeft"}
                        style={activeTab === "WORKOUTS" ? {backgroundColor: "#FF6D4D", color: "black"} : undefined}
                        onClick={() => setActiveTab('WORKOUTS')}>Workouts
                </button>
                <button className={activeTab === 'EXERCISES' ? 'tabButtonRight' : "tabButtonRight"}
                        style={activeTab === "EXERCISES" ? {backgroundColor: "#FF6D4D", color: "black"} : undefined}
                        onClick={() => setActiveTab('EXERCISES')}>Exercises
                </button>
            </div>


            {activeTab === 'WORKOUTS' && <Workouts/>}
            {activeTab === 'EXERCISES' && <Exercises/>}


            <Navigation/>
        </div>
    );
};

export default WorkoutsIndex;
