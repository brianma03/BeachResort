import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/rooms/" element={<Rooms />} />
      <Route exact path="/rooms/:slug" element={<SingleRoom />} />
      <Route element={<Error />} />
    </Routes>
  </>
  );
}

export default App;
