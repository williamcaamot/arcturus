import "./styles/signIn.css";

const SignIn = () => {
    return (
        <div className="signInContainer">
            <div className="signInLogo">
                <h1>LOGO HERE</h1>
                <br />
                <h2 style={{ margin: 0 }}>Welcome Darwin</h2>
            </div>
            <div className="signInBoxes">
                <p>Facebook</p>
            </div>
            <div className="signInBoxes">
                <p>Microsoft</p>
            </div>
            <div className="signInBoxes">
                <p>Google</p>
            </div>
            <div className="signInBoxes">
                <p>Apple</p>
            </div>
            <div className="signInBoxes">
                <p>Email</p>
            </div>
        </div>
    );
};

export default SignIn;
