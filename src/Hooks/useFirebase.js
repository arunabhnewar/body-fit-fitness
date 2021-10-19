import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleEmailChange = (e) => {
        setEmail(e?.target?.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e?.target?.value);
    };

    const getName = (e) => {
        setName(e?.target?.value);
    };

    const registerNewUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("");
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => { })
    }
    //google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setEmail(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)

    }

    return {
        user,
        setUser,
        isLoading,
        error,
        verifyEmail,
        sendEmailVerification,
        setUserName,
        getName,
        signInUsingGoogle,
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        handleResetPassword,
        registerNewUser,
        logOut
    }
}


export default useFirebase;