import React from 'react';

const ManageItem = ({ manageItem }) => {
    const { name, price, img } = manageItem;
    return (
        <div className="card shadow-lg">
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body d-flex m-2">
                <h3 className="card-text">{name}</h3>
                <h5 className='text'>${price}</h5>
            </div>
        </div>
    );
};

export default ManageItem;