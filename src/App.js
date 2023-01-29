import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import AddUser from './Pages/AddUser/AddUser';
import Allcycle from './Pages/AllCycle/Allcycle';

import FeaturedProducts from './Pages/FeaturedProducts/FeaturedProducts';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Deleteproducts from './Pages/manageCycle/manageCycle';

import NotFound from './Pages/NotFound/NotFound';
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
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/allCycle' element={<RequireAuth>
          <Allcycle></Allcycle>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/deleteProducts' element={<RequireAuth>
          <Deleteproducts></Deleteproducts>
        </RequireAuth>}></Route>
        <Route path='/addCycle' element={<RequireAuth>
          <AddUser></AddUser>
        </RequireAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}



export default App;
