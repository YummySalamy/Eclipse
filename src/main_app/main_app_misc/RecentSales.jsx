import React, { useState } from 'react';

import Table from '../../components/Table';

import '../assets/MainAppStyles.css';

const dummyColumns = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        render: (text) => text,
    },
    {
        title: 'Shipping Status',
        dataIndex: 'shippingStatus',
        key: 'shippingStatus',
        render: (text) => text,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text) => text,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => text,
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (text) => text,
    },
];

const dummyData = [
    {
        product: 'Apples',
        shippingStatus: 'On the way',
        quantity: 1,
        price: 100,
        total: 100,
    },
    {
        product: 'Oranges',
        shippingStatus: 'On the way',
        quantity: 2,
        price: 200,
        total: 400,
    },
    {
        product: 'Bananas', 
        shippingStatus: 'On the way',
        quantity: 3,
        price: 300,
        total: 900,
    },
    {
        product: 'Grapes',
        shippingStatus: 'On the way',
        quantity: 4,
        price: 400,
        total: 1600,
    },
    {
        product: 'Pineapples',
        shippingStatus: 'On the way',
        quantity: 5,
        price: 500,
        total: 2500,
    },
    {
        product: 'Mangoes',
        shippingStatus: 'Shipped',
        quantity: 6,
        price: 600,
        total: 3600,
    },
    {
        product: 'Peaches',
        shippingStatus: 'On the way',
        quantity: 7,
        price: 700,
        total: 4900,
    },
    {
        product: 'Pears',
        shippingStatus: 'On the way',
        quantity: 8,
        price: 800,
        total: 6400,
    },
    {
        product: 'Plums',
        shippingStatus: 'On the way',
        quantity: 9,
        price: 900,
        total: 8100,
    },
    {
        product: 'Watermelons',
        shippingStatus: 'Shipped',
        quantity: 10,
        price: 1000,
        total: 10000,
    },
];

const RecentSales = () => {
    const [data, setData] = useState(dummyData);
    const [columns, setColumns] = useState(dummyColumns);
    return (
        <div className="recent-sales">
            <h4>Recent Sales</h4>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}

export default RecentSales;