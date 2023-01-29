import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>


            <div className='link'>
                <Link to={'/home'}>Home</Link>
                <br />
                <Link to={'about'}>About</Link>
                <br />
                <Link to={'products'}>Products</Link>
                <br />
                <Link to={'manageItems'}>manageCycle</Link>
            </div>
            <p><small className='text-light'>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;