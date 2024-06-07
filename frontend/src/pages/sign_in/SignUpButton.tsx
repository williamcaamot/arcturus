import {useNavigate} from "react-router-dom";


const SignUpButton = () => {


    const navigateToLogIn = () => {
        navigate("/logIn");
    };

    return (
        <>
            <button className={"signInBoxes loginBtn"} onClick={() => {
                alert("This is not yet available! Please sign in with Google!")
            }}>
                <p>Log in / Sign up</p>
            </button>
        </>
    );
};

export default SignUpButton;
