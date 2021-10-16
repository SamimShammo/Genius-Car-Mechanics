import React from 'react';
import useAuth from '../../../useAuth/useAuth';

const Login = () => {
    const {signInWithGoogle, error} = useAuth()
    return (
        <div>
           <h2> This is Login</h2>
           <button onClick={signInWithGoogle}>Google  Sign In</button>
           <p>{error}</p>
        </div>
    );
};

export default Login;