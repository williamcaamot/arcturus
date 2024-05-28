import axios from 'axios';

const WorkoutService = (() => {

    const workoutEndpoint = '/api/v1';


    const getWorkouts = async () => {
        return await axios.get(`${workoutEndpoint}/user`);
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