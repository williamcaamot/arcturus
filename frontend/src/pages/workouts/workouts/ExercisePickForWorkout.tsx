import { useNavigate } from "react-router-dom";
import Navigation from "../../../components/navigation/Navigation";
import { ExerciseCard } from "../exercises/ExerciseCard";
import { Exercise } from "../exercises/Exercises";

interface ExercisePickerForWorkoutProps {
    exercises: Exercise[];
    newWorkoutExercises: Exercise[];
    setNewWorkoutExercises: (exercises: Exercise[]) => void;
}
    

const ExercisePickerForWorkout = ({exercises, newWorkoutExercises, setNewWorkoutExercises} : ExercisePickerForWorkoutProps) => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

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
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exercises.map((e) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {/* <input type='checkbox' id={e.id} name={e.Exercise_Name} value={e.id} /> */}
                        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
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
        </div>
    );
};

export default ExercisePickerForWorkout;
