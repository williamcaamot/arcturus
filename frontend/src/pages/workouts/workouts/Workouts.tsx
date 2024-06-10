import './styles/workouts.css';
import { useState, useEffect } from 'react';
import { WorkoutCard } from "./WorkoutCard";
import { Exercise } from '../exercises/Exercises';


export interface Workout {
    _id: string;
    workoutName: string;
    exercises: Array<Exercise>;
    image: string;
    created_by: string;
    description: string;
}

// export interface Exercise {
//     exerciseId: string;
//     Exercise_Name: string;
//     Exercise_Image: string;
//     muscle_gp: string;
//     Equipment: string;
//     Rating: number;
//     Description: string;
//     minSets: number;
//     maxSets: number;
//     minReps: number;
//     maxReps: number;
// }

const Workout = () => {
    
    const [workout, setWorkout] = useState<Workout[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const [tempSearch, setTempSearch] = useState("");
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    useEffect(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const id = setTimeout(() => {
            setTempSearch(searchTerm);
        }, 200);
        setTimeoutId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    useEffect(() => {
        if (searchTerm.includes(tempSearch)) {
            fetchWorkouts(searchTerm);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempSearch]);

    async function fetchWorkouts(term: string) {
        try {
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(`/api/v1/workouts/search/${term}`)
                const data = await result.json()
                if (data.results.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setWorkout(data.results)
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/workouts`)
                const data = await result.json()
                if (data.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setWorkout(data)
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false)
        }
    }

    async function loadMore() {
        try {
            const term = searchTerm;
            const newOffset = offset + 10; // Change this to 10 to fetch 10 workouts at a time
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(
                    `/api/v1/workouts/search/${term}?offset=${newOffset}`
                );
                const data = await result.json();
                console.log(data);
                if (data.results.length < 10) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setWorkout([...workout, ...data.results]);
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/workouts?offset=${newOffset}`);
                const data = await result.json();
                if (data.length < 10) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setWorkout([...workout, ...data]);
                setIsLoading(false);
            }
            setOffset(newOffset); // Update the offset state after the API request
        } catch (e) {
            setIsLoading(false);
        }
    }

         useEffect(() => {
             fetchWorkouts(searchTerm);
         // eslint-disable-next-line react-hooks/exhaustive-deps
         }, []);

    return (
        <>
            <div className={"workoutSearchContainer"}>
                <input
                    type={"text"}
                    value={searchTerm}
                    placeholder={"Search for workouts..."}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>

            <div className="workoutContainer">
                {workout.length > 0 &&
                    workout.map((w) => (
                        <WorkoutCard workout={w} key={w._id}/>
                    ))}
                {workout.length === 0 && !isLoading && (
                    <h2 style={{ fontFamily: "Koulen" }}>No results! Do you have any workouts yet?</h2>
                )}
            </div>

            {isLoading && (
                <>
                    <WorkoutCardSkeleton />
                    <WorkoutCardSkeleton />
                    <WorkoutCardSkeleton />
                    <WorkoutCardSkeleton />
                </>
            )}

            {hasMore && (
                <div style={{ padding: "20px" }}>
                    <button
                        className={"loadMoreButton"}
                        onClick={() => {
                            loadMore();
                        }}
                    >
                        Load more
                    </button>
                </div>
            )}
        </>
    );
};



export default Workout;



function WorkoutCardSkeleton() {
    return (
        <>
            <div className={"exerciceCardSkeleton"}></div>
        </>
    );
}