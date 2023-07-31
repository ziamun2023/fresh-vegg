import React from 'react';
import Home from '../pages/Home/Home';
import Footer from '../Shared/footer/Footer';
import Navbar from '../Shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import NavTop from '../Shared/navbar/NavTop';

const MainLayout = () => {
    return (
        <div>
            <NavTop/>
            <Navbar/>
          <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;