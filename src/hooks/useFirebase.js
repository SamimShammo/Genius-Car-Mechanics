import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged   } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/fibase.init';


initializeAuthentication()
const useFirebase = () => {
     const auth = getAuth()
     const googleProvider = new GoogleAuthProvider()
     const [isLoading, setIsLoading] = useState(true)
     const [user, setUser] = useState({})
     const [error, setError] = useState('')

     const signInWithGoogle = () => {
        setIsLoading(true)
         signInWithPopup(auth, googleProvider)
         .then(result => {
             setUser(result.user)
             console.log(result.user)
             setError('')
            
         })
         .catch(error => {
             setError(error.message)
         })
   
         .finally(() => setIsLoading(false));
     }
     useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
            
        });
        
        return () => unsubscribed;
    }, [])


     const logout = () => {

        setIsLoading(true)
        signOut(auth)
              .then(() => {
              setUser({})
              setError('')
          
          })
          .catch(error => {
            setError(error.message)
        })
          .finally(() => setIsLoading(false));
     }

    
     
     

    return {
        isLoading,
        user,
        error,
        setUser,
        logout,
        signInWithGoogle,
    }
}

export default useFirebase;