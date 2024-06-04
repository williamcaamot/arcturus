import './styles/exercise.css';
import {useEffect, useState} from 'react';
import {ExerciseCard} from "./ExerciseCard.tsx";


export interface Exercise {
    id: string;
    Exercise_Name: string;
    Description_URL: string;
    Exercise_Image: string;
    muscle_gp_sdetails: string;
    muscle_gp: string;
    equipment_details: string;
    Equipment: string;
    Rating: string;
    Description: string;
}

const Exercises = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true)


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
            fetchExercises(searchTerm);
        }
    }, [tempSearch]);


    async function fetchExercises(term: string) {
        try {
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(`/api/v1/exercises/search/${term}`)
                const data = await result.json()
                if (data.results.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setExercises(data.results)
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/exercises`)
                const data = await result.json()
                console.log(data.length)
                if (data.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setExercises(data)
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false)
        }

    }

    async function loadMore() {
        try {
            console.log(exercises)
            const term = searchTerm;
            setOffset(offset + 50);
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(`/api/v1/exercises/search/${term}?offset=${offset}`)
                const data = await result.json()
                console.log(data)
                if (data.results.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setExercises([...exercises, ...data.results])
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/exercises?offset=${offset}`)
                const data = await result.json()
                console.log(data)
                if (data.length < 50){
                    (setHasMore(false));
                } else {
                    setHasMore(true);
                }
                setExercises([...exercises, ...data])
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchExercises(searchTerm);
    }, []);


    return (
        <>
            <div className={"exerciseSearchContainer"}>

                <input type={"text"} value={searchTerm} placeholder={"Search for exercises..."}
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}

                />

            </div>

            <>
                <div className='exerciseContainer'>
                    {exercises.length > 0 &&
                        exercises.map((e) => (
                            <ExerciseCard exercise={e}/>
                        ))}
                    {exercises.length === 0 && !isLoading && <h2 style={{fontFamily: "Koulen"}}>No results!</h2>}
                </div>
            </>
            {isLoading && <>
                <ExerciseCardSkeleton/><ExerciseCardSkeleton/><ExerciseCardSkeleton/><ExerciseCardSkeleton/></>}

            {hasMore &&
                <div style={{padding: "20px"}}>
                    <button className={"loadMoreButton"} onClick={() => {
                        loadMore()
                    }}>Load more
                    </button>
                </div>
            }

        </>
    )
}

export default Exercises;


function ExerciseCardSkeleton() {
    return <>
        <div className={"exerciceCardSkeleton"}>


        </div>


    </>
}
