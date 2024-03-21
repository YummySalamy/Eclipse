import React, { useState } from 'react';
import SidebarItems from './sidebar_misc/SidebarItems';
import { RxEyeClosed } from "react-icons/rx";

import './assets/Layouts.css';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <>
        <div className={showSidebar ? 'sidebar' : 'sidebar_hidden'} id='sidebar'>
            <div className="sidebar_toggle" onClick={handleSidebar}>
                <span className="sidebar_toggle_icon">
                    {showSidebar ? <RxEyeClosed/> : '☰'}
                </span>
            </div>
            <div className={showSidebar ? 'sidebar_menu' : 'sidebar_menu_hidden'}>
                <SidebarItems />
            </div>
        </div>
        </>
    );
}

export default Sidebar;