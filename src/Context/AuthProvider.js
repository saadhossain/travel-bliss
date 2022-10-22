import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //Set user to the state
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    //Login/Register with Google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //Login with Github
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //Register using user and Password
    const userRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Update Username after registration
    const updateUsername = (fullName) => {
        setLoading(true)
        return updateProfile(auth.currentUser , {
            displayName:fullName
        })
    }
    //Login user using email and password
    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Send Email Verification link to the user
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    //Get the user data
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unSubscribe();
    }, [auth])
    //SignOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const userInfo = {user, googleSignIn, githubLogin, userRegister, verifyEmail, updateUsername, userLogin, logOut,loading}


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;