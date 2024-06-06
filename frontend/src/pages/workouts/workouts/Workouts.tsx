import './styles/workouts.css';
import { useState, useEffect } from 'react';
import { WorkoutCard } from "./WorkoutCard";


export interface Workout {
    _id: string;
    workoutName: string;
    exercises: Array<Exercise>;
    image: string;
    created_by: string;
}

export interface Exercise {
    exerciseId: string;
    Exercise_Name: string;
    Exercise_Image: string;
    muscle_gp: string;
    Equipment: string;
    Rating: number;
    Description: string;
    minSets: number;
    maxSets: number;
    minReps: number;
    maxReps: number;
}

const Workout = () => {
    
    const [workout, setWorkouts] = useState<Workout[]>([]);
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
    }, [searchTerm]);

    useEffect(() => {
        if (searchTerm.includes(tempSearch)) {
            fetchWorkouts(searchTerm);
        }
    }, [tempSearch]);



        async function fetchWorkouts(term: string) {
            try {
                setIsLoading(true);
                let result;
                if (term.length > 1) {
                    result = await fetch(`/api/v1/workouts/search/${term}`);
                    const data = await result.json();
                    if (data.results.length < 50) {
                        setHasMore(false);
                    } else {
                        setHasMore(true);
                    }
                    setWorkouts(data.results);
                    setIsLoading(false);
                } else {
                    result = await fetch(`/api/v1/workouts`);
                    const data = await result.json();
                    if (data.length < 50) {
                        setHasMore(false);
                    } else {
                        setHasMore(true);
                    }
                    setWorkouts(data);
                    setIsLoading(false);
                }
            } catch (e) {
                setIsLoading(false);
            }
        }

         async function loadMore() {
             try {
                 const term = searchTerm;
                 setOffset(offset + 50);
                 setIsLoading(true);
                 let result;
                 if (term.length > 1) {
                     result = await fetch(
                         `/api/v1/exercises/search/${term}?offset=${offset}`
                     );
                     const data = await result.json();
                     if (data.results.length < 50) {
                         setHasMore(false);
                     } else {
                         setHasMore(true);
                     }
                     setWorkouts([...workout, ...data.results]);
                     setIsLoading(false);
                 } else {
                     result = await fetch(`/api/v1/exercises?offset=${offset}`);
                     const data = await result.json();
                     if (data.length < 50) {
                         setHasMore(false);
                     } else {
                         setHasMore(true);
                     }
                     setWorkouts([...workout, ...data]);
                     setIsLoading(false);
                 }
             } catch (e) {
                 setIsLoading(false);
             }
         }

         useEffect(() => {
             fetchWorkouts(searchTerm);
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
                        <WorkoutCard workout={w} />
                    ))}
                {workout.length === 0 && !isLoading && (
                    <h2 style={{ fontFamily: "Koulen" }}>No results!</h2>
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
