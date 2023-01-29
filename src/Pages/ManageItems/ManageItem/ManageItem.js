import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = ({ manageItem }) => {
    const { id, name, price, img } = manageItem;

    const navigate = useNavigate()

    const navigatToItemsId = id => {
        navigate(`/manageItems/${id}`);
    }
    return (
        <div className="card shadow-lg">
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body m-2">
                <h3 className="card-text">{name}</h3>

                <h5 className='text'>Price: ${price}</h5>
                <br />
                <button onClick={() => navigatToItemsId(id)} className='btn btn-success text-center'>See Details</button>
            </div>
        </div>
    );
};

export default ManageItem;