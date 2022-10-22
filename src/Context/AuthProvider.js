import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //Set user to the state
    const [user, setUser] = useState()
    //Login/Register with Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //Login with Github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    //Get the user data
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=> unSubscribe();
    }, [auth])
    
    const userInfo = {user, googleSignIn, githubLogin}


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;