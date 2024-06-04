import {useState} from 'react';
import './styles/workoutIndex.css';
import Workouts from './workouts/Workouts';
import Exercises from './exercises/Exercises';
import Navigation from '../../components/navigation/Navigation';

type Tab = 'WORKOUTS' | 'EXERCISES';

const WorkoutsIndex = () => {
    const [activeTab, setActiveTab] = useState<Tab>('WORKOUTS');

    return (
        <div className='workoutsIndexContainer'>
            <div className='workoutsHeader'>
                <div>
                    {activeTab === "WORKOUTS" ? <h1>MY WORKOUTS</h1>: <h1>EXERCISES</h1>}

                    {/*<svg xmlns='http://www.w3.org/2000/svg' width='132' height='4' viewBox='0 0 132 4' fill='none' className='line'>
                    <path d='M2.98218 2H129.018' stroke='#FF6D4D' stroke-width='4' stroke-linecap='round' />
                </svg>*/}
                </div>
                <div>
                    {
                    activeTab === "WORKOUTS" && <span className={"koulen"}>ADD +</span>
                    }

                </div>
            </div>

            <div className='workoutTabsV2'>
                <button className={activeTab === 'WORKOUTS' ? 'tabButtonLeft' : "tabButtonLeft"}
                        style={activeTab === "WORKOUTS" ? {backgroundColor: "#FF6D4D"} : undefined}
                        onClick={() => setActiveTab('WORKOUTS')}>Workouts
                </button>
                <button className={activeTab === 'EXERCISES' ? 'tabButtonRight' : "tabButtonRight"}
                        style={activeTab === "EXERCISES" ? {backgroundColor: "#FF6D4D"} : undefined}
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
