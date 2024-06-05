import './styles/workouts.css';

import { WorkoutCard } from "./WorkoutCard";
import { useState, useEffect } from 'react';



export interface Exercise {
    exerciseId: string;
    minSets: number;
    maxSets: number;
    minReps: number;
    maxReps: number;
}

export interface Workout {
    _id: string;
    workoutName: string;
    exercises: Array<Exercise>;
    picture: string;
    created_by: string;
}


const Workout = () => {
    
    const [workout, setWorkouts] = useState<Workout[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

   /*  const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    }; */


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
