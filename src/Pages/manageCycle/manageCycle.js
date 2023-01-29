import React from 'react';
import useProducts from '../useProducts';
import './manageCycle.css'

const Deleteproducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `http://localhost:5000/bicycle/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
    }

    return (
        <div>
            <h1 className='text-center text-success m-2'>Manage Cycle</h1>
            <div className='manageCycle'>

                {
                    products.map(product => <div
                        className='border'
                        key={product._id}

                    >
                        <h5>{product.name}
                            <img className='image w-100' src={product.img} alt="" />
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger m-2 p-4'>Delete</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Deleteproducts;