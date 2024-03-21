import React, {useState} from 'react';
import Grid from '../helpers/Grid';

import './assets/PagesStyles.css';
import { FaGithubAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const contactsList = [
    {
        title: 'Github',
        icon: <FaGithubAlt />,
    },
    {
        title: 'Phone',
        icon: <FaPhone />,
    },
    {
        title: 'Whatsapp',
        icon: <FaWhatsapp />,
    },
    {
        title: 'Gmail',
        icon: <SiGmail />,
    },
];

const Contact = () => {
    const [elements, setElements] = useState(contactsList);
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Get in touch with us soon...</p>
            {/* <Grid columns={4}>
                {elements.map((element, index) => (
                    <div key={index} className="contact-item">
                        <h2>{element.title}</h2>
                        <p>{element.icon}</p>
                    </div>
                ))}
            </Grid> */}
        </div>
    );
}

export default Contact;