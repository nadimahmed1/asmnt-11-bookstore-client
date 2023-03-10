import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Somthing from '../Something/Somthing';
import Top from '../Top/Top';


const Home = () => {
    return (
        <div>

            <div>
                <Top></Top>
            </div>
            <div>
                <Somthing></Somthing>
            </div>
            <br />
            <div>
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div>
                <Products></Products>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;