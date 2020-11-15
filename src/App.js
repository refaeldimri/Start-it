import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {Nav} from 'react-bootstrap';
import Login from './comps/login';
import Register from './comps/register';
import Contact from './comps/contact';
// import './login.css'
// import Header from './comps/header';


function App() {
  return ( 
  <Router>
  <div className="App">   
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" activeKey="/Contact">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse row" id="navbarTogglerDemo01">
    <a class="navbar-brand col-1" href="/">גמני</a>
  <div class="col-1" />
    <ul class="navbar-nav col-7 text-right">
      <li class="nav-item">
        <a class="nav-link" href="/Register">הרשמה <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">כניסה</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Contact">יצירת קשר</a>
      </li>
    </ul>
      <div class = "mr-auto row col">
      <div class = "col-8">
      <input class="mr-sm-2" type="search" placeholder="חיפוש" aria-label="Search" />
      </div>
      <div class="col">
      <button class="sm-0" type="submit">חיפוש</button>
      </div>
      </div>
  </div>
</nav>
    
      <div className="R" class = "text-right">
        <Link to="/"> התחבר</Link> |
        <Link to="/Register"> הרשם</Link> | 
        <Link to="/Contact"> צור קשר</Link>    
      </div>
      
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route exact path="/Register" component = {Register} />
        <Route exact path="/Contact" component = {Contact} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
