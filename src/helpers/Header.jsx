import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EclipseLogo from '../assets/logo.png';

const headerLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contact' },
];

const Header = () => {
    const [elements, setElements] = useState(headerLinks);
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
        <header className="header" style={{backgroundColor: hasScrolled ? '#2d2d2d' : 'transparent'}}>
            {/* <div className="header__logo">
                <Link to="/">
                    <img src={EclipseLogo} alt="Logo" />
                </Link>
            </div> */}
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {elements.map((element, index) => (
                        <Link to={element.url} key={index} className="header__nav-link">
                            <li key={index} className="header__nav-item">
                                {element.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            { !isMobile &&
            <div className="header__cta">
                <Link to="/login">
                <button>
                    Log In
                </button>
                </Link>
                <button>
                    Sign Up
                </button>
            </div>
            }   
        </header>
    );
};

export default Header;
