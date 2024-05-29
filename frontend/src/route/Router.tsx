import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/sign_in/SignIn";
import Statistics from "../pages/statistics/Statistics";
import Profile from "../pages/profile/MyProfile";
import WorkoutsIndex from "../pages/workouts/WorkoutsIndex";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Statistics" element={<Statistics />} />
                <Route path="/Workouts" element={<WorkoutsIndex />} />
                <Route path="/MyProfile" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;