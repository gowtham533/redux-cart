import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Whistlist from './pages/Whistlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'






function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Whistlist/>}/>
      <Route path='/product/:id/view' element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
