import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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

  return (
    <body>
      <Router>
        <AuthContext.Provider value={{
          token, login, logout, userId, isAuthenticated
        }}>
        <header>
          { isAuthenticated && <NavBar /> }
        </header>
        <main>
          <div className="container">
            {routesRendered}
          </div>
        </main>
        <footer className="page-footer orange">
          <Footer />
        </footer>
        </AuthContext.Provider>
      </Router>
    </body>
  );
}

export default App;
