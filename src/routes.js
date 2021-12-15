import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu';
import MyProfile from './pages/MyProfile';
import MyReservations from './pages/MyReservations';
import NearbyMarkets from './pages/NearbyMarkets';
import AvailableProducts from './pages/AvailableProducts';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myreservations' element={<MyReservations />} />
        <Route path='/nearbymarkets' element={<NearbyMarkets />} />
        <Route path='/availableproducts' element={<AvailableProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;