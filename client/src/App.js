import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import routes from './routes/routes';

const App = () => {
  const routesRendered = routes(false);
    return (
      <Router>
        <div className="container grey">
          { routesRendered }
        </div>
      </Router>
    );
  }

export default App;
