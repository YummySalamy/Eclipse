import React from 'react';
import Sidebar from './Sidebar';
import AppHeader from '../helpers/AppHeader';

const AppLayout = ({ children }) => {
    return (
        <div className="app-layout">

            <div className="app-layout-sidebar">
            <Sidebar />
            </div>
            <div className="app-layout-content">
                <AppHeader />
                {children}
            </div>
            
        </div>
    );
};

export default AppLayout;