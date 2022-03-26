import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Custom Imports
import {Auth, Links, Details, Info, BeerAdd, DefaultLanding } from '../screens';

const seRoutes = (isAuthenticated) => {

    // For authorized
    if (isAuthenticated) {
        return(
            <React.Fragment>
                <Routes>
                    <Route path="/links" element={ <Links /> } exact />
                    <Route path="/details" element={ <Details /> } exact />
                    <Route path="/info" element={ <Info /> } exact />
                    <Route path="/beeradd" element={ <BeerAdd /> } exact />
                    <Route path="*" element={<Navigate to="/links" />} />
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

export default seRoutes;
