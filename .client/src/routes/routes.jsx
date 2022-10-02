import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import {Auth, BeersView, BeerAdd, DefaultLanding, BlogsView, BlogAdd, Info } from '../screens';

const useRoutes = (isAuthenticated) => {

    // For authorized
    if (isAuthenticated) {
        return(
            <React.Fragment>
                <Routes>
                    <Route path="/info" element={ <Info /> } exact />
                    <Route path="/beersview" element={ <BeersView /> } exact />
                    <Route path="/beeradd" element={ <BeerAdd /> } exact />
                    <Route path="/blogsview" element={ <BlogsView /> } exact />
                    <Route path="/blogadd" element={ <BlogAdd /> } exact />
                    <Route path="*" element={<Navigate to="/beersview" />} />
                </Routes>
            </React.Fragment>
        );
    }

    // For not authorized users
    return(
        <Routes> 
            <Route path='/default' element={<DefaultLanding />} exact />
            <Route path='/auth' element={<Auth />} exact />
            <Route path="*" element={<Navigate to="/default" />} />
        </Routes>
    );
}

export default useRoutes;
