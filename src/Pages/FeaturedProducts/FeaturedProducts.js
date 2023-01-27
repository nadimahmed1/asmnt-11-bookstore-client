import React from 'react';
import img1 from '../../images/cyclicle/crop-man-with-bicycle-standing-pavement.jpg';
import img2 from '../../images/cyclicle/stylish-girls-walking-summer-park.jpg';
import './FeaturedProducts.css'

const FeaturedProducts = () => {
    return (
        <div className='text-center'>
            <h2>FEATURED PRODUCTS</h2>
            <small>_____________________</small>
            <h4><small>Customers favorite products this week. Whats so special? Check it out!</small></h4>
            <br />
            <div className='featured d-flex mt-5'>
                <div className='image-section'>
                    <div className="card shadow-lg">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div className="card-body d-flex m-2">
                            <h3 className="card-text">Crop-Man-With bicycle.</h3>
                            <h5 className='text'>$600</h5>
                        </div>
                    </div>
                </div>

                <div className='image-section'>
                    <div className="card shadow-lg">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div className="card-body d-flex m-2">
                            <h3 className="card-text">Two-Young-Girls-with Bike.</h3>
                            <h5 className='text'>$600</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedProducts;