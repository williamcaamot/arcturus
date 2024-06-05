import axios from 'axios';

const WorkoutService = (() => {

    const workoutEndpoint = '/api/v1';


    const getWorkouts = async () => {
        return await axios.get(`${workoutEndpoint}/workouts`);
    };

    const getWorkoutById = async (id: string) => {
        return await axios.get(`${workoutEndpoint}/workouts/${id}`);
    };

    const getExercises = async () => {
        return await axios.get(`${workoutEndpoint}/exercises`);
    }

    const getExerciseById = async (id: string) => {
        return await axios.get(`${workoutEndpoint}/exercises/${id}`);
    }


    return {
        getWorkouts,
        getWorkoutById,
        getExercises,
        getExerciseById
    };

    })();

    export default WorkoutService;