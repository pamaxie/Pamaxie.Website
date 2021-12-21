import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './pages/shared/NavMenu'
import Footer from './pages/shared/Footer';
import Routing from './pages/shared/Routing';

import './assets/fonts/OpenDyslexic-Regular.otf';
import './assets/css/tailwind.min.css';
import './assets/css/pamaxie.css';

export default function App() {
  return (
      <Router>
          <NavMenu/>
          <Routing/>
          <Footer/>
      </Router>
      /*<Router>
          <div className="App">
              <ul className="App-header">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/test">Test</Link>
                  </li>
              </ul>
              <Routes>
                  <Route exact path='/' element={< Home/>}/>
                  <Route exact path='/test' element={< Test/>}/>
              </Routes>
          </div>
      </Router>*/
  );
}