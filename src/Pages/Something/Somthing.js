import React from 'react';
import { Link } from 'react-router-dom';
import './Something.css'

const Somthing = () => {
    return (
        <div className='something text-center mt-5 mb-5 '>
            <div className='one'>
                <h6>Totally Free</h6>
                <h2>TEST DRIVE</h2>
                <p><Link>More info here</Link></p>
            </div>
            <div className='one'>
                <h6>For all Standard Offer</h6>
                <h2>FREE SHIPPING</h2>
                <p><Link>More info here</Link></p>
            </div>
            <div className='one'>
                <h6>Only in 30 days</h6>
                <h2>FREE RETURNS</h2>
                <p><Link>More info here</Link></p>
            </div>
        </div>
    );
};

export default Somthing;