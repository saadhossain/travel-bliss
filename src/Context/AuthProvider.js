import React, { createContext } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const userInfo = {googleSignIn}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;