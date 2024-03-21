import React from "react";

import Grid from "../helpers/Grid";
import Card from "../components/Card";

import "./assets/MainAppStyles.css";

const cards = [
    {
        title: "Card 1",
        content: "Content 1",
    },
    {
        title: "Card 2",
        content: "Content 2",
    },
    {
        title: "Card 3",
        content: "Content 3",
    },
    {
        title: "Card 4",
        content: "Content 4",
    },
    {
        title: "Card 5",
        content: "Content 5",
    },
    {
        title: "Card 6",
        content: "Content 6",
    },
];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Grid columns={3}>
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} />
                ))}
            </Grid>
        </div>
    );
}

export default Dashboard;