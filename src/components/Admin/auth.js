import React from 'react'
import { auth, googleProvider } from "../../config/firebase";
import { signOut, signInWithPopup } from 'firebase/auth';

const Auth = () => {
    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>Admin Sign In</button>
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

export default Auth