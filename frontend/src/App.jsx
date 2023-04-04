import Layout from './components/Layout/Layout'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import ProductCategory from './pages/ProductCategory/ProductCategory'
import AddProduct from './pages/AddProduct/AddProduct'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/category/:category" element={<ProductCategory />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Layout>
  )
}

export default App
