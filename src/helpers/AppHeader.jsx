import React, {useState, useEffect} from "react";

import "./assets/Helpers.css";

const AppHeader = () => {

    const [hasScrolled, setHasScrolled] = useState(false);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    );

    return (
        <header className="app_header" style={{backgroundColor: hasScrolled ? '#2d2d2d' : 'transparent'}}>
            <div className="app_header_logo">
                <span>Eclipse</span>
            </div>
        </header>
    );
}

export default AppHeader;