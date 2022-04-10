import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import 'materialize-css';
import { useRoutes } from './routes';
import { useAuth } from './hooks';
import { AuthContext } from './context';
import { NavBar, Footer, Loader } from './components';

const App = () => {

  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routesRendered = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }

  M.toast({ html: 'Application is loaded!' })

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
        <header>
          <NavBar />
        </header>
        <main className="container">
          {routesRendered}
        </main>
        <footer className="page-footer orange">
          <Footer />
        </footer>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
