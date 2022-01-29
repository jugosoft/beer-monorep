import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import routes from './routes/routes';

const App = () => {
  const routesRendered = routes(false);
    return (
      <Router>
          <main>
            <div className="container">
              { routesRendered }
            </div>
          </main>
          <footer className="page-footer main">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h3 className="white-text">Footer</h3>
                  <p className="grey-text text-lighten-4">Beer Application for your pleasure.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Link Sample</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              © {new Date().getFullYear()}
              </div>
            </div>
          </footer>
      </Router>
    );
  }

export default App;
