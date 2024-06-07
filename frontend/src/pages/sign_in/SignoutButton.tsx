import {useEffect, useState} from "react";

const SignoutButton = () => {
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
        <form action={"/api/v1/auth/signout"} method={"POST"}>
    <input type="hidden" name="csrfToken"
    value={csrfToken} />

    <button type="submit" className={"signInBoxes signOutBtn"}>
        <p style={{fontFamily:"koulen"}}>Sign Out</p>
    </button>
    </form>
    </>

};


export default SignoutButton;