import Navigation from '../../components/navigation/Navigation';
import './styles/landingPage.css';
import {useEffect} from "react";

const LandingPage = () => {
    const workouts = [
        {
            id: 1,
            title: 'Workout 1',
            excersises: '4',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 2,
            title: 'Workout 2',
            excersises: '2',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 3,
            title: 'Workout 3',
            excersises: '7',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 4,
            title: 'Workout 4',
            excersises: '8',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 5,
            title: 'Workout 5',
            excersises: '4',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 6,
            title: 'Workout 6',
            excersises: '8',
            image: 'https://via.placeholder.com/200',
        },
    ];

    const exercises = [
        {
            id: 1,
            title: 'Exercise 1',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 2,
            title: 'Exercise 2',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 3,
            title: 'Exercise 3',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 4,
            title: 'Exercise 4',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 5,
            title: 'Exercise 5',
            image: 'https://via.placeholder.com/200',
        },
        {
            id: 6,
            title: 'Exercise 6',
            image: 'https://via.placeholder.com/200',
        },
    ];


    async function tryFetch(){
        try{
            const res = await fetch("/api/v1/user");
            const data = await res.json();
            console.log(data);
        }catch (e) {

        }

    }

    useEffect(() => {
        tryFetch()
    }, []);


    return (
        <div className='landingContainer'>
            <div className='landingWelcomeCont'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='Avatar' className='landingWelcomeProfilePicture' />
                <h2 style={{ margin: 0 }}>Welcome Darwin</h2>
            </div>
            <div className='landingStatsCont'>
                <img src='/images/statsCircle.png' alt='statsPlaceholder' className='tmpStatsImg' />
                <div className='landingPeriodCheckCont'>
                    <div>
                        <input type='checkbox' id='lastWeek' className='landingSearchBar' />
                        <label htmlFor='lastWeek'>Last week</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastMonth' className='landingSearchBar' />
                        <label htmlFor='lastMonth'>Last Month</label>
                    </div>
                    <div>
                        <input type='checkbox' id='last3Months' className='landingSearchBar' />
                        <label htmlFor='last3Months'>Last 3 months</label>
                    </div>
                    <div>
                        <input type='checkbox' id='lastYear' className='landingSearchBar' />
                        <label htmlFor='lastYear'>Last year</label>
                    </div>
                </div>
            </div>
            <div className='landingAvgStatsCont'>
                <h4 style={{ margin: 0 }}>Average stats</h4>
                <div className='landingAvgStatsInnerCont'>
                    <div className='avgStatsLeft'>
                        <span>
                            <p style={{ margin: 0 }}>Duration</p>
                            <p style={{ margin: 0 }}>67min</p>
                        </span>
                        <span>
                            <p style={{ margin: 0 }}>Exercises</p>
                            <p style={{ margin: 0 }}>6</p>
                        </span>
                        <span>
                            <p style={{ margin: 0 }}>Weight lifted</p>
                            <p style={{ margin: 0 }}>6897kg</p>
                        </span>
                    </div>
                    <hr className='dividerDiv'></hr>
                    <div className='avgStatsRight'>
                        <h3 style={{ margin: 0 }}>44 day streak 🔥</h3>
                    </div>
                </div>
            </div>
            <div className='landingYourWorkoutCont'>
                <h4 style={{ margin: 0 }}>Your workouts</h4>
                <div className='landingYourWorkoutInnerCont'>
                    {workouts.map((workout) => (
                        <div key={workout.id} className='landingWorkoutCard'>
                            <img src={workout.image} alt={workout.title} className='landingWorkoutCardImg' />
                            <span>
                                <h5 style={{ margin: 0 }}>{workout.title}</h5>
                                <p style={{ margin: 0 }}>Exercises: {workout.excersises}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='landingExercisesCont'>
            <h4 style={{ margin: 0 }}>Explore exercises</h4>    
                <div className='landingYourWorkoutInnerCont'>
                    {exercises.map((excersise) => (
                        <div key={excersise.id} className='landingWorkoutCard'>
                            <img src={excersise.image} alt={excersise.title} className='landingWorkoutCardImg' />
                            <span>
                                <h5 style={{ margin: 0 }}>{excersise.title}</h5>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default LandingPage;
