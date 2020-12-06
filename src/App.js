import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {useState} from "react";
import Login from './comps/login';
import Register from './comps/register';
import Contact from './comps/contact';
import Community from './comps/community';
import Information from './comps/information';
import Partners from './comps/partners';
import Donation from './comps/donation';
import Main from './comps/main';
import { SiFacebook, SiInstagram } from 'react-icons/si';
// import {Nav} from 'react-bootstrap';
// import './login.css'
// import Header from './comps/header';



function App() {
// onMouseLeave={() => setIsShown(false)}  
  const [isShown, setIsShown] = useState(false);

  // getElementById('communities').hover(()->{this.})
  return ( 
  <Router>
    <div className="App">
    <div onMouseLeave={() => setIsShown(false)}> 
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
  <Link className="navbar-brand text-center" onMouseEnter={() => setIsShown(false)} to="/main">גמני<br/>אנחנו לא לבד</Link>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(true)} to="#">קהילות</Link>
      </li>
      <li className="nav-item my-auto" onMouseEnter={() => setIsShown(false)}>
        <Link className="nav-link" to="/Information">מידע שימושי</Link>
      </li>
      <li className="nav-item my-auto" onMouseEnter={() => setIsShown(false)}>
        <Link className="nav-link" to="/Partners">שותפים</Link>
      </li>
    </ul>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(false)} to="/">כניסה</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(false)} to="/Register">הרשמה</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(false)} to="/Contact">יצירת קשר</Link>
      </li>
    </ul>
  </div>
  </nav>
          {isShown && (
<nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">מתמודדי נפש</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">הורים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">בני ובנות זוג</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">אחים ואחיות</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">ילדי מתמודדים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">קרובים וחברים</Link>
      </li>
    </ul>
</nav>
      )}
<nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <input className="col-3 Dropdown.toggler form-control" onClick={()=> setIsShown(false)} type="search" placeholder="Search" aria-label="Search" />
      <DropdownButton className="ml-5" id="dropdown-basic-button" onClick={()=> setIsShown(false)} title="מיון לפי מחלה">
        <Dropdown.Item className="text-right" href="#">מחלון</Dropdown.Item>
        <Dropdown.Item className="text-right" href="#">כליון</Dropdown.Item>
        <Dropdown.Item className="text-right" href="#">עוד מחלון</Dropdown.Item>
      </DropdownButton>
      <button className="col-1 ml-5 mr-auto mb-3 btn btn-outline-success" onMouseEnter={() => setIsShown(false)}>הוספת סיפור</button>
 </nav>
</div>       
      <Switch className=" mh-50">
        <Route exact path="/" component = {Login} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/contact" component = {Contact} />
        <Route exact path="/community" component = {Community} />
        <Route exact path="/information" component = {Information} />
        <Route exact path="/partners" component = {Partners} />
        <Route exact path="/donation" component = {Donation} />
        <Route exact path="/main" component = {Main} />  
      </Switch>
      <footer className="page-footer fixed-bottom font-small blue py-4 mt-5 bg-dark">
         <div className="footer-menu text-center max-width text-right text-white">
           <Link to="/" className="p-4 text-white"> אודות</Link> |
           <Link to="/Information" className="p-4 text-white"> מידע שימושי</Link> | 
           <Link to="/Donation" className="p-4 text-white"> תרמו לנו</Link> |
           <Link to="/Partners" className="p-4 text-white"> שותפים</Link>   |
           <Link to="/Contact" className="p-4 text-white"> צור קשר</Link> 
      </div>

      <div className="footer-icons text-dark text-center pt-4">
            <SiInstagram size="1.5em" color="white" />--   
            <SiFacebook size="1.5em" color="white" px-3 />
          </div>
      </footer>
    </div>
    </Router>

    
  );
}

export default App;
