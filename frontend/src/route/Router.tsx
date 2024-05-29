import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignIn from "../pages/sign_in/SignIn";
import Statistics from "../pages/statistics/Statistics";
import Profile from "../pages/profile/MyProfile";
import PersonalInfo from "../pages/sign_in/fill_personal_info/FillPersonalInfo";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/fillpersonalinfo" element={<PersonalInfo />} /> // Fixed: Wrapped PersonalInfo component in curly braces
                <Route path="/Statistics" element={<Statistics />} />
                <Route path="/MyProfile" element={<Profile />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;