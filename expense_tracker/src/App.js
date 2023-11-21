import React from 'react';
import Tracker from './Tracker';
import Home from './Home';
import Navbar from './components/Navigation/Navbar';


import {
  Routes,
  Route
} from "react-router-dom";


function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/tracker" exact element={ <Tracker/> } />
          <Route path="/" exact element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
