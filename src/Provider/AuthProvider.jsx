import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext= createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const[user, setUser]=useState();
    const[loading, setLoading]=useState(true);

    //create user
    const createUser=(email, password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password);
    }
    //sign up google

const signUpGoogle=()=>{
    setLoading(true);
  return  signInWithPopup(auth, googleProvider);
}
    //login with email and pass
    const logIn=( email, password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
    }
     //logOut
     const logOut=()=>{
        setLoading(true);
      return   signOut(auth);
     }
  //update profile
  const updateUserProfile =({name,photoURL})=>{
  return  updateProfile(auth.currentUser, {
        displayName:name, photoURL: photoURL
      })
  }
//Get the currently signed-in user
   useEffect(()=>{
   const unSbscribe= onAuthStateChanged(auth, (currentUser)=>{
    if(currentUser){
        setUser(currentUser);
        setLoading(false);
    }

    });
    return ()=>{
        return unSbscribe();
    }
   },[])

    const authInfo={
        user,
        createUser,
        signUpGoogle,
        logIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;