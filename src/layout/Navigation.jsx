import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login/Login';
import Footer from '../Components/Footer/Footer';

const Navigation = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Navigation;