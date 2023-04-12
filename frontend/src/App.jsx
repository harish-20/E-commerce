import Layout from './components/Layout/Layout'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import User from './pages/User/User'
import ProductCategory from './pages/ProductCategory/ProductCategory'
import AddProduct from './pages/AddProduct/AddProduct'
import PDP from './pages/PDP/PDP'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<ProductCategory />} />
        <Route path="/product/:productId" element={<PDP />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Layout>
  )
}

export default App
