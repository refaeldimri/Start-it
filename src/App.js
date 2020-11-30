import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
  return ( 
  <Router>
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
