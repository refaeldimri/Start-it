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

function App() {
// onMouseLeave={() => setIsShown(false)}  
  const [isShown, setIsShown] = useState(false);

  // getElementById('communities').hover(()->{this.})
  return ( 
  <Router>
<<<<<<< HEAD
    <div className="App">
    <div onMouseLeave={() => setIsShown(false)}> 
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
  <Link className="navbar-brand text-center" onMouseEnter={() => setIsShown(false)} to="/main">גמני<br/>אנחנו לא לבד</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(true)} to="#">קהילות</Link>
=======
    <div className="App">   
      <header className="container-fluid bg-dark text-white text-right" style={{height:75}}>
        <div class="row">
          <div class="logo col-2 text-right">
           <Link to="/" class="p-0 text-white"> התחבר</Link> |
           <Link to="/Register" class="p-0 text-white"> הרשם</Link> | 
           <Link to="/Contact" class="p-0 text-white"> צור קשר</Link>   
          </div>
          <div class="menu1 col-9">
          <Link to="/Main" class="p-4 text-white"> דף הבית</Link> |
           <Link to="/Community" class="p-4 text-white"> קהילות</Link> |
           <Link to="/Information" class="p-4 text-white"> מידע שימושי</Link> | 
           <Link to="/Partners" class="p-4 text-white"> שותפים</Link> |
           <Link to="/Donation" class="p-4 text-white"> תרמו לנו</Link> 
          </div>
          <div class="menu2 col-1"> גמני </div>
        </div>
        
        <div class="row">
    
        <div class="col-4"></div>
        <div class="col-4 input-group py-1 border-dark">
        <input type="text" class="form-control border-white text-right" placeholder="חפש לי מחלה\קרבה" />
        <select class="bg-white" style={{border:0}}>
             <option value="a"></option>
             <option value="b">b</option>
             <option value="c">c</option>
             <option value="d">d</option>

        </select>
        </div>
        <div class="col-4"></div>
        
        </div>
      </header>
    <div className="App">
    <div onMouseLeave={() => setIsShown(false)}> 
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
  <Link className="navbar-brand text-center" onMouseEnter={() => setIsShown(false)} to="/main">גמני<br/>אנחנו לא לבד</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" onMouseEnter={() => setIsShown(true)} to="/communities">קהילות</Link>
>>>>>>> rtl site + new header + communities special menu
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
<nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <input className="col-3 Dropdown.toggler form-control" onClick={()=> setIsShown(false)} type="search" placeholder="Search" aria-label="Search" />
      <DropdownButton className="ml-5" id="dropdown-basic-button" onClick={()=> setIsShown(false)} title="מיון לפי מחלה">
        <Dropdown.Item className="text-right" href="#">מחלון</Dropdown.Item>
        <Dropdown.Item className="text-right" href="#">כליון</Dropdown.Item>
        <Dropdown.Item className="text-right" href="#">עוד מחלון</Dropdown.Item>
      </DropdownButton>
      <button className="col-1 ml-5 mr-auto mb-3 btn btn-outline-success" onMouseEnter={() => setIsShown(false)}>הוספת סיפור</button>
 </nav>

          {isShown && (
<nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">מתמודדי נפש מספרים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">הורים מספרים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">בני ובנות זוג מספרים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">אחים ואחיות מספרים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">ילדי מתמודדים מספרים</Link>
      </li>
      <li className="nav-item my-auto">
        <Link className="nav-link" to="/Partners">קרובים וחברים מספרים</Link>
      </li>
    </ul>
</nav>

      )}
</div>       
      <Switch>
        <Route exact path="/" component = {Login} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/contact" component = {Contact} />
        <Route exact path="/community" component = {Community} />
        <Route exact path="/information" component = {Information} />
        <Route exact path="/partners" component = {Partners} />
        <Route exact path="/donation" component = {Donation} />
        <Route exact path="/main" component = {Main} />  

      </Switch>
    </div>
   
      <footer class="page-footer font-small blue bg-dark">
       <div class="row">
         <div class="footer-menu text-center col-12 text-right text-white">
           <Link to="/" class="p-4 text-white"> אודות</Link> |
           <Link to="/Information" class="p-4 text-white"> מידע שימושי</Link> | 
           <Link to="/Donation" class="p-4 text-white"> תרמו לנו</Link> |
           <Link to="/Partners" class="p-4 text-white"> שותפים</Link>   |
           <Link to="/Contact" class="p-4 text-white"> צור קשר</Link> 
          </div>
      </div>

      <div class="footer-icons text-dark text-center py-3">
            <SiInstagram size="1.5em" color="white" />--   
            <SiFacebook size="1.5em" color="white" px-3 />
          </div>
      </footer>

    </Router>

    
  );
}

export default App;
