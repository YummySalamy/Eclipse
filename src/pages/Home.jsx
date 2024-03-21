import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

import './assets/PagesStyles.css';

const Home = () => {
    const location = useLocation();

    
    const handleNext = () => {
        location.pathname = '/about';
    }

    return (
        <div className="home">
            <h1>Welcome to <span onClick={()=>handleNext()}>Eclipse</span></h1>
            <p>Your <b>everything</b> administrator.</p>
        </div>
    );
};

export default Home;
