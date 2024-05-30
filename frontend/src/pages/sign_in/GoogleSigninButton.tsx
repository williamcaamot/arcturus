import {useEffect, useState} from "react";

const GoogleSigninButton = () => {
    const [csrfToken, setCsrfToken] = useState()

    async function fetchCsrfToken(){
        const res = await fetch("/api/v1/auth/csrf")
        const {csrfToken} = await res.json();
        setCsrfToken(csrfToken);
    }

    useEffect(() => {
        fetchCsrfToken()
    }, []);

    return <>
        <form action={"/api/v1/auth/signin/google"} method={"POST"}>
            <input type="hidden" name="csrfToken"
                   value={csrfToken} />
                <button type="submit">
                        Sign in with google (this button works)
                </button>
        </form>
    </>

};


export default GoogleSigninButton;