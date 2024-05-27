import axios from 'axios';

const WorkoutService = (() => {

    const workoutEndpoint = '.....';


    const getWorkouts = async () => {
        return await axios.get(`${workoutEndpoint}/workouts`);
    };

    const getWorkout = async (id: string) => {
        return await axios.get(`${workoutEndpoint}/workouts/${id}`);
    };


    return {
        getWorkouts,
        getWorkout
    };

    })();

    export default WorkoutService;