import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import routes from './routes/routes';

const App = () => {
  const routesRendered = routes(true);
    return (
      <Router>
        <div className="container">
          <h3>Frontend is loaded now.</h3>
          { routesRendered }
        </div>
      </Router>
    );
  }

export default App;
