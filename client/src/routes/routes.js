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
                    <Route path="*" element={<Navigate to="/links" />} />
                </Routes>
            </React.Fragment>
        );
    }

    // For not authorized users
    return(
        <Routes>
<<<<<<< HEAD
            <Route path='/auth' element={<Auth />} exact />
            <Route path="*" element={<Navigate to="/auth" />} />
=======
            <Route path='/' element={<Auth />} exact />
>>>>>>> d1f913a6883721e3f594024d9d8d8d8ac92ea22a
        </Routes>
    );
}

export default routes;
