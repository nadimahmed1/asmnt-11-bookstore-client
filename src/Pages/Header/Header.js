import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <Link to={'home'}>Home</Link>
                <Link to={'items'}>Items</Link>
                <Link to={'about'}>About</Link>
                <Link to={'blog'}>Blog</Link>

            </div>
        </div>
    );
};

export default Header;