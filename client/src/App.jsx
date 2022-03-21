import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import 'materialize-css';
import useRoutes from './routes/routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { NavBar, Footer } from './components';

const App = () => {

  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routesRendered = useRoutes(isAuthenticated);

  if (!ready) {
    return <div>Loading</div>
  } 

  M.toast({html: 'Application is loaded!'})

  return (
    <body>
      <BrowserRouter>
          <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
          }}>
          <header>
            { isAuthenticated && <NavBar /> }
          </header>
          <main className="container">
            { routesRendered }
          </main>
          <footer className="page-footer orange">
            <Footer />
          </footer>
          </AuthContext.Provider>
      </BrowserRouter>
    </body>
  );
}

export default App;
