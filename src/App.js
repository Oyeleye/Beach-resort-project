import React from 'react';
// import './App.css';
import Home from './pages/Home.js';
import Rooms from './pages/Rooms.js';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.js';

function App() {
  return <>
  <Home/>
  <Rooms/>
  <SingleRoom/>
  <Error/>
  </>;
}

export default App;
