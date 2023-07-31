import React from 'react';
import Home from '../pages/Home/Home';
import Footer from '../Shared/footer/Footer';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
          <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;