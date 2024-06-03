import axios from 'axios';

const WorkoutService = (() => {

    const workoutEndpoint = '/api/v1';


    const getWorkouts = async () => {
        return await axios.get(`${workoutEndpoint}/user`);
    };

    const getWorkout = async (id: string) => {
        return await axios.get(`${workoutEndpoint}/workouts/${id}`);
    };

    const getExercises = async () => {
        return await axios.get(`${workoutEndpoint}/exercises?limit=20&offset=20`);
    }


    return {
        getWorkouts,
        getWorkout,
        getExercises
    };

    })();

    export default WorkoutService;