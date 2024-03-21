import React, {useState, useEffect} from 'react';
import './../assets/PagesStyles.css'

const MainInfo = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-info">
            <p>The current time is {time.toLocaleTimeString()}.</p>
        </div>
    );
}

export default MainInfo;