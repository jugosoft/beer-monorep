import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import useRoutes from './routes/routes';

const App = () => {
  const routes = useRoutes(false);
    return (
      <Router>
        <div className="container">
          <h3>Frontend is loaded now.</h3>
          { routes }
        </div>
      </Router>
    );
  }

export default App;
