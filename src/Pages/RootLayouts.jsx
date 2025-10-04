import React from 'react';
import { Outlet } from 'react-router';
import Home from './Home';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default RootLayouts;