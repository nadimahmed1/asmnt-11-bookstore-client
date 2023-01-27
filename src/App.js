import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import FeaturedProducts from './Pages/FeaturedProducts/FeaturedProducts';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ManageItems from './Pages/ManageItems/ManageItems';
import Products from './Pages/Products/Products';





function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/featured' element={<FeaturedProducts></FeaturedProducts>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>


      </Routes>

    </div>
  );
}



export default App;
