import Layout from './components/Layout/Layout'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h2>laksdlsna</h2>} />
      </Routes>
    </Layout>
  )
}

export default App
