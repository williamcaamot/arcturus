import {useEffect, useState} from "react";
import facebookLogo from "../../../public/images/facebookLogo.png";


const FacebookSigninButton = () => {
    const [csrfToken, setCsrfToken] = useState()

    async function fetchCsrfToken() {
        const res = await fetch("/api/v1/auth/csrf")
        const {csrfToken} = await res.json();
        setCsrfToken(csrfToken);
    }

    useEffect(() => {
        fetchCsrfToken()
    }, []);

    return <>
        {/*<form action={"/api/v1/auth/signin/facebook"} method={"POST"}>*/}
            <input type="hidden" name="csrfToken"
                   value={csrfToken}/>

            <button onClick={() => {
                alert("This is not yet available! Please sign in with Google!")
            }} className={"signInBoxes facebookBtn"}>
                <img src={facebookLogo} alt="Facebook logo" className="logo"/>
                <p>Continue with Facebook</p>
            </button>
        {/*</form>*/}
    </>

};


export default FacebookSigninButton;