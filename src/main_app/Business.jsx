import React from "react";

import RecentProducts from "./main_app_misc/RecentProducts";
import RecentSales from "./main_app_misc/RecentSales";

import "./assets/MainAppStyles.css";

const Business = () => {
    return (
        <div className="business">
            <h1>My Business</h1>
            <div className="business_content">
                <RecentSales />
                <RecentProducts />
            </div>
        </div>
    );
}

export default Business;