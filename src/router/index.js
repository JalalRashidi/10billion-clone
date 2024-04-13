import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/layouts/navbar';

const Router = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                
                <Route path='/' exact element={<Home/>}/>

                </Routes >
        </BrowserRouter>
    )
}

export default Router;