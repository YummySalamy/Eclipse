import React, { useState } from 'react';
import Grid from '../helpers/Grid';
import Card from '../components/Card';

const Services = () => {
    const [elements, setElements] = useState([
        {
            title: 'Inventory Management',
            content: 'Eclipse offers advanced inventory management services to businesses and individuals.',
        },
        {
            title: 'AI Solutions',
            content: 'Eclipse is powered by AI and offers AI solutions to businesses and individuals.',
        },
        {
            title: 'Analytics',
            content: 'Eclipse offers advanced analytics services to businesses and individuals.',
        },
        {
            title: 'Masive Data',
            content: 'Eclipse offers massive data services to businesses and individuals.',
        },
        {
            title: 'Security',
            content: 'Eclipse offers advanced security services to businesses and individuals.',
        },
        {
            title: 'Support',
            content: 'Eclipse offers support services to businesses and individuals.',
        },
        {
            title: 'Consulting',
            content: 'Eclipse offers consulting services to businesses and individuals.',
        },
        {
            title: 'Facilities',
            content: 'Eclipse offers facilities services to businesses and individuals.',
        },
        {
            title: 'Economics',
            content: 'Eclipse offers economics automation services to businesses and individuals.',
        }
    ]);
    const isMobile = window.innerWidth < 768;
    return (
        <div className="services">
            <h1>Ecplise Services</h1>
            <p>Eclipse offers a variety of services to help you with your business needs.</p>
            <Grid columns={isMobile ? 1 : 3}>
                {elements.map((element, index) => (
                    <Card key={index}>
                        <h2>{element.title}</h2>
                        <p>{element.content}</p>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Services;
