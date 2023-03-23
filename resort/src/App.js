import React from 'react'
import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

// Navbar is on all pages, hence why it is outside of all Routes.
// The Home, Rooms, and Single Room pages are wrapped in a Routes type as they need to be separated
// The Error page uses an '*' to be flagged when any unknown route is encountered.
function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/rooms/' element={<Rooms />} />
        <Route exact path='/rooms/:slug' element={<SingleRoom />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
