import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import FoodContextProvider from './Global/GlobalState';
import Footer from './Components/Footer/Footer';
import Reservation from './Components/Reservation/Reservation';
import Menu from './Components/Menu/Menu';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
import Report from './Components/Report/Report';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  return (
    <FoodContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/report' element={<Report />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </FoodContextProvider>
  )
}

export default App
