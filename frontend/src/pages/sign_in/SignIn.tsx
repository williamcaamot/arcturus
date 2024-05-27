import "./styles/signIn.css";

const SignIn = () => {
    return (
        <div className="signInContainer">

            <div className="signInHeader">
            <h1>FLEXR</h1>
            </div>

            <div className="signInLogo">
               <img src="" alt="" className="signInLogo" />
            </div>

            <button className="signInBoxes">
              <p>Continue with Apple</p>
            </button>

            <button className="signInBoxes">
                <p>Continue with Facebook</p>
            </button>

            <button className="signInBoxes">
                <p>Continue with Google</p>
            </button>

            <button className="signInBoxes">
                <p>Register new user</p>
            </button>

        </div>
    );
};

export default SignIn;
