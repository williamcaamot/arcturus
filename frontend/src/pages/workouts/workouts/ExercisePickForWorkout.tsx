import { useEffect, useState } from 'react';
import Navigation from '../../../components/navigation/Navigation';
import WorkoutService from '../../../services/WorkoutService';
import { ExerciseCard } from '../exercises/ExerciseCard';
import { Exercise } from '../exercises/Exercises';
import './styles/exercisePickForWorkout.css';

interface ExercisePickerForWorkoutProps {
    newWorkoutExercises?: Exercise[];
    setNewWorkoutExercises?: (exercises: Exercise[]) => void;
    setAddExercisePageIsOpen: (isOpen: boolean) => void;
}

function ExerciseCardSkeleton() {
    return (
        <>
            <div className={'exerciceCardSkeleton'}></div>
        </>
    );
}

const ExercisePickerForWorkout = ({ newWorkoutExercises, setNewWorkoutExercises, setAddExercisePageIsOpen }: ExercisePickerForWorkoutProps) => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const [tempSearch, setTempSearch] = useState('');
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    async function fetchAllExercises() {
        const exerciseData = await WorkoutService.getExercises();
        setExercises(exerciseData.data);
    }

    async function fetchExercises(term: string) {
        try {
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(`/api/v1/exercises/search/${term}`);
                const data = await result.json();
                if (data.results.length < 50) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setExercises(data.results);
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/exercises`);
                const data = await result.json();
                if (data.length < 50) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setExercises(data);
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false);
        }
    }

    async function loadMore() {
        try {
            console.log(exercises);
            const term = searchTerm;
            setOffset(offset + 50);
            setIsLoading(true);
            let result;
            if (term.length > 1) {
                result = await fetch(`/api/v1/exercises/search/${term}?offset=${offset}`);
                const data = await result.json();
                if (data.results.length < 50) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setExercises([...exercises, ...data.results]);
                setIsLoading(false);
            } else {
                result = await fetch(`/api/v1/exercises?offset=${offset}`);
                const data = await result.json();
                if (data.length < 50) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
                setExercises([...exercises, ...data]);
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false);
        }
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, exercise: Exercise) => {
        if (setNewWorkoutExercises) {
            if (e.target.checked) {
                setNewWorkoutExercises([...(newWorkoutExercises || []), exercise]);
            } else {
                setNewWorkoutExercises((newWorkoutExercises || []).filter((ex) => ex._id !== exercise._id));
            }
        }
    };

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
            fetchExercises(searchTerm);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    useEffect(() => {
        fetchAllExercises();
    }, []);

    return (
        <div className='createWorkoutContainer'>
            <div className='createWorkoutHeader'>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        onClick={() => setAddExercisePageIsOpen(false)}
                        className=''
                        style={{ border: 'none', background: 'none', marginTop: '6px' }}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
                            <rect width='40' height='40' fill='white' />
                            <path
                                d='M8.75 18.75H33.75C34.0815 18.75 34.3995 18.8817 34.6339 19.1161C34.8683 19.3505 35 19.6685 35 20C35 20.3315 34.8683 20.6495 34.6339 20.8839C34.3995 21.1183 34.0815 21.25 33.75 21.25H8.75C8.41848 21.25 8.10054 21.1183 7.86612 20.8839C7.6317 20.6495 7.5 20.3315 7.5 20C7.5 19.6685 7.6317 19.3505 7.86612 19.1161C8.10054 18.8817 8.41848 18.75 8.75 18.75Z'
                                fill='#180202'
                            />
                            <path
                                d='M9.26754 20L19.635 30.365C19.8698 30.5997 20.0016 30.9181 20.0016 31.25C20.0016 31.5819 19.8698 31.9003 19.635 32.135C19.4003 32.3697 19.082 32.5016 18.75 32.5016C18.4181 32.5016 18.0998 32.3697 17.865 32.135L6.61504 20.885C6.49863 20.7689 6.40627 20.6309 6.34326 20.4791C6.28024 20.3272 6.2478 20.1644 6.2478 20C6.2478 19.8356 6.28024 19.6728 6.34326 19.5209C6.40627 19.369 6.49863 19.2311 6.61504 19.115L17.865 7.86499C18.0998 7.63028 18.4181 7.49841 18.75 7.49841C19.082 7.49841 19.4003 7.63028 19.635 7.86499C19.8698 8.09971 20.0016 8.41805 20.0016 8.74999C20.0016 9.08193 19.8698 9.40028 19.635 9.63499L9.26754 20Z'
                                fill='#180202'
                            />
                        </svg>
                    </button>
                    <div className={'exerciseSearchContainer'}>
                        <input
                            type={'text'}
                            value={searchTerm}
                            placeholder={'Search for exercises...'}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                    </div>
                </div>
                <div className='createWorkoutHeaderTitle'></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exercises &&
                    exercises.map((exercise) => (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} >
                            <label className='checkbox'>
                                <input
                                    type='checkbox'
                                    id={exercise._id}
                                    name={exercise.Exercise_Name}
                                    value={exercise._id}
                                    onChange={(event) => handleCheckboxChange(event, exercise)}
                                    checked={newWorkoutExercises?.some((ex) => ex._id === exercise._id)}
                                />
                                <span className='checkmark'></span>
                            </label>
                            <ExerciseCard exercise={exercise} onClickDisabled/>
                        </div>
                    ))}
                {hasMore && (
                    <div style={{ padding: '20px' }}>
                        <button
                            className={'loadMoreButton'}
                            onClick={() => {
                                loadMore();
                            }}>
                            Load more
                        </button>
                    </div>
                )}
                {isLoading && (
                    <>
                        <ExerciseCardSkeleton />
                        <ExerciseCardSkeleton />
                        <ExerciseCardSkeleton />
                        <ExerciseCardSkeleton />
                    </>
                )}
            </div>
            <Navigation />
            <div className='floatingBtnContainer'>
                <div>
                    {' '}
                    {isLoading && (
                        <>
                            <ExerciseCardSkeleton />
                            <ExerciseCardSkeleton />
                            <ExerciseCardSkeleton />
                            <ExerciseCardSkeleton />
                        </>
                    )}
                </div>
                <button className='plussBtn' style={{ backgroundColor: '#246656' }} onClick={() => setAddExercisePageIsOpen(false)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='31' height='22' viewBox='0 0 31 22' fill='none'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M29.4212 1.45352C29.8313 1.86373 30.0617 2.42003 30.0617 3.00008C30.0617 3.58013 29.8313 4.13642 29.4212 4.54664L13.0252 20.9427C12.8085 21.1594 12.5512 21.3313 12.2681 21.4486C11.985 21.5659 11.6815 21.6263 11.3751 21.6263C11.0686 21.6263 10.7651 21.5659 10.482 21.4486C10.1989 21.3313 9.94163 21.1594 9.72496 20.9427L1.57871 12.7979C1.36978 12.5961 1.20313 12.3547 1.08848 12.0878C0.97384 11.821 0.913495 11.5339 0.910971 11.2435C0.908447 10.953 0.963795 10.665 1.07378 10.3961C1.18377 10.1273 1.3462 9.88304 1.55159 9.67765C1.75698 9.47226 2.00122 9.30983 2.27006 9.19984C2.53889 9.08986 2.82694 9.03451 3.1174 9.03703C3.40785 9.03955 3.6949 9.0999 3.96178 9.21455C4.22866 9.32919 4.47004 9.49584 4.67183 9.70477L11.3743 16.4073L26.3266 1.45352C26.5298 1.25024 26.771 1.08898 27.0365 0.978964C27.302 0.868945 27.5865 0.812317 27.8739 0.812317C28.1613 0.812317 28.4459 0.868945 28.7114 0.978964C28.9769 1.08898 29.2181 1.25024 29.4212 1.45352Z'
                            fill='#F2F2F2'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ExercisePickerForWorkout;
