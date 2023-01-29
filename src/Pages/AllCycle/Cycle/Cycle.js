import React from 'react';

const Cycle = ({ cycle }) => {
    const { _id, img, name, price } = cycle;
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

export default Cycle;