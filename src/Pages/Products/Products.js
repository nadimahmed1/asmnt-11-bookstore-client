import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bicycle2')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div >
            <h1 className='text-center text-success'>Our Products</h1>
            <div className='products'>


                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>

        </div>

    );
};

export default Products;