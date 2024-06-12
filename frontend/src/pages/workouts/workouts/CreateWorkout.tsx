import './styles/createWorkout.css';
import { useNavigate } from 'react-router-dom';
import { Exercise } from '../exercises/Exercises';
import { useRef, useState } from 'react';
import { ExerciseCard } from '../exercises/ExerciseCard';
import Navigation from '../../../components/navigation/Navigation';
import ExercisePickerForWorkout from './ExercisePickForWorkout';

const CreateWorkout = () => {
    const navigate = useNavigate();
    const [workoutName, setWorkoutName] = useState<string>('');
    const [workoutImgUrl, setWorkoutImgUrl] = useState<string>();
    const [workoutDescription, setWorkoutDescription] = useState<string | null>(null);
    const [addExercisePageIsOpen, setAddExercisePageIsOpen] = useState<boolean>(false);

    const [newWorkoutExercises, setNewWorkoutExercises] = useState<Exercise[]>([]);

    const [editTitle, setEditTitle] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const navigateTo = (path: string) => {
        navigate(path);
    };

    async function createWorkout() {
        try {
            const res = await fetch('/api/v1/workouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    workoutName: workoutName.length === 0 ? 'New Workout' : workoutName,
                    description: workoutDescription,
                    image: workoutImgUrl,
                    exercises: newWorkoutExercises,
                
                }),
            });
            const data = await res.json();
            console.log(data);
            navigate('/workouts');
        } catch (e) {
            console.log(e);
            alert('Something went wrong');
        }
    }

    const handleSetsChange = (e: React.ChangeEvent<HTMLSelectElement>, exercise: Exercise) => {
        const newSets = e.target.value;
        setNewWorkoutExercises((prevExercises) =>
            prevExercises.map((ex) => {
                if (ex._id === exercise._id) {
                    return { ...ex, sets: parseInt(newSets) };
                }
                return ex;
            })
        );
    };
    const handleRepsChange = (e: React.ChangeEvent<HTMLSelectElement>, exercise: Exercise) => {
        const newReps = e.target.value;
        setNewWorkoutExercises((prevExercises) =>
            prevExercises.map((ex) => {
                if (ex._id === exercise._id) {
                    return { ...ex, reps: parseInt(newReps) };
                }
                return ex;
            })
        );
    };

    console.log(newWorkoutExercises)

    return (
        <div className='createWorkoutContainer'>
            {addExercisePageIsOpen ? (
                <ExercisePickerForWorkout
                    setAddExercisePageIsOpen={setAddExercisePageIsOpen}
                    newWorkoutExercises={newWorkoutExercises}
                    setNewWorkoutExercises={setNewWorkoutExercises}
                />
            ) : (
                <>
                    <div className='createWorkoutHeader'>
                        <div className='createWorkoutHeaderInner'>
                            <button onClick={() => navigateTo('/workouts')} className='headerBtn' style={{ backgroundColor: '#FF6D4D', fontFamily:"akshar", fontSize:"1.2em" }}>
                                CANCEL
                            </button>
                            <button onClick={() => alert('Coming soon')} className='headerBtn' style={{ backgroundColor: '#F2F2F2', color: 'black',fontFamily:"akshar", fontSize:"1.2em" }}>
                                PIN THIS WORKOUT
                            </button>
                        </div>
                        <div className='createWorkoutHeaderTitle'>
                            <input
                                ref={inputRef}
                                type='text'
                                className='nameInput'
                                placeholder='New Workout NAME*'
                                style={{ border: 'none', width: '80%' }}
                                value={workoutName}
                                onChange={(e) => setWorkoutName(e.target.value)}></input>
                            <button
                                style={{ border: 'none', background: 'none' }}
                                onClick={() => {
                                    setEditTitle(!!editTitle);
                                    if (inputRef.current) {
                                        if (editTitle) {
                                            inputRef.current.blur();
                                        } else {
                                            inputRef.current.focus();
                                        }
                                    }
                                }}>
                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                                    <g clip-path='url(#clip0_444_2917)'>
                                        <path
                                            d='M16.762 3.42857C17.0046 3.14193 17.3046 2.90862 17.643 2.7435C17.9814 2.57838 18.3507 2.48508 18.7274 2.46953C19.1041 2.45399 19.48 2.51655 19.831 2.65322C20.182 2.78989 20.5005 2.99768 20.7661 3.26335C21.0318 3.52901 21.2388 3.84672 21.374 4.19622C21.5091 4.54573 21.5695 4.91936 21.5512 5.29331C21.5329 5.66726 21.4363 6.03331 21.2677 6.36815C21.099 6.70299 20.8619 6.99927 20.5716 7.23809L7.71441 20.0952L2.47632 21.5238L3.90489 16.2857L16.762 3.42857Z'
                                            stroke='#180202'
                                            stroke-width='3'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_444_2917'>
                                            <rect width='22.8571' height='22.8571' fill='white' transform='translate(0.571533 0.571426)' />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <input
                            type='text'
                            className='nameInput'
                            placeholder='Image link (optional)'
                            value={workoutImgUrl}
                            onChange={(e) => setWorkoutImgUrl(e.target.value)}></input>
                        <input
                            type='text'
                            className='nameInput'
                            placeholder='Description (optional)'
                            value={workoutDescription && workoutDescription.length > 0 ? workoutDescription : ''}
                            onChange={(e) => setWorkoutDescription(e.target.value)}></input>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily:"akshar", fontWeight:"200" }}>
                        {newWorkoutExercises.length === 0 ? (
                            <h3>
                                No exercises yet! <br></br> Click the pluss sign to add exercises
                            </h3>
                        ) : (
                            newWorkoutExercises.map((e) => (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'>
                                            <path
                                                d='M2.75 5.5H19.25M2.75 11H19.25M2.75 16.5H19.25'
                                                stroke='#180202'
                                                strokeWidth='2.5'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            />
                                        </svg>
                                    </button>
                                    <ExerciseCard
                                        exercise={e}
                                        deleteBtnActive
                                        onClickDisabled
                                        onRemoveFromWorkout={(ex: Exercise) => {
                                            setNewWorkoutExercises((prevExercises) => prevExercises.filter((e) => e._id !== ex._id));
                                        }}
                                        handleSetsChange={handleSetsChange}
                                        handleRepsChange={handleRepsChange}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                    <Navigation />
                    <div className='floatingBtnContainer'>
                        
                        <button
                            role='button'
                            disabled={newWorkoutExercises.length === 0}
                            tabIndex={0}
                            onClick={() => createWorkout()}
                            className='floatingBtn'
                            style={newWorkoutExercises.length !== 0 ? { backgroundColor: '#246656', color: 'white' } : {backgroundColor: 'gray'}}>
                            SAVE{' '}
                            <svg xmlns='http://www.w3.org/2000/svg' width='21' height='25' viewBox='0 0 21 25' fill='none'>
                                <path
                                    d='M7.87488 16.8437L4.83863 13.2292C4.67503 13.0344 4.45313 12.925 4.22176 12.925C3.99039 12.925 3.76849 13.0344 3.60488 13.2292C3.44128 13.4239 3.34937 13.6881 3.34937 13.9635C3.34937 14.0999 3.37193 14.235 3.41577 14.361C3.45961 14.487 3.52387 14.6015 3.60488 14.6979L7.26238 19.0521C7.60363 19.4583 8.15488 19.4583 8.49613 19.0521L17.7536 8.03124C17.9172 7.83647 18.0091 7.57231 18.0091 7.29686C18.0091 7.02142 17.9172 6.75726 17.7536 6.56249C17.59 6.36772 17.3681 6.2583 17.1368 6.2583C16.9054 6.2583 16.6835 6.36772 16.5199 6.56249L7.87488 16.8437Z'
                                    fill={newWorkoutExercises.length !== 0 ? 'white' : 'darkgray'}
                                />
                            </svg>
                        </button>
                        <button className='plussBtn' style={{ backgroundColor: '#FF6D4D' }} onClick={() => setAddExercisePageIsOpen(true)}>
                            <div style={{marginTop:"2px"}}>+</div>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CreateWorkout;
