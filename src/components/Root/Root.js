import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;