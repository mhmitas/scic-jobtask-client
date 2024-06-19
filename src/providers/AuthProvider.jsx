import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)

    const auth = getAuth(app)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function providerSignIn(provider) {
        return signInWithPopup(auth, provider)
    }
    function logOutUser() {
        return signOut(auth)
    }
    function updateUserProfile(name = null, photo = null) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser:', currentUser);
            setUser(currentUser)
            setAuthLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        authLoading,
        setAuthLoading,
        createUser,
        loginUser,
        providerSignIn,
        logOutUser,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;