/* eslint-disable react/style-prop-object */
import react, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from './register';
import '../login.css'

class Login extends Component {
    render(){
  return (
    <Router>
    <div className="container-fluid bg-white" style={{height:25}}></div>
    <div className="container bg-light" style={{height:550}}>
      <div className="row">
      <div className="col bg-dark" style={{height:550}}></div>
      <div className="col bg-light" style={{height:550}}>          
      <form>
                <h1 class="text-center text-danger font-weight-bold bg-">התחברי</h1>
                <br></br>
                <input class="content-center" type="email" placeholder="Email"/>
                <input class="row-2" type="password" placeholder="Password"/>
                <p class="font-italic"><a href="#">שחכתי סיסמא</a></p>
                <button>התחברי לאתר</button> 
                <label class="font-weight-bold">או</label>  
                <button>התחברי עם פייסבוק</button> 
      </form>
      </div>
        </div>
        </div>
  </Router>

  )
    }
}

export default Login;
