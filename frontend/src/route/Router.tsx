import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/sign_in/SignIn";
import LogIn from "../pages/sign_in/log_in/LogIn";
import Statistics from "../pages/statistics/Statistics";
import Profile from "../pages/profile/MyProfile";
import PersonalInfo from "../pages/sign_in/fill_personal_info/FillPersonalInfo";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/landingPage" element={<LandingPage />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/fillpersonalinfo" element={<PersonalInfo />} /> 
                <Route path="/Statistics" element={<Statistics />} />
                <Route path="/MyProfile" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;