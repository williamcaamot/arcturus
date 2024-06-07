/* import Navigation from './components/navigation/Navigation.tsx'*/
import Router from './route/Router'
import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState(null);

    async function fetchUser() {
        try {
            const res = await fetch("/api/v1/user");
            if (res.status === 401) {
                setUser(undefined);
            } else {
                const {user} = await res.json();
                setUser(user);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <Router/>
                {/* <Navigation/> */} {/* Have to have it in each file as there is some pages not needing it */}
            </UserContext.Provider>
        </div>
    )
}

export default App
