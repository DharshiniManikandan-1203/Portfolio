// src/pages/Signup.jsx
import { useState, useEffect } from 'react';
import { signupUser, isAuthenticated } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../utils/auth.css';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        const result = signupUser(email, password);
        if (result.success) {
            navigate('/login');
        } else {
            alert(result.message);
        }
    };

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="auth-form">
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
                <button type="submit">Sign Up</button>
            </form>
            <div className="auth-footer">
                Already have an account? <Link to="/login">Log in here</Link>
            </div>
        </div>
    );
}

export default Signup;
