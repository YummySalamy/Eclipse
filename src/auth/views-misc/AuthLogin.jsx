import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../assets/ViewsStyles.css';

const validUsers = [
    {   
        email: 'carsebastian1013@gmail.com',
        password: '123456',
    },
    {
        email: 'hola@gmail.com',
        password: '123456',
    }
];

const AuthLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = validUsers.find((user) => user.email === email && user.password === password);
        if (user) {
            window.location.href = '/app';
        } else {
            alert('Invalid user');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div className="auth_login">
            <div className="auth_form_container">
                <form className='auth_form' onSubmit={handleSubmit}>
                    <h1>¿Who are you?</h1>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </form>
            </div>
            <div className="auth_buttons">
                <button 
                    type="submit"
                    onClick={handleLogin}
                >Login</button>
                <button>Sign Up</button>
                <span onClick={()=>window.location.href = '/'}>
                    ¿Forgot Password?
                </span>
            </div>
        </div>
    );
}

export default AuthLogin;