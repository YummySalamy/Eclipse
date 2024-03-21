import React, {useState, useEffect} from 'react';
import Grid from '../../helpers/Grid';
import ImageCard from '../../components/ImageCard';

import '../assets/MainAppStyles.css';

const dummyData = [
    {
        id: 1,
        title: 'Product 1',
        image: null,
    },
    {
        id: 2,
        title: 'Product 2',
        image: null,
    },
    {
        id: 3,
        title: 'Product 3',
        image: null,
    },
    {
        id: 4,
        title: 'Product 4',
        image: null,
    },
    {
        id: 5,
        title: 'Product 5',
        image: null,
    },
];

const RecentProducts = () => {
    const [recentProducts, setRecentProducts] = useState(dummyData);

    return (
        <div className="recent-products">
            <h4>Recent Products</h4>
            <Grid columns={2}>
                {recentProducts.map((product, index) => (
                    <ImageCard key={index} title={product.title} data={product}/>
                ))}
            </Grid>
        </div>
    );
}

export default RecentProducts;