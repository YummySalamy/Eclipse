import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { RiDashboard2Line } from "react-icons/ri";
import { LuCodesandbox } from "react-icons/lu";
import { FaAngellist } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import { SiRobotframework } from "react-icons/si";

import '../assets/Layouts.css';

const MenuItems = [
    {
        navlabel: true,
        name: 'Principal',
    },
    {
        title: 'Dashboard',
        url: '/app/dashboard',
        icon: <RiDashboard2Line />,
    },
    {
        title: 'My Business',
        url: '/app/business',
        icon: <FaShop />,
    },
    {
        title: 'Inventory',
        url: '/app/inventory',
        icon: <LuCodesandbox />,
    },
    {
        navlabel: true,
        name: 'Comunity',
    },
    {
        title: 'Contacts',
        icon: <IoMdContacts />,
    },
    {
        title: 'Requests',
        icon: <FaAngellist />,
    },
    {
        navlabel: true,
        name: 'Extras',
    },
    {
        title: 'Automation',
        icon: <SiRobotframework />,
    },
];

const SidebarItems = () => {

    const [active, setActive] = useState('');
    const currentPath = window.location.pathname;

    useEffect(() => {
        MenuItems.map((item) => {
            if (currentPath === item.url) {
                setActive(item.title);
            }
            return active;
        });
    }
    , [currentPath, active]);

    return (
        <div className="sidebar_menu">
            <ul className="sidebar_menu_items">
                {MenuItems.map((item, index) => {
                    if (item.navlabel) {
                        return (
                            <li key={index} className="sidebar_menu_navlabel">
                                {item.name}
                            </li>
                        );
                    } else return (
                        <Link 
                            key={index} 
                            className={active === item.title ? 'sidebar_menu_item_active' : 'sidebar_menu_item'}
                            to={item.url} 
                            onClick={() => setActive(item.title)}
                        > 
                                <div className="sidebar_menu_icon">
                                {item.icon}
                                </div>
                                <span>{item.title}</span>
                        </Link>
                    );
                })}
            </ul>
            <div className="sidebar_menu_button">
                <Link to="/login">
                    <button>
                        Log Out
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SidebarItems;