
import Homepage from './pages/Homepage/Homepage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { Routes,Route } from 'react-router-dom'
import Register from './pages/Registerpage/Register'
import LoginPage from './pages/Loginpage/LoginPage'
import ProductDetail from './pages/ProductDetails/ProductDetail'
import Cartpage from './pages/Cartpage/Cartpage'



const App = () => {
  return ( //grouping all the routes
    <Routes>  
      {/* single route */}
      <Route path="/" element={ <Homepage/>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      {/* page npt found should alwys add last */}
      <Route path= "/product/:id" element={<ProductDetail/> }/>
      <Route path='/cart' element={<Cartpage />} />

    {/* page not found route shoud alwyss add list */}
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App