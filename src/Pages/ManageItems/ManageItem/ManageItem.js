import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../useProducts';

const ManageItem = ({ manageItem }) => {
    const { id, name, price, img } = manageItem;

    const [products, setProducts] = useProducts()

    const navigate = useNavigate()

    const navigatToItemsId = id => {
        navigate(`/manageItems/${id}`);
    }


    return (
        <div className="card shadow-lg">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body m-2">
                <h3 className="card-text">{name}</h3>

                <h5 className='text'>Price: ${price}</h5>
                <br />
                <div>

                    <button onClick={() => navigatToItemsId(id)} className='btn btn-success text-center'>See Details</button>

                </div>
            </div>
        </div>
    );
};

export default ManageItem;