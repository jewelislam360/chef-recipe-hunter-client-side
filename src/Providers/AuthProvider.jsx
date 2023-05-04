import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init'

export const AuthContext= createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser=(name, imgurl, email, password)=>{
        return createUserWithEmailAndPassword(auth, name, imgurl, email, password);
    }
    const signIn= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);

        });
        return ()=>{
            unsubscribe();
        }

    },[])
    const AuthInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;