import './App.css';
//import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Pages/Routing/About';
import ContactUs from './Pages/Routing/ContactUs';
import { useState } from 'react';

function App() {

  //The value we set for a variable through a useState is not a constant. Can keep the value constant by saving it into a database or a local storage.
const [count, setCount] = useState(0);

const increment = () =>{
 setCount(count+10);
}

const decrement = () => {
 setCount(count-10);
}

  return (

  /* React Routing:

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
  */
  
  //useState Method:

  //useState
<>
    <span className='title'> My counter</span>
    <p className='SubTitle'>The count is {count}</p>
    <button onClick={decrement} className='button'>-</button>
    <button onClick={increment} className='button' >+</button>
</>

  );
}

export default App;
