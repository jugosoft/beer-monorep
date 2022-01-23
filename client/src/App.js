import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import routes from './routes/routes';

const App = () => {
<<<<<<< HEAD
  const routesRendered = routes(false);
    return (
      <Router>
        <div className="container grey">
=======
  const routesRendered = routes(true);
    return (
      <Router>
        <div className="container">
          <h3>Frontend is loaded now.</h3>
>>>>>>> d1f913a6883721e3f594024d9d8d8d8ac92ea22a
          { routesRendered }
        </div>
      </Router>
    );
  }

export default App;
