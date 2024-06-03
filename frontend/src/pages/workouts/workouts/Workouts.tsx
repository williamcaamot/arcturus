import './styles/workouts.css';
import Badge from '../../../components/Badge';
import {useNavigate} from "react-router-dom";

const WorkoutCard = () => {

    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className='workoutCardContainer' role='button' tabIndex={0} onClick={() => navigateTo('/WorkoutDetails')} style={{cursor: 'pointer'}}>
            <div className='cardContainerLeft'>
                <img src='https://via.placeholder.com/150' alt='workout' className='workoutCardImg' />
            </div>
            <div className='workoutCardContainerRight'>
                <div className='workoutCardTitle'>
                    <h3>Upper body workout</h3>
                </div>
                <div className='workoutCardDetails'>
                    <span>
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
                        <p>14 total sets</p>
                    </span>
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox='0 0 15 14' fill='none'>
                            <g clip-path='url(#clip0_420_1726)'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M5.77189 0.271534C7.09249 -0.0870356 8.4911 -0.0335947 9.78048 0.424701C11.0699 0.882997 12.1885 1.72427 12.9865 2.83588V1.50544C12.9865 1.33848 13.0528 1.17835 13.1709 1.06029C13.2889 0.942224 13.4491 0.875897 13.616 0.875897C13.783 0.875897 13.9431 0.942224 14.0612 1.06029C14.1792 1.17835 14.2456 1.33848 14.2456 1.50544V5.07287H10.6782C10.5112 5.07287 10.3511 5.00654 10.233 4.88848C10.1149 4.77041 10.0486 4.61029 10.0486 4.44332C10.0486 4.27636 10.1149 4.11623 10.233 3.99817C10.3511 3.8801 10.5112 3.81378 10.6782 3.81378H12.1278C11.4703 2.78509 10.4867 2.00666 9.3345 1.60301C8.18229 1.19936 6.92798 1.19382 5.77225 1.58728C4.61651 1.98074 3.62613 2.75046 2.95955 3.7733C2.29297 4.79614 1.98871 6.01299 2.09543 7.2292C2.20216 8.4454 2.71371 9.59066 3.54825 10.4818C4.38279 11.3729 5.49209 11.9583 6.69869 12.1445C7.90529 12.3307 9.13946 12.1067 10.2038 11.5086C11.2681 10.9104 12.101 9.97259 12.5693 8.8451C12.5997 8.76694 12.6454 8.69563 12.7038 8.63537C12.7621 8.57512 12.8319 8.52713 12.909 8.49422C12.9862 8.46131 13.0691 8.44415 13.153 8.44375C13.2369 8.44334 13.32 8.4597 13.3974 8.49185C13.4749 8.52401 13.5451 8.57133 13.6041 8.63101C13.663 8.6907 13.7094 8.76156 13.7405 8.83943C13.7717 8.9173 13.787 9.00061 13.7855 9.08447C13.784 9.16833 13.7658 9.25104 13.7319 9.32775C13.2944 10.3808 12.5959 11.3051 11.7024 12.0135C10.8088 12.7219 9.74958 13.1911 8.62451 13.3769C7.49943 13.5627 6.34558 13.4589 5.27172 13.0753C4.19786 12.6917 3.23937 12.041 2.4866 11.1845C1.73383 10.3279 1.21157 9.29382 0.969052 8.1796C0.726537 7.06537 0.771756 5.90775 1.10045 4.81584C1.42914 3.72393 2.03047 2.7337 2.84776 1.93851C3.66506 1.14331 4.67139 0.570179 5.77189 0.271534Z'
                                    fill='#180202'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_420_1726'>
                                    <rect width='13.4303' height='13.4303' fill='white' transform='translate(0.81543 0.0363617)' />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>120 total reps</p>
                    </span>
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                            <g clip-path='url(#clip0_420_1732)'>
                                <path
                                    d='M7.97381 1.68661C11.644 1.68661 14.619 4.66167 14.619 8.33182C14.619 12.002 11.644 14.977 7.97381 14.977C4.30367 14.977 1.32861 12.002 1.32861 8.33182C1.32861 4.66167 4.30367 1.68661 7.97381 1.68661ZM7.97381 3.01566C6.56388 3.01566 5.21169 3.57575 4.21472 4.57272C3.21775 5.5697 2.65765 6.92188 2.65765 8.33182C2.65765 9.74175 3.21775 11.0939 4.21472 12.0909C5.21169 13.0879 6.56388 13.648 7.97381 13.648C9.38375 13.648 10.7359 13.0879 11.7329 12.0909C12.7299 11.0939 13.29 9.74175 13.29 8.33182C13.29 6.92188 12.7299 5.5697 11.7329 4.57272C10.7359 3.57575 9.38375 3.01566 7.97381 3.01566ZM7.97381 4.3447C8.13658 4.34472 8.29367 4.40447 8.4153 4.51263C8.53693 4.62079 8.61464 4.76982 8.63368 4.93147L8.63833 5.00922V8.0567L10.4372 9.85556C10.5564 9.97515 10.6256 10.1356 10.6307 10.3044C10.6359 10.4731 10.5766 10.6375 10.4649 10.7641C10.3533 10.8908 10.1976 10.9702 10.0295 10.9862C9.86145 11.0022 9.69359 10.9536 9.56002 10.8503L9.49756 10.7952L7.504 8.80163C7.40072 8.69826 7.33439 8.56373 7.31527 8.41887L7.30929 8.33182V5.00922C7.30929 4.83297 7.37931 4.66395 7.50393 4.53933C7.62855 4.41471 7.79757 4.3447 7.97381 4.3447Z'
                                    fill='#180202'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_420_1732'>
                                    <rect width='15.9485' height='15.9485' fill='white' transform='translate(0 0.357574)' />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>45 minutes</p>
                    </span>
                </div>
                <div className='workoutCardTags'>
                    <Badge label='Strength' />
                    <Badge label='Advanced' />
                </div>
            </div>
        </div>
    );
};

const Workouts = () => {

    return (
        <div className='workoutsContainer'>
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
        </div>
    );
};

export default Workouts;
