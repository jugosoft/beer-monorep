import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css';
import routes from './routes/routes';

const App = () => {
  const routesRendered = routes(true);
    return (
      <Router>
        <body>
          <main>
            <div className="container">
              { routesRendered }
            </div>
          </main>
          <footer class="page-footer main">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h3 class="white-text">Footer</h3>
                  <p class="grey-text text-lighten-4">Beer Application for your pleasure.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">Link Sample</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © {new Date().getFullYear()}
              </div>
            </div>
          </footer>
        </body>
      </Router>
    );
  }

export default App;
