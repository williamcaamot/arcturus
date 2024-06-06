import {useEffect, useState} from 'react';
import './styles/workoutIndex.css';
import Workouts from './workouts/Workouts';
import Exercises from './exercises/Exercises';
import Navigation from '../../components/navigation/Navigation';
import { useNavigate } from 'react-router-dom';

type Tab = 'WORKOUTS' | 'EXERCISES';

const WorkoutsIndex = () => {

    const navigate = useNavigate();

    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {

        const url = window.location.href;

        const urlModified = url.split("/");
        console.log(urlModified)

        setCurrentUrl(urlModified[3]);

        // You can also perform other actions with the URL here
        console.log('Current Page:', currentUrl);
    }, []); // Empty dependency array means this effect runs once after the initial render

    const navigateTo = (path: string) => {
        navigate(path);
    };

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
                <button className={'tabButtonLeft'}
                        style={currentUrl === "workouts" ? {backgroundColor: "#FF6D4D", color: "black"} : undefined}
                        onClick={() => navigateTo("/workouts")}>Workouts
                </button>
                <button className={'tabButtonRight'}
                        style={currentUrl === "exercises" ? {backgroundColor: "#FF6D4D", color: "black"} : undefined}
                        onClick={() => navigateTo('/exercises')}>Exercises
                </button>
            </div>


            <Workouts/>



            <Navigation/>
        </div>
    );
};

export default WorkoutsIndex;
