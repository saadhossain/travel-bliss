import React, { createContext } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    //Login/Register with Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //Login with Github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const userInfo = {googleSignIn, githubLogin}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;