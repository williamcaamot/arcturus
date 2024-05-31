import { useNavigate } from "react-router-dom";



const SignUpButton = () => {

      const navigate = useNavigate();

      const navigateToLogIn = () => {
          navigate("/logIn");
      };
      
    return (
        <>
            <div className="signInBoxes">
                <button
                    className={"signInBoxes signUpBtn"}
                    onClick={navigateToLogIn}
                >
                    <p>LOG IN/SIGN UP
                    </p>
                </button>
            </div>
        </>
    );
};

export default SignUpButton;
