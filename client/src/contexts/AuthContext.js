import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, updateProfile } from "firebase/auth"
import { auth } from "../firebase"

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

  function signup(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password);
    return updateProfile(auth.currentUser, {
      displayName: name
    });
  }

  function signout() {
    return signOut(auth)
  }
  
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const value = {
    signup,
    signout,
    signin
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
}




