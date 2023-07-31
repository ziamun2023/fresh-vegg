import React from 'react';
import Home from '../pages/Home/Home';
import Footer from '../Shared/footer/Footer';
import Navbar from '../Shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import NavTop from '../Shared/navbar/NavTop';
import AnimatedCursor from "react-animated-cursor"

const MainLayout = () => {
    return (
        <div>
            <NavTop/>
            <Navbar/>
            <  AnimatedCursor   innerSize={17}
      outerSize={8}
      color='118, 167, 19'
      outerAlpha={0.4}
      innerScale={0.10}
      outerScale={7}
      
      />
          <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default MainLayout;