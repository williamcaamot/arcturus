const GoogleSigninButton = () => {
    return <>
        <form action={"http://localhost:3000/api/v1/auth/signin/google"} method={"POST"}>
            <input type="hidden" name="csrfToken"
                   value="3a6b19e4fcc9d86509add59ea934354084ecc142ae83269b7fb9565858d59af0" />
            <input type="hidden" name="callbackUrl" value="http://localhost:3000" />
                <button type="submit">
                        Sign in with google (this button works)
                </button>
        </form>
    </>

};


export default GoogleSigninButton;