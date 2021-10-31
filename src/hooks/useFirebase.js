import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/LogIn/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();

    //sign up using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
    };
    //observe user state 
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({});
          }
          setIsLoading(false);
        });
        return () => unSubscriber;
      }, []);
    
      const logOut = () => {
        setIsLoading(true);
        signOut(auth)
          .then(() => {})
          .finally(() => setIsLoading(false)); 
      };
      return {
        user,
        error,
        isLoading,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut
      };
};
export default useFirebase;