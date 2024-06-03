import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/sign_in/SignIn";
import LogIn from "../pages/sign_in/log_in/LogIn";
import Statistics from "../pages/statistics/Statistics";
import Profile from "../pages/profile/MyProfile";
import WorkoutsIndex from "../pages/workouts/WorkoutsIndex";
import PersonalInfo from "../pages/sign_in/fill_personal_info/FillPersonalInfo";
import ExerciseDetails from "../pages/workouts/exercises/ExerciseDetails";
import WorkoutDetails from "../pages/workouts/workouts/WorkoutDetails";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/fill-personal-info" element={<PersonalInfo />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/workouts" element={<WorkoutsIndex />} />
                <Route path="/exercise-details" element={<ExerciseDetails />} />
                <Route path="/exercise-details/:id" element={<ExerciseDetails />} />
                <Route path="/workout-details" element={<WorkoutDetails />} />
                <Route path="/my-profile" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;