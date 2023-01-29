import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { auth } from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        RegisterError,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);




    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    return (
        <div className="login-container">
            <div className="login-title">REGISTER</div>
            <form onSubmit={handleSubmit} className="login-form" o>
                <input onChange={handleEmailChange} type="text" placeholder="Your Email" />

                <input onChange={handlePasswordChange} type="password" placeholder="password" />

                <button>Register</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}


                <p>Already have an account? <Link to="/login">Please Login</Link> </p>
            </form>

        </div>
    );
};

export default Register;