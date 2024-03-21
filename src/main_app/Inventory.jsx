import React, {useState, useEffect} from "react";

import Table from "../components/Table";

import "./assets/MainAppStyles.css";

const Inventory = () => {
    const [data, setData] = useState([
        {
            product: "Product 1",
            distributed: "Distributed",
            quantity: 1,
            price: 100,
            total: 100,
        },
        {
            product: "Product 2",
            distributed: "Not Distributed",
            quantity: 2,
            price: 200,
            total: 400,
        },
        {
            product: "Product 3",
            distributed: "Distributed",
            quantity: 3,
            price: 300,
            total: 900,
        },
        {
            product: "Product 4",
            distributed: "Not Distributed",
            quantity: 4,
            price: 400,
            total: 1600,
        },
        {
            product: "Product 5",
            distributed: "Distributed",
            quantity: 5,
            price: 500,
            total: 2500,
        },
    ]);
    
    const columns = [
        {
            title: "Product",
            dataIndex: "product",
            key: "product",
            render: (text) => text,
        },
        {
            title: "Distributed",
            dataIndex: "distributed",
            key: "distributed",
            render: (text) => text,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (text) => text,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (text) => text,
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (text) => text,
        },
    ];

    return (
        <div className="inventory">
            <h1>My Inventory</h1>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}

export default Inventory;