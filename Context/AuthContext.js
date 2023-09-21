import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    // Use createUserWithEmailAndPassword for sign-up
    function login(email, password) {
        return signInWithEmailAndPassword(auth,email, password);
    }
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        });
        return unsubscribe;
    }, []);

    function logout() {
        return auth.signOut();
      }
    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
