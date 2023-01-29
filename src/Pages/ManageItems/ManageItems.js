import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../useProducts';
import ManageItem from './ManageItem/ManageItem';
import './ManageItems.css'

const ManageItems = () => {
    const [products] = useProducts()
    return (
        <div>
            <div className='manageItems'>
                {
                    products.map(manageItem => <ManageItem
                        key={manageItem._id}
                        manageItem={manageItem}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;