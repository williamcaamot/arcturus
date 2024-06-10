import { useNavigate } from 'react-router-dom';
import Badge from '../../../components/Badge.tsx';
import { Exercise } from './Exercises.tsx';
import ExercisePlaceholderImg from '../../../../public/images/No-Image-Available.png';

export const ExerciseCard = ({
    exercise,
    onClickDisabled,
    deleteBtnActive,
    onRemoveFromWorkout,
    handleSetsChange,
    handleRepsChange,
}: {
    exercise: Exercise;
    onClickDisabled?: boolean;
    deleteBtnActive?: boolean;
    onRemoveFromWorkout?: (exercise: Exercise) => void;
    handleSetsChange?: (e: React.ChangeEvent<HTMLSelectElement>, exercise: Exercise) => void;
    handleRepsChange?: (e: React.ChangeEvent<HTMLSelectElement>, exercise: Exercise) => void;
}) => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div
            className='exerciseCardContainer'
            role='button'
            tabIndex={0}
            onClick={() => !onClickDisabled && navigateTo(`/exercise-details/${exercise._id}`)}
            style={{ cursor: 'pointer' }}>
            <div className='cardContainerLeft'>
                {exercise.Exercise_Image && exercise.Exercise_Image.length > 0 ? (
                    <img src={exercise.Exercise_Image} alt='exercise' className='exerciseCardImg' />
                ) : (
                    <img src={ExercisePlaceholderImg} alt='exercise' className='exerciseCardImg' />
                )}
            </div>
            <div className='exerciseCardContainerRight'>
                <div
                    className={'exerciseCardTitle'}
                    style={deleteBtnActive ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' } : {}}>
                    <h3>{exercise.Exercise_Name}</h3>
                    {deleteBtnActive && onRemoveFromWorkout && (
                        <button style={{ border: 'none', background: 'none' }} onClick={() => onRemoveFromWorkout(exercise)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                                <path
                                    d='M11.6666 9.16667V14.1667M8.33325 9.16667V14.1667M4.99992 5.83333V15.8333C4.99992 16.2754 5.17551 16.6993 5.48807 17.0118C5.80063 17.3244 6.22456 17.5 6.66659 17.5H13.3333C13.7753 17.5 14.1992 17.3244 14.5118 17.0118C14.8243 16.6993 14.9999 16.2754 14.9999 15.8333V5.83333M3.33325 5.83333H16.6666M5.83325 5.83333L7.49992 2.5H12.4999L14.1666 5.83333'
                                    stroke='#BBBBBB'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </button>
                    )}
                </div>
                {deleteBtnActive && onRemoveFromWorkout && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className='setRepSelect'>
                        <label htmlFor='setsSelect'>SETS:</label>
                        <select value={exercise.sets} id='setsSelect' onChange={(e) => handleSetsChange && handleSetsChange(e, exercise)}>
                            {[...Array(25)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <label htmlFor='repsSelect'>REPS:</label>
                        <select value={exercise.reps} id='repsSelect' onChange={(e) => handleRepsChange && handleRepsChange(e, exercise)}>
                            {[...Array(25)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <div className='exerciseCardDetails'>
                    {/*<span>
                        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                            <g clip-path='url(#clip0_420_1728)'>
                                <path
                                    d='M14.3108 6.81365C14.4822 6.81368 14.6475 6.87658 14.7756 6.99043C14.9036 7.10428 14.9854 7.26116 15.0054 7.43131L15.0103 7.51315V11.0106C15.0103 11.7285 14.7344 12.4189 14.2397 12.939C13.7449 13.4591 13.0692 13.7692 12.3523 13.8051L12.2124 13.8086H5.99175L5.97776 14.0989L5.95398 14.4619C5.9351 14.704 5.70776 14.8516 5.5126 14.7487L5.29855 14.634L5.04674 14.492L4.90824 14.4102L4.60745 14.2262C4.55383 14.1923 4.50044 14.158 4.44727 14.1234L4.1234 13.9065L3.97651 13.8037L3.7128 13.6127L3.49246 13.4449C3.46132 13.4208 3.43031 13.3965 3.39943 13.3721C3.23435 13.2406 3.24204 12.9762 3.41551 12.8391L3.61137 12.6873L3.8492 12.511L4.129 12.3138L4.44797 12.1004L4.77114 11.8969L5.06212 11.7227L5.31744 11.5793L5.53219 11.4639C5.72455 11.3639 5.9316 11.4891 5.95048 11.7157L5.96797 11.9584L5.98476 12.2487L5.99175 12.4096H12.2124C12.5653 12.4097 12.9053 12.2764 13.1641 12.0364C13.4229 11.7964 13.5814 11.4675 13.6079 11.1155L13.6114 11.0106V7.51315C13.6114 7.32763 13.685 7.14971 13.8162 7.01853C13.9474 6.88735 14.1253 6.81365 14.3108 6.81365ZM11.9172 3.07485L12.1312 3.19027L12.383 3.33227L12.5215 3.41411L12.8223 3.59808L12.9825 3.7009L13.3064 3.91775L13.4533 4.02057L13.717 4.21153L13.9373 4.37941L14.0303 4.45216C14.1954 4.58367 14.1877 4.84807 14.0143 4.98518L13.8184 5.13697L13.5806 5.31324L13.3008 5.5105L12.9818 5.72384L12.6586 5.92739L12.3676 6.10157L12.1123 6.24497L11.8976 6.36038C11.7052 6.46041 11.4975 6.3352 11.4793 6.10856L11.4618 5.86584L11.445 5.57555C11.4424 5.52193 11.4401 5.4683 11.438 5.41467H5.21741C4.84638 5.41467 4.49054 5.56206 4.22818 5.82442C3.96582 6.08678 3.81842 6.44262 3.81842 6.81365V10.3111C3.81842 10.4966 3.74473 10.6746 3.61355 10.8057C3.48237 10.9369 3.30445 11.0106 3.11893 11.0106C2.93341 11.0106 2.75549 10.9369 2.62431 10.8057C2.49313 10.6746 2.41943 10.4966 2.41943 10.3111V6.81365C2.41943 6.07158 2.71422 5.35991 3.23894 4.83518C3.76367 4.31046 4.47534 4.01568 5.21741 4.01568H11.438L11.452 3.72538L11.4674 3.47357L11.4758 3.36235C11.4947 3.12032 11.722 2.97203 11.9172 3.07485Z'
                                    fill='#180202'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_420_1728'>
                                    <rect width='16.7879' height='16.7879' fill='white' transform='translate(0.321289 0.518188)' />
                                </clipPath>
                            </defs>
                        </svg>
                        <p style={{ fontFamily: 'Akshar', fontSize: '1em' }}>Previously: 3 x 12 x 70kg</p>
                    </span>*/}
                </div>
                <div className='exerciseCardTags'>
                    {exercise.muscle_gp && <Badge label={exercise.muscle_gp} />}
                    {exercise.Equipment && <Badge label={exercise.Equipment} />}
                    {exercise.Description && <Badge label={exercise.Description} />}
                </div>
            </div>
        </div>
    );
};
