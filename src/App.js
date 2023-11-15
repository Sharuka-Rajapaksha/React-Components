import './App.css';
//import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Pages/Routing/About';
import ContactUs from './Pages/Routing/ContactUs';


function App() {
  return (

    <Router>
      <div>
        <Switch>
          
          <Route exact path="/">
            <Home2/>
          </Route>

          <Route path="/About">
            <About/>
          </Route>
        
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>

        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
