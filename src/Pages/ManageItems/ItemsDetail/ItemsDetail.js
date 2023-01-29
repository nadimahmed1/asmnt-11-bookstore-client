import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../useProducts';

const ItemsDetail = () => {
    const { manageItemId } = useParams()
    const [products] = useProducts()
    return (
        <div>
            <h3>Id: {manageItemId}</h3>
        </div>
    );
};

export default ItemsDetail;