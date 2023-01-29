import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithMicrosoft } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { auth } from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        EmailError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    // SignIn with Google





    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form onSubmit={handleSubmit} className="login-form" o>
                <input onChange={handleEmailChange} type="text" placeholder="Your Email" />

                <input onChange={handlePasswordChange} type="password" placeholder="password" />

                <button>Login</button>
                <p>Don't have an account? <Link to="/register">Register first</Link> </p>
            </form>

        </div>
    );
};

export default Login;