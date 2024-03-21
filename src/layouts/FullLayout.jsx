import React from 'react';
import Header from '../helpers/Header';

const FullLayout = ({ children }) => {
    return (
        <div className="full-layout">
            <Header />
            {children}
        </div>
    );
};

export default FullLayout;
