import { useNavigate } from "react-router-dom";



const SignUpButton = () => {

      const navigate = useNavigate();

      const navigateToLogIn = () => {
          navigate("/logIn");
      };
      
    return (
        <>
            <form>
                <button type="submit" className={"signInBoxes loginBtn"} onClick={navigateToLogIn}>
                    <p>LOG IN/SIGN UP</p>
                </button>
            </form>
        </>
    );
};

export default SignUpButton;
