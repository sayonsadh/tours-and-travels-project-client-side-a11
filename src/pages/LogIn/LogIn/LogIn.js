import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from "./../../../hooks/useAuth";
import './Login.css';

const LogIn = () => {
    const {
        signInUsingGoogle,
        setIsLoading
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="login-container">
            <div>
                <h5 className="fst-italic">You Must Need To Login First.</h5>
                <img className="w-25" src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif" alt="" />
            </div>
            <div>
                <h2>Please Log in</h2>
                <button onClick={handleGoogleSignIn} className="btn  btn-primary">
                <i className="fab fa-google"></i> Continue with Google
                </button>
            </div>
        </div>
    );
};

export default LogIn;