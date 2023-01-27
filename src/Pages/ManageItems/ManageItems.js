import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageItem from './ManageItem/ManageItem';
import './ManageItems.css'

const ManageItems = () => {
    const [manageItems, setManageItems] = useState([]);

    useEffect(() => {
        fetch('allProducts.json')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, [])
    return (
        <div>
            <div className='manageItems'>
                {
                    manageItems.map(manageItem => <ManageItem
                        key={manageItem.id}
                        manageItem={manageItem}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;