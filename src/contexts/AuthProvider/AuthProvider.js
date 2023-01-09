import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import { useState } from 'react';
import { useEffect } from 'react';
import app from './../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

  //google login provider
  const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut

    const logOut = () => {
        localStorage.removeItem('car-token')
        return signOut(auth)
    }

    //google login Function
  const signInwithG = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser,
        loginUser,
        logOut,
        signInwithG
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;