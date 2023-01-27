import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Products from '../Products/Products';
import Somthing from '../Something/Somthing';
import Top from '../Top/Top';


const Home = () => {
    return (
        <div>

            <Top></Top>
            <Somthing></Somthing>
            <br />
            <FeaturedProducts></FeaturedProducts>
            <Products></Products>

        </div>
    );
};

export default Home;