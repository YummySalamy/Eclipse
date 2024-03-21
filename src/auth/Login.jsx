import React, { useState } from 'react';
import AuthLogin from './views-misc/AuthLogin';

import './assets/ViewsStyles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div className="login">
            <div className='login_left'>
                <AuthLogin />
            </div>
            {/* <div className='login_right'>
                <img src="https://images.unsplash.com/photo-1612833944753-3e3e3e3e3e3e" alt="Login_img" />
            </div> */}
        </div>
    );
}

export default Login;