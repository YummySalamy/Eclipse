import React from 'react';
import Sidebar from './Sidebar';
import AppHeader from '../helpers/AppHeader';

const AppLayout = ({ children }) => {
    return (
        <div className="app-layout">

            <AppHeader />
            <Sidebar />
            {children}
        </div>
    );
};

export default AppLayout;