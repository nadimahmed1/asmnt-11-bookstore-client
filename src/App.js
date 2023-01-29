import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import FeaturedProducts from './Pages/FeaturedProducts/FeaturedProducts';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ItemsDetail from './Pages/ManageItems/ItemsDetail/ItemsDetail';
import ManageItems from './Pages/ManageItems/ManageItems';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';





function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/featured' element={<FeaturedProducts></FeaturedProducts>}></Route>
        <Route path='/products' element={<RequireAuth>
          <Products></Products>
        </RequireAuth>}></Route>
        <Route path='/manageItems' element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
        <Route path='/manageItems/:manageItemId' element={<ItemsDetail></ItemsDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>

    </div>
  );
}



export default App;
