
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from '../screen/login';
import Signup from '../screen/signup';
import Home from '../screen/home';
import ButtonAppBar from '../screen/Dashboard';

const Approute = () => {
  return (
    <>
    <Router>
        
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Signup />} />
            <Route path='Dashboard' element={<ButtonAppBar />} />
        </Routes>
    </Router>
    </>
  )
}

export default Approute