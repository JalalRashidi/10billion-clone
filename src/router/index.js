import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/layouts/navbar';
import Footer from '../components/layouts/footer';
import Course from '../pages/Course';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path='/' exact element={<Home />} />
                <Route path='/course'  element={<Course/>} />
                <Route path='/about'  element={<About/>} />
                <Route path='/contact'  element={<Contact/>} />
                <Route path='/login'  element={<Login/>} />

            </Routes >
            <Footer />
        </BrowserRouter>
    )
}

export default Router;