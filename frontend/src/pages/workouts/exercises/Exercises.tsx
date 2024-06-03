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

    async function fetchExercises(term: string) {
        setIsLoading(true);
        let result;
        if (term.length > 1) {
            result = await fetch(`/api/v1/exercises/search/${term}`)
            const data = await result.json()
            setExercises(data.results)
            setIsLoading(false);
        } else {
            result = await fetch(`/api/v1/exercises`)
            const data = await result.json()
            setExercises(data)
            setIsLoading(false);
        }

    }

    useEffect(() => {
        console.log("running effect")
        fetchExercises(searchTerm);
    }, [searchTerm]);


    return (
        <>
            <div className={"exerciseSearchContainer"}>

                <input type={"text"} value={searchTerm} placeholder={"Search for exercises..."}
                       onChange={(e) => {
                           setSearchTerm(e.target.value)
                       }}

                />

            </div>


            {isLoading ? <><ExerciseCardSkeleton/><ExerciseCardSkeleton/><ExerciseCardSkeleton/><ExerciseCardSkeleton/></> :
                <>
                    <div className='exerciseContainer'>
                        {exercises.length > 0 ?
                            exercises.map((e) => (
                                <ExerciseCard exercise={e}/>
                            )) : <h2 style={{fontFamily:"Koulen"}} >No results!</h2>}

                    </div>
                </>


            }

        </>
    )
}

export default Exercises;


function ExerciseCardSkeleton(){
    return<>
        <div className={"exerciceCardSkeleton"}>



        </div>


    </>
}
