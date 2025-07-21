import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddShows from './pages/Admin/AddShows'
import ListShows from './pages/Admin/ListShows'
import ListBookings from './pages/Admin/ListBookings'

function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/myBookings' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/admin/*' element={<Layout/>}  >
          <Route index element={<Dashboard/>} />
          <Route path='addShows' element={<AddShows/>} />
          <Route path='listShows' element={<ListShows/>} />
          <Route path='listBookings' element={<ListBookings/>} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
