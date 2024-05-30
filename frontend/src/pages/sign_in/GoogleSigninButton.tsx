import {useEffect, useState} from "react";
import googleLogo from "../../../public/images/googleLogo.png";

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

                <button type="submit" className={"signInBoxes googleBtn"}>
                    <img src={googleLogo} alt="Google logo"  className="logo"/>
                    <p>Continue with Google</p>
                </button>
        </form>
    </>

};


export default GoogleSigninButton;