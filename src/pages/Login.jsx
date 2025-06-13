// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { loginUser, isAuthenticated } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../utils/auth.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const result = loginUser(email, password);
        if (result.success) {
            navigate('/');
        } else {
            alert(result.message);
        }
    };
    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/portfolio');
        }
    }, [navigate]);

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="auth-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div className="auth-footer">
                Don’t have an account? <Link to="/signup">Sign up here</Link>
            </div>
        </div>
    );
}

export default Login;
