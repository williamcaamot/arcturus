import './styles/createWorkout.css';
import { useNavigate } from 'react-router-dom';
import { Exercise } from '../exercises/Exercises';
import { useState, useEffect } from 'react';
import WorkoutService from '../../../services/WorkoutService';
import { ExerciseCard } from '../exercises/ExerciseCard';
import Navigation from '../../../components/navigation/Navigation';

const CreateWorkout = () => {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [workoutName, setWorkoutName] = useState<string>('');

    const navigateTo = (path: string) => {
        navigate(path);
    };

    async function fetchAllExercises() {
        const exerciseData = await WorkoutService.getExercises();
        console.log(exerciseData.data);
        setExercises(exerciseData.data);
    }

    async function createWorkout() {
        try {
            const res = await fetch('/api/v1/workouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ workoutName: 'ARNOLD FAVS', exercises: [{}, {}] }),
            });
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchAllExercises();
    }, []);

    return (
        <div className='createWorkoutContainer'>
            <div className='createWorkoutHeader'>
                <div className='createWorkoutHeaderInner'>
                    <button onClick={() => navigateTo('/workouts')} className='headerBtn' style={{ backgroundColor: '#FF6D4D' }}>
                        Cancel
                    </button>
                    <button onClick={() => alert('Coming soon')} className='headerBtn' style={{ backgroundColor: '#F2F2F2', color: 'black' }}>
                        Pin this workout
                    </button>
                </div>
                <div className='createWorkoutHeaderTitle'>
                    <input
                        type='text'
                        className='nameInput'
                        placeholder='New Workout'
                        style={{ border: 'none', width: '80%' }}
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}></input>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exercises.map((e) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: "4px" }}>
                        {/* <input type='checkbox' id={e.id} name={e.Exercise_Name} value={e.id} /> */}
                        <button style={{background: "none", border: "none", cursor: "pointer"}}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
                            <path
                                d='M2.75 5.5H19.25M2.75 11H19.25M2.75 16.5H19.25'
                                stroke='#180202'
                                stroke-width='2.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                        </button>
                        <ExerciseCard exercise={e} />
                    </div>
                ))}
            </div>
            <Navigation />
            <div className='floatingBtnContainer'>
                <button
                    role='button'
                    tabIndex={0}
                    onClick={() => createWorkout()}
                    className='floatingBtn'
                    style={{ backgroundColor: '#246656', color: 'white' }}>
                    Save{' '}
                    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='25' viewBox='0 0 21 25' fill='none'>
                        <path
                            d='M7.87488 16.8437L4.83863 13.2292C4.67503 13.0344 4.45313 12.925 4.22176 12.925C3.99039 12.925 3.76849 13.0344 3.60488 13.2292C3.44128 13.4239 3.34937 13.6881 3.34937 13.9635C3.34937 14.0999 3.37193 14.235 3.41577 14.361C3.45961 14.487 3.52387 14.6015 3.60488 14.6979L7.26238 19.0521C7.60363 19.4583 8.15488 19.4583 8.49613 19.0521L17.7536 8.03124C17.9172 7.83647 18.0091 7.57231 18.0091 7.29686C18.0091 7.02142 17.9172 6.75726 17.7536 6.56249C17.59 6.36772 17.3681 6.2583 17.1368 6.2583C16.9054 6.2583 16.6835 6.36772 16.5199 6.56249L7.87488 16.8437Z'
                            fill='white'
                        />
                    </svg>
                </button>
                <button className='plussBtn' style={{ backgroundColor: '#FF6D4D' }}>
                    +
                </button>
            </div>
        </div>
    );
};

export default CreateWorkout;
