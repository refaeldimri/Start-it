import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './comps/login';
import Register from './comps/register';
import Contact from './comps/contact';


function App() {
  return ( 
  <Router>
    <div className="App">   
      <div className="R" class = "text-right">
        <Link to="/"> התחבר</Link> |
        <Link to="/Register"> הרשם</Link> | 
        <Link to="/Contact"> צור קשר</Link>    
      </div>
      
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/contact" component = {Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
