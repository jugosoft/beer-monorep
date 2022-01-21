import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Custom Imports
import {Auth, Links, Details} from '../screens';

const routes = (isAuthenticated) => {

    // For authorized
    if (isAuthenticated) {
        return(
            <React.Fragment>
                <Routes>
                    <Route path="/links" element={ <Links /> } exact />
                    <Route path="/details" element={ <Details /> } exact />
                </Routes>
            </React.Fragment>
        );
    }

    // For not authorized users
    return(
        <Routes>
            <Route path='/' element={<Auth />} exact />
        </Routes>
    );
}

export default routes;
