
import { RiDashboard2Line } from "react-icons/ri";
import { LuCodesandbox } from "react-icons/lu";
import { FaAngellist } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

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
        title: 'Contacts',
        url: '/app/contacts',
        icon: <IoMdContacts />,
    },
    {
        title: 'Inventory',
        url: '/app/inventory',
        icon: <LuCodesandbox />,
    },
    {
        navlabel: true,
        name: 'Extras',
    },
    {
        title: 'Requests',
        url: '/app/requests',
        icon: <FaAngellist />,
    },
];

//export default MenuItems;